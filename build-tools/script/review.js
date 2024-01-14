const { execSync } = require('child_process');
// eslint-disable-next-line import/no-extraneous-dependencies
const { argv } = require('yargs');
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');

const pkg = require('../../package');

const CHIME_WEBHOOK = '';

const REVIEW = {
  reviewers: [pkg.buddy, 'ldap:custom-dt:optional'],
  notificationAlias: pkg.buddy || 'all',
  type: 'Comprehensive Review',
  repository: pkg.repository.url,
  parent: 'mainline',

  user: '', // programmatic
  r: '', // programmatic
  ...argv,
};

const getUser = async () =>
  execSync('whoami')
    .toString()
    .trim();

const prepareReview = async () => {
  if (!Array.isArray(REVIEW.reviewers)) {
    REVIEW.reviewers = [REVIEW.reviewers];
  }

  REVIEW.reviewers = REVIEW.reviewers.filter(r => r !== undefined).join(',');

  REVIEW.user = await getUser();

  REVIEW.r = REVIEW.r.toString();

  /**
   * Execute review
   */

  const output = execSync(
    `cr --parent ${REVIEW.parent} --reviewers ${REVIEW.reviewers}${
      REVIEW.desc && REVIEW.desc.length
        ? ` --description ${JSON.stringify(`${REVIEW.type} - ${REVIEW.desc}`)}`
        : ''
    }${REVIEW.r && REVIEW.r.length ? '' : ' --new-review'} --publish`,
  ).toString();

  // eslint-disable-next-line no-console
  console.log(`${chalk.whiteBright(output)}`);

  /**
   * Prepare final review content
   */

  REVIEW.r = output.split('https://code.amazon.com/reviews/')[1].trim();

  return REVIEW;
};

// const sendNotification = async review => {
//   let bash = `curl -X POST "${CHIME_WEBHOOK}" -H "Content-Type:application/json"`;

//   const content = `@${REVIEW.notificationAlias}\nCode Review Request from @${
//     REVIEW.user
//   }\nReview Type: ${REVIEW.type}\nReview Description: ${
//     REVIEW.desc && REVIEW.desc.length ? REVIEW.desc : 'Not provided'
//   }\nReview Link: https://code.amazon.com/reviews/${REVIEW.r}\nRepo Link: ${
//     REVIEW.repository
//   }`;

//   bash += ` --data '{"Content": ${JSON.stringify(content)}}'`;

//   const output = execSync(bash);

//   return output;
// };

const submitReview = async () => {
  try {
    const review = await prepareReview();

    // eslint-disable-next-line no-console
    console.log(
      `${chalk.black.bgGreen(' DONE ')} ${chalk.green(
        'Your Code Review is now available at',
      )} ${chalk.greenBright.underline(
        `https://code.amazon.com/reviews/${REVIEW.r}`,
      )}`,
    );

    // eslint-disable-next-line no-console
    console.log(
      `\n${chalk.green(
        'For further updates, please use:',
      )} ${chalk.greenBright.bold(
        `yarn run review --parent ${REVIEW.parent} --r ${
          REVIEW.r.split('CR-')[1]
        }`,
      )}\n`,
    );

    // const notification = await sendNotification(review);

    // success
    process.exit(0);
  } catch (e) {
    throw new Error(e);
  }
};

submitReview();

import { createGlobalStyle, css } from 'styled-components';

const pkg = require('../../../package.json');

function escapeCSS(tileId = '') {
  if (ESCAPE_IFRAME)
    return css`
      #${tileId} {
        iframe {
          display: none;
        }
      }
    `;

  return '';
}

const StoresReset = createGlobalStyle`
  .stores-page {
    padding: 0;

    ${'' /* #header,
    #share {
      display: none;
    } */}

    .stores-container {
      max-width: 100%;
    }

    [class^="EditorialRow"],
    [class^="style__row"],
    [class^="EditorialTile"] {
      padding: 0 !important;
    }

    ${escapeCSS(pkg.campaign.tileId)} 
  }
`;

export default StoresReset;

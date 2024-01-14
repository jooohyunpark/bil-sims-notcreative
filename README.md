# Endemic boilerplate

## Brief

Please add the campaign's brief here.

---

## Quick links

**Project management**

- [Salesforce assignment](https://ams-amazon.my.salesforce.com/xxx)
- [Playbook]()
- [InVision boards]()

**Project previews**

- [Live page]()
- [Desktop preview]()
- [Tablet preview]()
- [Mobile preview]()

---

# Boilerplate documentation

## Description

This Boilerplate aims to enhance the developer experience when setting up new campaigns. It checks for code quality, prevents deployments from overwriting existing projects and makes local development easier by providing a public url accessible from any device. In addition, asset paths are auto-generated during the build to ensure they are served through Media Central (CDN) for a low-latency CX.

---

## Features

**Framework**

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) (async store mutations)

**Build tools**

- [Webpack 4](https://github.com/webpack/webpack)
- [Webpack 5](https://github.com/webpack/webpack)
- [Styled Components](https://styled-components.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [PostCSS](https://postcss.org/) with [postcss-preset-env](https://preset-env.cssdb.org/features#all-property)
- [Image optimization](https://github.com/Klathmon/imagemin-webpack-plugin)
- [Gzip](https://github.com/webpack-contrib/compression-webpack-plugin)

**Testing tools**

- [Public DevServer using Ngrok](https://code.amazon.com/packages/ADT-Boilerplate-webpack-preact/blobs/mainline/--/build-tools/script/ngrok.js) (Custom made Webpack Plugin)
- [Jest Unit Testing](https://jestjs.io)

**Coding style**

- [Airbnb coding standard](https://github.com/airbnb/javascript) (integrated with es-lint)
- [Prettier](https://prettier.io/) (integrated with es-lint)
- [Flow Types](https://flow.org/) (variable types in JavaScript)
- [Husky](https://github.com/typicode/husky) (Lint code before commiting)
- [Async](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a)

**Documentation**

- [ESDoc](https://esdoc.org/)

---

## Installation with Peru

### Create local Peru workspace

To work with Peru, follow these steps:

1. [Set up local Brazil/Peru environment](https://builderhub.corp.amazon.com/docs/brazil/user-guide/howto-local-environment.html)

2. Create a local Peru workspace

   ```
   brazil ws create \
     --versionset USBILEndemic/development \
     --name <your-workspace>
   ```

3. Move inside it with

   ```
   cd <your-workspace>
   ```

---

### Import the Boilerplate

To use the boilerplate in a new project, follow these steps:

1. [Create a new package](https://octane.amazon.com/package)
2. Inside your Peru workspace run:
   ```
   brazil ws use -p <your-package-name>
   ```
   This will add your package inside `src/<your-package-name>`
3. Move inside your package:
   ```
   cd src/<your-package-name>
   ```
4. Run the following:
   ```
   git remote add boilerplate ssh://git.amazon.com/pkg/Custom-endemics-us-boilerplate \
   && git pull boilerplate mainline --allow-unrelated-histories \
   && git remote remove boilerplate \
   && git branch --set-upstream-to origin mainline
   ```
5. Change the package name from `Custom-endemics-us-boilerplate` to `<your-package-name>` in `brazil.ion` and remove `Config` file
6. Run `brazil-build`

---

### Command: Local development

`brazil-build run dev`

# Legacy Installation

### Permissions

You will need [permissions](https://permissions.amazon.com/group.mhtml?target=706819) to upload to MC. The permissions group uses 'manager-approval' model which means you will have your manager add you to the list.

---

### Harmony

In order to install all the proper dependencies, you now need to be authenticated to the amazon npm registry. Harmony has a cli which makes this a single command

#### Install the Harmony CLI

`npm install -g git+ssh://git.amazon.com/pkg/HarmonyCLI#master`

#### Switch to internal npm registry

`harmony npm`

Note: You may need to run this again when you add new packages to your build, the credentials expire every day. Run `harmony npm --disable` to revert back to npmjs.org.

---

### Import the Boilerplate

To use the boilerplate in a new project, follow these steps:

1. [Create a new package](https://octane.amazon.com/package)
2. Clone your new package locally
3. Run the following inside your new package:
   `git remote add boilerplate ssh://git.amazon.com/pkg/Custom-endemics-us-boilerplate && git pull boilerplate mainline --allow-unrelated-histories && git remote remove boilerplate && git branch --set-upstream origin mainline`

---

### Package.json

Update `package.json` with your own settings:

```javascript
"author": {
  "name": "{Full Name}",
  "url": "https://phonetool.amazon.com/users/{alias}"
},
"campaign": {
  "tileId": "{Custom Code tile id}", // unique id from Stores Custom Code block, only required for escaping iframe
  "id": "{campaign id}", // unique root node identifier (the shorter the better), <div id="{yourId}"></div>
  "title": "{campaign title}", // used for Tab names, metatags, and Mobile HomeScreen
  "description": "{campaign description}", // used for metatags, and Mobile HomeScreen
},
"buddy": "{buddy alias / e.g abiteau}", // used to submit code reviews. Default to "all" ADT Chime group
"repository": {
  "type": "git",
  "url": "https://code.amazon.com/packages/ADT-Boilerplate-webpack-preact" // used to submit code reviews
},
```

---

### Install dependencies

This boilerplate uses **Yarn** as a package manager.
You can install Yarn through the [Homebrew package manager](https://brew.sh/). This will also install Node.js if it is not already installed.

`brew install yarn`

From there you can install local dependencies

`yarn`

---

## Local Development

### Node Version

This boilerplate works best with Node v16.x

### Asset manifest

#### Introduction

Every static asset consumed by your app must be mapped in the `asset-manifest.json` with its name, local path, and physical id. This allows files to be referenced by their path when developing locally, and by the physical id when deployed. The manifest is processed by webpack at runtime and build, and is reloaded automatically anytime changes are made in it.

**Example: asset-manifest.json**

```
{
  "logo": {
    "path": "static/logo.png",
    "physicalId": "216lemwC9SL"
  },
  "test": {
    "path": "static/image/test.jpg",
    "physicalId": ""
  }
}
```

⚠️ PhysicalIds are only generated once the assets are uploaded to Media Central. Although not required for Local Development, they must be added to the manifest in order to proceed with the deployment of your campaign.

You may upload assets manually and copy their PhysicalIds to the manifest, or run the helper command `yarn run upload:assets`. This command will automatically upload all the assets defined in your `asset-manifest.json`, and update the manifest with the latest PhysicalIds.

#### Usage

To access asset paths inside of your component, there is a util created called `getAssetPath` that you call from your js components and from your scss files.

**Example: js component**

```javascript
import getAssetPath from 'util/asset';

const coverPath = getAssetPath('test');
const coverImage = new Image();

coverImage.src = coverPath;
```

**Example: scss file**

For scss its already a webpack function, so there is no need to include anything in your scss and you are able to call it directly:

```scss
.cover {
  $cover: getAssetPath('test');
  background-image: url(#{$cover});
}
```

#### WidgetContext

The boilerplate passes down `widgetContext` object that is exposed in Stores `iframe` window. This object has useful information such as `customerId`, `language`, `freshCartCsrfToken`, etc. You can access it through `WidgetContext.Cosnumer`.

---

### Command: Local development

`yarn dev`

---

### Command: Public development (using Ngrok)

`yarn dev --public`

This will create a new Ngrok instance and make your local server publically available. Additionally, all URLs will be prefixed for easy Remote Debugging.

---

## Deployment

### Command: Assets upload

`yarn upload:assets`

Will upload all assets defined in your `asset-manifest.json`, and update the manifest with the latest PhysicalIds.

⚠️ The upload of assets to Media Central is required in order to build your campaign for production.

---

### Command: Build

`yarn build`

Will build your app for production.

---

### Command: Deploy

`yarn deploy`

Will build your app for production, and upload the bundle on Media Central.

⚠️ Only the bundle is uploaded to Media Central. If your App uses static assets, you will need to run `yarn run upload:assets` first.

---

## Other commands

### Command: Code Reviews

Generate a new Code review

`yarn review`

By default, all new Code Reviews will compare your current branch to **mainline**. It is recommended to follow [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)'s guidelines and always work from a **feature/-** branch. Once the feature is ready, please submit your code review.

Overrides are possible.

`yarn review --parent develop`

The task above will compare your branch to the remote's **develop**

As per best practicies, it is also recommended that you provide a quick description for your Code Review.

`yarn review --desc "My short description"`

Will help watchers understand the purpose of the Review straight from the Chime channel.

Once a Code Review is submitted, you can start publishing new revisions:

`yarn review --r 1234`

This task will submit a new revision for the **CR-1234**.

---

### Command: Lint

`yarn lint`

Will parse your code using eslint and Flow.

---

### Command: Test

`yarn test`

Will run all \*.test.jsx? files.

---

### Command: Documentation

`yarn docs`

Will generate a complete documentation of your App, using your ESDoc comments.

---

### Command: Analyze

`yarn analyze` will analyze your Bundle's size

---

## Troubleshooting

### Unable to install the Harmony CLI

If unable to install the Harmony CLI using the standard method. Please run instead:

```shell
git clone ssh://git.amazon.com/pkg/HarmonyCLI
```

```shell
cd HarmonyCLI
```

```shell
npm i -g
```

---

## Roadmap

Documentation:

- Add screenshots (--public etc)
- Add docs for static / staticRoot

---

## Feature Request

Please submit your requests here:

| Request                                 | DT        | Severity | Status |
| --------------------------------------- | :-------- | -------: | -----: |
| Add Auto-generated Freeform             | @danieapt |        2 |      ✓ |
| Prefix css to avoid instances conflicts | @abiteau  |        2 |      ✓ |
| Add support for TypeScript              | @abiteau  |        5 |        |
| Use css variables + IE polyfill         | @abiteau  |        5 |      ✓ |

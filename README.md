# Boilerplate
## Workflow for small HTML, SCSS, Javascript ES6 projects.

This workflow is using GulpJS, Sass, browserSync, webpack and Babel to allows you to compile your SCSS files in CSS files, forget about -webkit- prefixing and earn some time reloading your page with an autoreload system when you save your HTML, SCSS or JS files.
You can also use BrowserSync to open your html pages on your mobile or other devices simultaneously.
Use imports and exports calls to organize your javascripts files and your js librairies and write ES6 Javascript without worrying about browser compatibility.

## Getting started


### Clone this repository

```
git clone git@github.com:leochocolat/boilerplate.git
```

### Make sure you have Node, NPM and Gulp on your machine :

Type these commands on your terminal
```
$ node --version
```
```
$ npm --version
```

* If you don't have Node Installed :
[Install Node](https://nodejs.org/en/download/)
* If you don't have NPM :
[Install NPM](https://www.npmjs.com/get-npm)

### Install Gulp Globaly :
```
$ npm install --global gulp-cli
```

Verify your gulp installation typing :
```
$ gulp --version
```

### Install dependencies

Got to your project folder :
```
$ cd boilerplate
```
You can now install all the dependencies you need by running :
```
$ npm install
```

### Start

#### Run Gulp
You are almost ready to go, you just need to run :
```
$ npm start
```
Your Home page will open on localhost:3000, your scss files will be compiled and all your files watched to live reload your html page when saved.

#### Run Webpack

If you want to compile your js files, you can run :
```
$ npm run dev
```

Your js files will be compiled and import/export calls will be translated to be understood by your browser.

**You can start killing the front-end game.**

## Documentation

### If you're not familiar with this kind of workflow :

The project structured is like this :
```
your-project
  |- package.json
  |- webpack.config.js
  |- /dist
    |- /css
      |- app.css
    |- /javascript
      |- bundle.js
    |- index.html
  |- /src
    |- /data
    |- /scss
    |- /javascript
      |- index.js
    |- /sources
  |- /node_modules
```
The *dist* folder is about everything that your browser will be actually using for rendering your website, you should not have to work in css or js files here, you only have to focus on the *src* folder.

* for SCSS : You just have to create your scss file and to import them in the global file that your page will actually use for now you can just import all your files in the app.scss file. If gulp is running every change you make on your scss file will reload your browser with the new styles you added.

* for Javascript : index.js is compiled by webpack and transformed by Babel in dist/javascript/bundle.js so your browser can understand it. Inside index.js you can import all your js files.  

## TODO

* Add sources manager with webpack
* Add HTML templating system (Handlebars?)
* Re-write readme

## Copyright

developed by [Léo Mouraire](https://leomouraire.com)
MIT license.

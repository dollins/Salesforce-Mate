# Salesforce Mate

## Browsers support

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| WIP| last 2 versions



```
$ npm install
$ npm run dev
$ node build.js
$ node build.js --rebuild
$ node build.js --remove-build
$ node build.js --remove-build-full
```

### TODO:
----------TO DO--------------------------------------------------------------------------------
- [ ] Build all app together with VUE.
- [ ] Single screen app, last part of puzzle.
- [ ] UI for Credentials. "popup" in browser app.
- [ ] UI for multi credentials app for each single app page. Tabs a like web.
- [ ] Setting app. Whole page.
- [ ] Event log. In localStorage. Data Import, Data Export, Object Description, Credentials Manipulation.
- [ ] Add SLDS SASS package.
- [ ] Support for Safari.

----------IN PROGRESS--------------------------------------------------------------------------
- [ ] Credentials module. Read, Write, Update, Delete to internal storage. Dynamic links.


----------DONE----------------------------------------------------------------------------------
- [x] Connect the app and build with current implementation.
- [x] Support for Opera.
- [x] Install npm package to extend laravle mixins to create .zip file where it can be changed to .xpi and create complete build with laravel mixins. Delete the addon-firefox afterwards. Everything moved to the webpack.mix.js.
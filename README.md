# Salesforce Mate

## Browsers support

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last version| last version| last version| last version



```
$ npm install
$ npm run dev
```

### TODO - This list will allow to focus only on development of functionality, which is ultimate goal:
----------TO DO-------------------------------------------------------------------------------
- [ ] Single screen app, last part of puzzle. Click on side menu a show site with button back get back to the page. :) 
- [ ] UI for multi credentials app for each single app page. Tabs a like web.
- [ ] Setting app. Whole page.
- [ ] Event log. In localStorage. Data Import, Data Export, Object Description, Credentials Manipulation.
- [ ] Support for the DarkMode.

----------IN PROGRESS--------------------------------------------------------------------------
- [ ] Credentials module. Read, Write, Update, Delete to internal storage. Dynamic links.
- [ ] UI for Credentials. "popup" in browser app.

----------DONE----------------------------------------------------------------------------------
- [x] Connect the app and build with current implementation.
- [x] Support for Opera.
- [x] Install npm package to extend laravle mixins to create .zip file where it can be changed to .xpi and create complete build with laravel mixins. Delete the addon-firefox afterwards. Everything moved to the webpack.mix.js.
- [x] TypeScript for whole project.
- [x] Build all app together with VUE. SetUp is done.
- [X] Add SLDS SASS package.
- [X] Add Credentials, Event and Setting types to the project as basic building stone. Basically all the data stored by the app.
- [X] Support for Safari.
- [X] Support chrome i18n. - https://developer.chrome.com/docs/extensions/reference/i18n/



///safari
xcrun safari-web-extension-converter /Users/bartonicekpetr/Desktop/p/code/open_source/Salesforce-Mate/addon --app-name 'addon-safari' --swift --macos-only --force
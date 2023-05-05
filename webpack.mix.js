const mix = require("laravel-mix");
const fs = require("fs-extra");
const path = require("path");
const AdmZip = require("adm-zip");

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.js', '.vue', '.ts'],
  },
});

mix.setPublicPath("./")
    // Credential application
    .sass("src/components/popup/popup.scss", "addon/css")
    .ts("src/components/popup/popup.ts", "addon/js").vue()
    .copy("src/components/popup/popup.html", "addon")
    // Side-Menu application
    .sass("src/components/side-menu/side-menu.scss", "addon/css")
    .ts("src/components/side-menu/side-menu.ts", "addon/js").vue()
    .copy("src/components/side-menu/side-menu.html", "addon")
    // Arrow for Side-Menu
    .ts("src/components/arrow/arrow.ts", "addon/js")
    .sass("src/components/arrow/arrow.scss", "addon/css")
    // Session Id and Salesforce init script
    .ts("src/scripts/background.ts", "addon/js")
    // SLDS stylesheets https://www.lightningdesignsystem.com/
    .sass("src/styles/slds.scss", "addon/css")
    // Icons
    .copy("src/icons", "addon/icons")
    // Firefox Build
    .copy("addon", "addon-firefox")
    .copy("src/manifests/manifest-firefox.json", "addon-firefox/manifest.json")
    // Chrome - Edge - Opera Build
    .copy("src/manifests/manifest-chrome-edge-opera.json", "addon/manifest.json")
    .options({
        processCssUrls: false
    })
    .then(() => {
        // Firefox Build - zip
        zipFolder("addon-firefox", "addon-firefox.xpi", "Firefox build");
    })
    .then(() => {
        setTimeout(() => {
            // Firefox Build - delete original folder
            deleteFolder("addon-firefox", "Firefox build, cleaning");
        }, 0);
    });


function zipFolder(srcFolder = "", zipFile = "", desc = "", fullPath = false) {
    const zip = new AdmZip();
    const srcFolderPath = fullPath ? srcFolder : path.join(__dirname, srcFolder);
    const zipFilePath = fullPath ? zipFile : path.join(__dirname, zipFile);

    try {
        zip.addLocalFolder(srcFolderPath);
        zip.writeZip(zipFilePath);
    } catch (error) {
        console.error(`Zip for ${srcFolder} is not working with error: ${error}. ${desc}.`);
    }
}

function deleteFolder(folderPath = "", desc = "", fullPath = false) {
    const targetPath = fullPath ? folderPath : path.join(__dirname, folderPath);

    try {
        fs.removeSync(targetPath);
    } catch (error) {
        console.error(`Failed to delete folder: ${targetPath} with error: ${error}. ${desc}.`);
    }
}
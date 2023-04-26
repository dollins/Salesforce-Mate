const mix = require("laravel-mix");
const fs = require("fs-extra");
const path = require("path");
const AdmZip = require("adm-zip");

mix.setPublicPath("./")
    .sass("src/components/popup/popup.scss", "addon/css")
    .ts("src/components/popup/popup.ts", "addon/js")
    .vue()
    .copy("src/components/popup/popup.html", "addon")
    .copy("src/scripts/background.js", "addon/js")
    .copy("src/components/arrow/arrow.js", "addon/arrow/arrow.js")
    .copy("src/components/arrow/arrow.css", "addon/arrow/arrow.css")
    .copy("src/components/side-menu/side-menu.html", "addon/side-menu/side-menu.html")
    .copy("src/icons/", "addon/icons/")
    .copy("addon", "addon-firefox")
    .copy("src/manifests/manifest-chrome-edge-opera.json", "addon/manifest.json")
    .copy("src/manifests/manifest-firefox.json", "addon-firefox/manifest.json")
    .options({
        processCssUrls: false
    })
    .then(() => {
        zipFolder("addon-firefox", "addon-firefox.xpi", "Firefox build");
    })
    .then(() => {
        setTimeout(() => {
            deleteFolder("addon-firefox");
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

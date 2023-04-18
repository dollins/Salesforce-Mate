const fs = require("fs-extra");
const path = require("path");
const AdmZip = require("adm-zip");

copyFolder("addon", "addon-firefox", "Firefox addon");

copyFile("src/manifests/manifest-chrome-edge-opera.json", "addon/manifest.json", "Public manifest");
copyFile("src/manifests/manifest-firefox.json", "addon-firefox/manifest.json", "Firefox manifest");

zipFolder("addon-firefox", "addon-firefox.xpi", "Firefox build");

deleteFolder("addon-firefox");


function copyFolder(srcFolder = "", destFolder = "", desc = "", fullPath = false) {
    const sourcePath = fullPath ? srcFolder : path.join(__dirname, srcFolder);
    const destPath = fullPath ? destFolder : path.join(__dirname, destFolder);

    if (!fs.existsSync(sourcePath)) {
        throw new Error(`Source directory ${sourcePath} for ${desc} does not exist`);
    }

    if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
    }

    const files = fs.readdirSync(sourcePath);

    for (let file of files) {
        const srcPath = path.join(sourcePath, file);
        const destFilePath = path.join(destPath, file);
        const stats = fs.statSync(srcPath);

        if (stats.isDirectory()) {
            copyFolder(srcPath, destFilePath, "", true);
        } else {
            copyFile(srcPath, destFilePath, "", true);
        }
    }
}

function copyFile(srcFile = "", destFile = "", desc = "", fullPath = false) {
    const sourcePath = fullPath ? srcFile : path.join(__dirname, srcFile);
    const destPath = fullPath ? destFile : path.join(__dirname, destFile);

    try {
        fs.copyFileSync(sourcePath, destPath);
    } catch (error) {
        throw new Error(`Cannot be copied ${sourcePath} -> ${destPath} for ${desc} does not exist`);
    }
}

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
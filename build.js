const fs = require("fs-extra");
const path = require("path");
const AdmZip = require("adm-zip");

function copyDirSync(srcDir, destDir, fullPath, desc) {
    let sourcePath = srcDir;
    let destPath = destDir;
    if (fullPath === false) {
        sourcePath = path.join(__dirname, srcDir);
        destPath = path.join(__dirname, destDir);
    }

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
            copyDirSync(srcPath, destFilePath, true);
            srcDir = "";
            destDir = "";
        } else {
            copyFile(srcPath, destFilePath, true);
        }
    }
}

function copyFile(srcFile, destFile, fullPath, desc) {
    let sourcePath = srcFile;
    let destPath = destFile;
    if (fullPath === false) {
        sourcePath = path.join(__dirname, srcFile);
        destPath = path.join(__dirname, destFile);
    }
    fs.copyFileSync(sourcePath, destPath);
    console.log(`File ${sourcePath} -> ${destPath} is copied ${desc}.`)
}

function zipFolder(srcFolder, zipFile, desc) {
    const srcFolderPath = path.join(__dirname, srcFolder);
    const zipFilePath = path.join(__dirname, zipFile);
    const zip = new AdmZip();
    try {
        zip.addLocalFolder(srcFolderPath);
        zip.writeZip(zipFilePath);
        console.log(`Folder ${srcFolder} is ziped. For ${desc}.`);
    } catch (error) {
        console.error(`Zip for ${srcFolder} is not working with error: ${error}.`);
    }
}

copyDirSync("public", "addon", false, "Chrome and Edge addon");
copyDirSync("public", "addon-firefox", false, "Firefox addon");

copyFile("src/manifests/manifest-chrome-edge.json", "public/manifest.json", false, "Public manifest");
copyFile("src/manifests/manifest-chrome-edge.json", "addon/manifest.json", false, "Chrome manifest");
copyFile("src/manifests/manifest-firefox.json", "addon-firefox/manifest.json", false, "Firefox manifest");

zipFolder("addon-firefox", "addon-firefox.zip", "Firefox build");

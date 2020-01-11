const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const BASE_DIR = path.join(__dirname, "images");

async function run() {
  let images = await fs.readdir(path.join(BASE_DIR, "original"));

  for (let image of images) {
    let sourcePath = path.join(BASE_DIR, "original", image);
    let targetPath = path.join(BASE_DIR, "medium", image);

    let sharpInstance = sharp(sourcePath);

    console.log("Minifying:", sourcePath);

    await sharpInstance
      .resize(700)
      .jpeg()
      .toFile(targetPath);
    console.log("Saved JPEG");

    await sharpInstance
      .resize(700)
      .webp({ reductionEffort: 6 })
      .toFile(targetPath.replace(".jpg", ".webp"));
    console.log("Saved WEBP");
  }
}

run();

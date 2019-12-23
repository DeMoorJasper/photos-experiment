const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const BASE_DIR = path.join(__dirname, "images");

async function run() {
  let images = await fs.readdir(path.join(BASE_DIR, "original"));

  for (let image of images) {
    let sourcePath = path.join(BASE_DIR, "original", image);
    let targetPath = path.join(
      BASE_DIR,
      "medium",
      image.replace(".jpg", ".webp")
    );

    let sharpInstance = sharp(sourcePath);
    await sharpInstance
      .resize(1200)
      .webp()
      .toFile(targetPath);
  }
}

run();

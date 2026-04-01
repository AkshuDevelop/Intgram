const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function uploadFile(buffer) {
  const result = await imagekit.client.upload({
    file: buffer,
    fileName: "image.jpg",
  });
  return result;
}

module.exports = uploadFile;

const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const desktopPath = path.join('C:', 'Users', 'samet_000', 'Desktop');

const inputFilePath = path.join(desktopPath, 'Mezuniyet.mp4');
const outputFilePath = path.join(desktopPath, 'MezuniyetZIP.zip');

const fileSize = fs.statSync(inputFilePath).size;

const option = {
  highWaterMark: 1048576 // 1 MB
};

const readableStream = fs.createReadStream(inputFilePath, option);
const writeableStream = fs.createWriteStream(outputFilePath, option);

let processedBytes = 0;

const progressBar = (chunk) => {
  processedBytes += chunk.length;
  let progress = Math.floor((processedBytes / fileSize) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${progress}% Complete...`);
};

const runZipping = async () => {
  try {
    readableStream.on('data', (chunk) => {
      progressBar(chunk);
    });

    await pipeline(readableStream, zlib.createGzip(), writeableStream);
  } catch (err) {
    console.error(err);
  } finally {
    writeableStream.end();
  }
};

runZipping();

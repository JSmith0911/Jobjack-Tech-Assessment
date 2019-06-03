const path = require('path');
const fs = require('fs');

const getFileInfoFromFolder = (route) => {
  const files = fs.readdirSync(route, 'utf8');
  const response = [];
  for (let file of files) {
    const extension = path.extname(file);
    const fileSizeInBytes = fs.statSync(file).size;
    response.push({ name: file, extension, fileSizeInBytes });
  }
  return response;
}

const { name, extenstion, fileSizeInBytes } = getFileInfoFromFolder("...")
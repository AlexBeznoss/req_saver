const fs = require('fs');

function saveHeaders(req) {
  return new Promise((resolve) => {
    const stream = fs.createWriteStream("headers.txt");

    for (const [name, value] of Object.entries(req.headers)) {
      stream.write(`${name}: ${value}\r\n`);
    }

    stream.end();
    resolve();
  });
}

function saveBody(req) {
  return new Promise((resolve) => {
    fs.writeFileSync("body.txt", req.body);
    resolve();
  });
}

Object.assign(module.exports, {
  saveHeaders,
  saveBody
});

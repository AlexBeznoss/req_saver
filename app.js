const express = require('express');
const app = express();
const { saveHeaders, saveBody } = require('./utils');
const PORT = 3000;

app.use(express.raw({ limit: "25mb", type: "*/*" }));

app.post('/headers', async function (req, res) {
  await saveHeaders(req);
  res.end();
})

app.post('/body', async function (req, res) {
  await saveBody(req);
  res.end();
})
app.post('/full', async function (req, res) {
  await Promise.all([saveHeaders(req), saveBody(req)]);
  res.end();
})

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

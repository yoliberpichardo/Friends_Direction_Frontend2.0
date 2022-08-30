const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist/spa')));
const port = process.env.PORT || 5681;
console.log(`Serve running on port: ${port}`);
app.listen(port);

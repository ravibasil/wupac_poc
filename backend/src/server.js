const express = require('express');
const cors = require('cors');
const http = require("http");
const bodyParser = require('body-parser')

const app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: "50mb" }))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Wupas" });
});

require('./routes/index')(app);

const PORT = process.env.PORT || 8000;
const httpServer = http.createServer(app);
console.log(`Server listening at ${PORT}`);
httpServer.listen(PORT);

exports.closeServer = function () {
  httpServer.close();
};
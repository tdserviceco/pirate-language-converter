const http = require('http');
const chalk = require('chalk');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || '3000';
const { get, put } = require('./functions/pirateConverter/pirate-converter');

dotenv.config()
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    if (req.method === 'GET') {
      let index = fs.createReadStream(__dirname + '/client/index.html', 'utf-8');
      index.pipe(res)
    }
  }
  else if (req.url === '/api/pirate') {
    if (req.method === 'GET') {
      res.writeHead(200).end(get())
    }

    else if (req.method === 'POST') {
      req.on('data', (data) => {

        // omvandlar data till sträng
        let resp = data.toString();

        // skicka tillbaka data till klient sidan
        res.writeHead(200).end(put(resp));
      })
    }
  }

  //Letar efter css, ico eller svg
  else if (req.url.match("\.css$")) {
    var cssPath = path.join(__dirname, 'client', req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);

  } else if (req.url.match("\.svg$")) {
    var imagePath = path.join(__dirname, 'client', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    fileStream.pipe(res);
  }

  else if (req.url.match("\.png$")) {
    var imagePath = path.join(__dirname, 'client', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  }

  else if (req.url.match("\.js$")) {
    var imagePath = path.join(__dirname, 'client', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "text/js" });
    fileStream.pipe(res);
  }

  else if (req.url.match("\.ico$")) {
    var imagePath = path.join(__dirname, 'client', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/ico" });
    fileStream.pipe(res);
  }
  else {
    res.writeHead(400).end('Yikes... error 400... kolla upp det!')
  }
})

server.listen(PORT, () => console.log(`${chalk.green('Server is: ')}${chalk.blue('http://localhost:')}${chalk.red(PORT)}`))
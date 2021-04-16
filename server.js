const chalk = require('chalk');
const { mysqlSetup, mongoDBSetup } = require('./db/dbSetup');
const express = require('express');
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const build = path.join(__dirname, 'build')
const rootFile = path.join(__dirname, 'build', 'index.html')

/** Database (uncomment to use it) **/
mongoDBSetup()

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json()) //So we can see .post request


// if you using a reactJS or similar and building a "build folder" this will run client side
try {
  if (fs.existsSync(build)) {
    app.use(express.static(__dirname));
    app.use(express.static(build));
    app.get('/*', (req, res) => {
      res.sendFile(rootFile);
    })
  }
} catch (err) {
  console.error(err)
}

app.get('/', (req, res) => {
  res.send('No build folder yet')
})

app.listen(port, () => console.log(chalk.green(`Listening on `) + chalk.blue(`http://localhost:`) + chalk.red(`${port}`)))
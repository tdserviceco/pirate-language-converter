const dotenv = require('dotenv');
dotenv.config();
const assert = require('assert');
const mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI;
const mysqlSetup = () => {
  let dbSetup = {
    host: '' || 'localhost',
    port: '' || 3306,
    user: '' || 'root',
    password: '' || 'root',
    database: '' || 'local'
  }

  const db = mysql.createConnection(dbSetup)
  db.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + db.threadId);
  });

  return db
}

const mongoDBSetup = () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    if (err) return console.log(err);
    console.log('connected to AtlasDB')
    const collection = client.db("demo").collection("demo-project");
    // perform actions on the collection object
    client.close();
  });
}

module.exports = { mysqlSetup, mongoDBSetup }
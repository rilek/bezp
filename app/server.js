import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import pug from 'pug';
import mysql from 'mysql';
import config from './config';
import parsePool from './parsePool';

const baseConnection = mysql.createConnection(config.dbConfig);
baseConnection.connect();

const fn = pug.compileFileClient( path.join(__dirname, '/templates/main.pug'), {name: 'fn'});
fs.writeFileSync( path.join(__dirname, '/../resources/js/', 'templates.js'), fn);

const thankYouPage = pug.compileFile( path.join(__dirname, '/templates/partials/thankYou.pug'));

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.text({ type: 'text/html' }));
if(config.isDev)
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.use('/resources', express.static(path.join(__dirname, '/../resources')));

app.get(['/', '/index.html', 'index'], (req, res) => res.sendFile( path.join(__dirname, '/../', 'index.html') ));
app.get(
  '/pool',
  (req, res) => res.json(
    Object.assign(
      parsePool(config.poolFilePath),
      { "questionPrefix": config.questionPrefix }
)));

app.post('/send', (req, res) => {
  const answers = req.body.answers.filter(itm => itm);
  const fileName = config.poolFilePath.match(/\/\w+\./)[0].slice(1, -1);

  if(typeof answers === "object") {
    const columns = answers.map((itm, idx) => "q"+idx).join(',');
    const val = answers.map(itm => "'" + itm.answer + "'").join(",").slice(1,-1);
    const query = `INSERT INTO ${fileName} ( ${columns} ) VALUES ( ${val}')`;
    console.log(query);


    if(!config.isDev) {
      baseConnection.query(`SHOW TABLES LIKE '${fileName}';`, function(err, results, fields) {
        if (err) throw err;
        if (results.length === 0) {
          const createTable = answers.map((itm, idx) => `q${idx} varchar(255),`).join('').slice(0,-1);
          baseConnection.query(
            `CREATE TABLE ${fileName} ( ${createTable} );`,
            (err, results) => {if(err) throw err;}
          );
        }
      });

      baseConnection.query(
        `INSERT INTO ${fileName} ( ${columns} ) VALUES ('${val}')`,
        function(error, results, fields) {
          if (error) throw error;
      });
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end( thankYouPage({finalText: req.body.finalText, answers: config.isDev ? JSON.stringify(answers, null, 2) : null}) );
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("BŁĄD");
  }
});

app.listen( config.port );
console.log(`Listening on ${config.host}:${config.port}`);

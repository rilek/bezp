import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import pug from 'pug';
import mysql from 'mysql';
import config from './config';
import parsePool from './parsePool';

const baseConnection = mysql.createConnection(config.dbConfig);

const fn = pug.compileFileClient(__dirname + '/main.pug', {name: 'fn'});
fs.writeFileSync( path.join(__dirname, '/../resources/js/', 'templates.js'), fn);
const thankYouPage = pug.compileFile(__dirname + '/partials/thankYou.pug');

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
app.get('/pool', (req, res) => res.json(parsePool("./resources/questions.csv")));

app.post('/send', (req, res) => {
  const answers = req.body.answers;
  const val = answers.filter(itm => itm).map(itm => itm.question + ": " + itm.answer).join('\n');

  if(!config.isDev) {
    baseConnection.connect();
    baseConnection.query(`INSERT INTO pools (answers) VALUES ('${val}')`, function (error, results, fields) {
      if (error) throw error;
    });
    baseConnection.end();
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end( thankYouPage({finalText: req.body.finalText, answers: config.isDev ? JSON.stringify(answers, null, 2) : null}) );
});

app.listen( config.port );
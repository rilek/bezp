'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _parsePool = require('./parsePool');

var _parsePool2 = _interopRequireDefault(_parsePool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseConnection = _mysql2.default.createConnection(_config2.default.dbConfig);

var fn = _pug2.default.compileFileClient(_path2.default.join(__dirname, '/templates/main.pug'), { name: 'fn' });
_fs2.default.writeFileSync(_path2.default.join(__dirname, '/../resources/js/', 'templates.js'), fn);
var thankYouPage = _pug2.default.compileFile(_path2.default.join(__dirname, '/templates/partials/thankYou.pug'));

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_bodyParser2.default.text({ type: 'text/html' }));
if (_config2.default.isDev) app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.url);
  next();
});

app.use('/resources', _express2.default.static(_path2.default.join(__dirname, '/../resources')));

app.get(['/', '/index.html', 'index'], function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, '/../', 'index.html'));
});
app.get('/pool', function (req, res) {
  return res.json((0, _parsePool2.default)(_config2.default.poolFilePath));
});

app.post('/send', function (req, res) {
  var answers = req.body.answers;
  var val = answers.filter(function (itm) {
    return itm;
  }).map(function (itm) {
    return itm.question + ": " + itm.answer;
  }).join('\n');

  if (!_config2.default.isDev) {
    baseConnection.connect();
    baseConnection.query('INSERT INTO pools (answers) VALUES (\'' + val + '\')', function (error, results, fields) {
      if (error) throw error;
    });
    baseConnection.end();
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(thankYouPage({ finalText: req.body.finalText, answers: _config2.default.isDev ? JSON.stringify(answers, null, 2) : null }));
});

app.listen(_config2.default.port);
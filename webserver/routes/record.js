const express = require('express');
const router = express.Router();
const fs = require('fs');

const lastAndroidVersion = '1.0.0';

function sendStaticContent(res, url) {
  fs.readFile(`client/build/${url}`, (error, static) => {
    if (error) {
        console.log(error);
        res.statusCode = 404;
        res.end('Resourse not found!');
    } else {
        res.end(static);
    }
  });
}

router.get('/ic8office.apk', (req, res) => {
  fs.readFile(`release/ic8office-${lastAndroidVersion}.apk`, (error, apk) => {
    if (error) {
        console.log(error);
        res.statusCode = 500;
        res.end('Resourse not found!');
    } else {
        res.end(apk);
    }
  });
});

router.get('/manifest.json', (req, res) => {
  sendStaticContent(res, 'manifest.json');
});

router.get('/static/js/:file', (req, res) => {
  sendStaticContent(res, `static/js/${req.params.file}`);
});

router.get('/static/css/:file', (req, res) => {
  sendStaticContent(res, `static/css/${req.params.file}`);
});

router.get('/', (req, res) => {
  sendStaticContent(res, 'index.html');
});

module.exports = router;

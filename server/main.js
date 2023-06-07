const express = require('express');
const path = require('path');
const { readFileSync } = require('fs');
const { parse } = require('yaml');

const app = express();

const conf = parse(readFileSync(path.join(__dirname, 'conf.yaml'), 'utf8'));

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './dist' });
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile('favicon.ico', { root: './dist' });
});

app.listen(conf.port, () => {
    console.log(`App listening on port ${conf.port}`);
});

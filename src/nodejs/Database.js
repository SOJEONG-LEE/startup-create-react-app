const express = require('express');
const bodyParser = require('body-parser');
const pg = require("pg");

const app = express();
const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'skswjd9464',
    database: 'postgres',
    port: 5432
});
client.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/database', (request, response) => {
    client.query('select name, birth from temp;', (err, res) => {
        console.log(err, res);
        response.send(res);
    });
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
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

app.post('/checkid', (request, response) => {
    console.log("check id");
    let checkIdQuery = `select exists(SELECT * from member where id='${response.req.body.id}')`;
    console.log(checkIdQuery);
    client.query(checkIdQuery, (err, res) => {
       console.log("check id response", res.rows[0]);
       if(res.rows[0].exists === true){
           response.status(200).send({result:false});
       }else{
           response.status(200).send({result:true});
       }
    });

});

app.post('/form_update', (request, response) => {
    const body = response.req.body;
    console.log(body);
    const id = body.id;
    // var timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let sql = `INSERT INTO member(id, password, name, email, phone) VALUES ('${body.id}', '${body.password}', '${body.name}', '${body.email}', '${body.phone}')`;
    console.log(sql)
    client.query(sql, (err, res) => {
        if (err) {
            console.log(err.stack);
            response.status(400);
            response.send('Wrong Values');
        } else {
            console.log(res.rows[0])
            response.status(200).send();
        }
    });

});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
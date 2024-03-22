const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./router/routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use('/', router);

app.listen(process.env.PORT, () =>{
    console.log(`server listning at http://localhost:${process.env.PORT}`);
})
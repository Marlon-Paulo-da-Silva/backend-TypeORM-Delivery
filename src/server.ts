const dotenv = require('dotenv');
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(8080, ()=>{
    console.log('Running Server');
});
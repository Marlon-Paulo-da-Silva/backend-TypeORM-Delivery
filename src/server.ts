const dotenv = require('dotenv');
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(3333, ()=>{
    console.log('Running Server');
});
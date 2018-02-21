import * as express from 'express';
import * as helloController from './controllers/hello';

const app = express();

console.log('starting up');

app.post('/', helloController.post);
app.get('/', helloController.get);

module.exports = app;
import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { testVar: 13 });
});

app.use(express.static('public'));
app.listen(config.port, function listenHandler() {
  console.info(`Running on port ${config.port}...`);
});

const express = require('express');
const path = require('path');
require('cross-fetch/polyfill');

// initialize universal constants 
const app = express();
const host = '127.0.0.1';
const port = 8000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname))
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    // to do still 
    res.render('index', {Tweets: [{name: 'Ben', text: 'text', date: '07/03/18', other: 'More Info link'}]});
});

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}/`);
  });
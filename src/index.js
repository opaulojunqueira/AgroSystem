const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const agroNewsRSS = require('./modules/agroNews/rss');

const app = express();
app.use(cors())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('assets'));
app.use('/assets', express.static(__dirname + '/views/assets'));

app.get('/', async function (req, res) {
    let agroNews = await agroNewsRSS()

    // res.json(agroNews)
    res.render(__dirname + '/views/home/home.handlebars', await agroNews);
});

// app.use((req, res, next) => {
//     res.redirect('/');
// });

app.listen(80, () => {
    console.log('[AGROSYSTEM] - Iniciado com sucesso!');
});
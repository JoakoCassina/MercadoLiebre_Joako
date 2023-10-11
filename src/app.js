const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
});
app.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/register')
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login')
});

app.post('/', (req, res) => {
    res.redirect('/');
})

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
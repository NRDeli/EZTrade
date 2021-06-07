const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/coin/', (req, res) => {
    var name = req.body.coin;
    res.render('info', { name: name });
});

app.get('/company/:id',(req,res)=>{
    var company = req.params.id;
    res.render('category',{ company: company })
})

app.listen(3000, () => {
    console.log("Listening on port 3000 . . .");
});

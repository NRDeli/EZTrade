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
    let companies = ["Aditya Birla Sun Life Mutual Fund",
        "Axis Mutual Fund", "BNP Paribas Mutual Fund",
        "BOI AXA Mutual Fund", "Baroda Mutual Fund",
        "Canara Robeco Mutual Fund", "DSP Mutual Fund",
        "Edelweiss Mutual Fund", "Franklin Templeton Mutual Fund",
        "HDFC Mutual Fund", "HSBC Mutual Fund",
        "ICICI Prudential Mutual Fund", "IDBI Mutual Fund",
        "IDFC Mutual Fund", "IIFCL Mutual Fund (IDF)",
        "IIFL Mutual Fund", "IL&FS Mutual Fund (IDF)",
        "ITI Mutual Fund", "Indiabulls Mutual Fund",
        "Invesco Mutual Fund", "JM Financial Mutual Fund",
        "Kotak Mahindra Mutual Fund", "L&T Mutual Fund",
        "LIC Mutual Fund", "Mahindra Manulife Mutual Fund",
        "Mirae Asset Mutual Fund", "Motilal Oswal Mutual Fund",
        "Navi Mutual Fund", "Nippon India Mutual Fund",
        "PGIM India Mutual Fund", "PPFAS Mutual Fund",
        "Principal Mutual Fund", "Quantum Mutual Fund",
        "SBI Mutual Fund", "Shriram Mutual Fund",
        "Sundaram Mutual Fund", "Tata Mutual Fund",
        "Taurus Mutual Fund", "Trust Mutual Fund",
        "UTI Mutual Fund", "Union Mutual Fund",
        "YES Mutual Fund", "quant Mutual Fund",
        "Pearson Specter Litt", "Dunder Mifflin"
    ]
    res.render('home', { companies: companies });
});

app.post('/coin/', (req, res) => {
    var name = req.body.coin;
    res.render('info', { name: name });
});

app.get('/company/:id', (req, res) => {
    var company = req.params.id;
    res.render('category', { company: company })
})

app.listen(3000, () => {
    console.log("Listening on port 3000 . . .");
});

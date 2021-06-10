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
    const companies = ["Aditya Birla Sun Life Mutual Fund", "Axis Mutual Fund", "BNP Paribas Mutual Fund",
        "BOI AXA Mutual Fund", "Baroda Mutual Fund", "Canara Robeco Mutual Fund", "DSP Mutual Fund",
        "Edelweiss Mutual Fund", "Franklin Templeton Mutual Fund", "HDFC Mutual Fund", "HSBC Mutual Fund",
        "ICICI Prudential Mutual Fund", "IDBI Mutual Fund", "IDFC Mutual Fund", "IIFCL Mutual Fund (IDF)",
        "IIFL Mutual Fund", "IL&FS Mutual Fund (IDF)", "ITI Mutual Fund", "Indiabulls Mutual Fund",
        "Invesco Mutual Fund", "JM Financial Mutual Fund", "Kotak Mahindra Mutual Fund", "L&T Mutual Fund",
        "LIC Mutual Fund", "Mahindra Manulife Mutual Fund", "Mirae Asset Mutual Fund", "Motilal Oswal Mutual Fund",
        "Navi Mutual Fund", "Nippon India Mutual Fund", "PGIM India Mutual Fund", "PPFAS Mutual Fund",
        "Principal Mutual Fund", "quant Mutual Fund", "Quantum Mutual Fund", "SBI Mutual Fund",
        "Shriram Mutual Fund", "Sundaram Mutual Fund", "Tata Mutual Fund", "Taurus Mutual Fund",
        "Trust Mutual Fund", "UTI Mutual Fund", "Union Mutual Fund", "YES Mutual Fund"
    ];
    const logos = ["adityabirla.png", "axis.jpg", "bnpparibas.png", "boiaxa.jpg", "baroda.png", "canararobeco.png",
        "dsp.png", "edelweiss.jpg", "franklintempleton.png", "hdfc.png", "hsbc.jpg", "icici.jpg", "idbi.jpg",
        "idfc.jpg", "iifcl.jpg", "iifl.png", "il&fs.png", "iti.png", "indiabulls.png", "invesco.png",
        "jmfinancial.png", "kotakmahindra.png", "l&t.png", "lic.png", "mahindramanulife.png", "miraeasset.jpg",
        "motilaloswal.png", "navi.png", "nipponindia.jpg", "pgim.jpg", "ppfas.jpg", "principal.png", "quant.jpg",
        "quantum.png", "sbi.png", "shriram.png", "sundaram.png", "tata.png", "taurus.jpg", "trust.png", "uti.png",
        "union.png", "yes.png"
    ];
    res.render('home', { companies: companies, logos: logos });
});

app.post('/coin/', (req, res) => {
    var name = req.body.coin;
    res.render('info', { name: name });
});

app.get('/company/', (req, res) => {
    var schemes = req.query.scheme;
    res.render('category', { schemes: schemes })
})

app.listen(3000, () => {
    console.log("Listening on port 3000 . . .");
});

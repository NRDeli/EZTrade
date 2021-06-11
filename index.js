const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

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
        "idfc.jpg", "iifcl.jpg", "iifl.png", "il&fs.jpg", "iti.png", "indiabulls.png", "invesco.png",
        "jmfinancial.png", "kotakmahindra.png", "l&t.png", "lic.png", "mahindramanulife.png", "miraeasset.jpg",
        "motilaloswal.png", "navi.png", "nipponindia.jpg", "pgim.jpg", "ppfas.jpg", "principal.png", "quant.jpg",
        "quantum.png", "sbi.png", "shriram.png", "sundaram.png", "tata.png", "taurus.jpg", "trust.png", "uti.png",
        "union.png", "yes.png"
    ];
    const slogans = [""

    ]
    res.render('home', { companies: companies, logos: logos });
});

app.get('/info', async (req, res) => {
    var sch = req.query.scheme;
    var schemes = await schemeInfo(sch);
    res.render('info', { schemes: schemes });

});

app.get('/company/', async (req, res) => {
    var mf = req.query.mf;
    var schemes = await axiosTest(mf);
    //res.send(schemes);
    res.render('category', { schemes: schemes })
})

app.listen(3000, () => {
    console.log("Listening on port 3000 . . .");
});




async function axiosTest(value) {
    const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
            //Date: '04-Jun-2021',     //2007 onwards
            // SchemeName: 'a',
            //SchemeCode:'127629',
            //SchemeType: 'Open Ended Schemes',
            MutualFundFamily: value.toString(),
            //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
        },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    });
    var schemename = [];
    var schemecode = []

    for (let i = 0; i < response.data.length; i++) {
        schemename[i] = response.data[i]["Scheme Name"];
        schemecode[i] = response.data[i]["Scheme Code"];
    }
    var schemes = [schemename, schemecode];
    return schemes;
}


async function schemeInfo(value) {
    const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
            //Date: '04-Jun-2021',     //2007 onwards
            //SchemeName: value.toString(),
            SchemeCode: value.toString(),
            //SchemeType: 'Open Ended Schemes',
            //MutualFundFamily: value.toString(),
            //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
        },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    });
    var resp = response.data['0'];
    var schemename = resp["Scheme Name"];
    var schemecode = resp["Scheme Code"];
    var nav = resp["Net Asset Value"];
    var date = resp["Date"];
    var schemecategory = resp["Scheme Category"];
    var schemetype = resp["Scheme Type"];
    var schemefamily = resp["Mutual Fund Family"];
    var isingrowth = resp["ISIN Div Payout/ISIN Growth"];
    var isinrein = resp["ISIN Div Reinvestment"];
    var scheme = [schemename, schemecode, nav, date, schemecategory, schemetype, schemefamily, isingrowth, isinrein];
    return scheme;

}

async function schemeHistory(date, value) {
    const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
            //Date: '04-Jun-2021',     //2007 onwards
            //SchemeName: value.toString(),
            SchemeCode: value.toString(),
            //SchemeType: 'Open Ended Schemes',
            //MutualFundFamily: value.toString(),
            //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
        },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    });
    var resp = response.data['0'];
    var schemename = resp["Scheme Name"];
    var schemecode = resp["Scheme Code"];
    var nav = resp["Net Asset Value"];
    var date = resp["Date"];
    var schemecategory = resp["Scheme Category"];
    var schemetype = resp["Scheme Type"];
    var schemefamily = resp["Mutual Fund Family"];
    var isingrowth = resp["ISIN Div Payout/ISIN Growth"];
    var isinrein = resp["ISIN Div Reinvestment"];
    var scheme = [schemename, schemecode, nav, date, schemecategory, schemetype, schemefamily, isingrowth, isinrein];
    return scheme;

}


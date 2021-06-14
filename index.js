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
    var sch = req.query.scheme; //to fetch from link in tab
    var schemes = await schemeInfo(sch);    
    // var getmul= await getMulInfo(schemes);
   
//monthlong
    var monL = await yearlong(schemes[3],schemes[1]);
    console.log("dd"+monL);

    res.render('info', { schemes: schemes });
    // res.render('info', { schemes: schemes , getmul:getmul });
});

app.get('/company/', async (req, res) => {
    var mf = req.query.mf;
    var schemes = await axiosTest(mf);
    //res.send(schemes);
    // console.log(schemes);
    res.render('category', { schemes: schemes })
});

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
    const response = await axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchHistoricalNAV', {
        params: {
            Date: date,     //2007 onwards
            //SchemeName: value.toString(),
            SchemeCode: value,
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

    // var schemename = resp["Scheme Name"];
    // var schemecode = resp["Scheme Code"];
    var nav = resp["Net Asset Value"];
    var date = resp["Date"];
    // var schemecategory = resp["Scheme Category"];
    // var schemetype = resp["Scheme Type"];
    // var schemefamily = resp["Mutual Fund Family"];
    // var isingrowth = resp["ISIN Div Payout/ISIN Growth"];
    // var isinrein = resp["ISIN Div Reinvestment"];
    // var scheme = [schemename, schemecode, nav, date, schemecategory, schemetype, schemefamily, isingrowth, isinrein];
    var scheme =[nav,date];
    return scheme;

}

// to check for saturday and sunday and if yes then get friday's data
async function isHoliday(s){
    if (s.getDay() == 0 ){
        // console.log(s + "dd");
        s.setDate(s.getDate() - 2);
        return 1;
    }else if( s.getDay() == 6){
        s.setDate(s.getDate() - 1);
        return 1;
    }
}
//to modify the format of the date make it  API suitable
function format(da){
    let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return da.getDate()+"-"+monthNames[da.getMonth()]+"-"+da.getFullYear();
}
var mulData = [];      //array to be returned

async function mainF(element , Scode){
    
    await isHoliday(element);
   let buffer=3;
    while(true){    //if 2 or more holidays together...
        try{
            var fetchedNavs = await schemeHistory(format(element),Scode);    
            mulData.push(fetchedNavs);
           break;
        } catch (error) {
           if(buffer == 0){
               console.log("Data not found" + element);
               buffer =3;
            mulData.push(new Array("NA",format(element)));
               break;
           }
           element.setDate(element.getDate() - 1);
           buffer--;
           await isHoliday(element);
           
          
       }
   }
       return mulData;
}

async function getMulInfo(schemes){
    var mulD = [];      //array to be returned
    var initDates = new Array(10);
    //initialing of dates
    for(let i=0;i<initDates.length;i++){
        initDates[i]=new Date(schemes[3]);
    }
    initDates[0].setDate(initDates[0].getDate() -1);  //one day b4
    initDates[1].setDate(initDates[1].getDate() -7);  //one week b4
        
    //months 1,3,6
    let month = [1,3,6];
    let j=2;
    month.forEach(element => {
        var mn = initDates[j].getMonth() - element; 
        if(mn < 0){
            mn += 12;
            initDates[j].setFullYear(initDates[j].getFullYear() - 1);
        }
        
        initDates[j++].setMonth(mn);  //one month b4
    });
    //1st Jan of current yr
    initDates[5].setMonth(0); initDates[5].setDate(1);
    
    //years 1,2,3,5
    j=6;
    var yrs = [1,2,3,5];
    yrs.forEach( element =>{
        initDates[j].setFullYear(initDates[j++].getFullYear() - element);
    });
    //for loop to populate the mulD
    for(let i=0;i<10;i++){
        mulD = await mainF(initDates[i] , schemes[1]);
    }    
    
    return mulD;
}   

// fetch year long data
var monthL = [];
async function yearlong(todayDate , Scode){
    // console.log(todayDate);
    let vs = new Date(todayDate);
    // console.log(vs);
    let i=1;
    for(;i<=30;i++){
        try{
            vs.setDate(vs.getDate() - 1);
            // console.log(format(vs));
            // let dateL = format(vs);
            // console.log(dateL);
            var fetchedData = await schemeHistory(format(vs) , Scode);
            // console.log(fetchedData);
            monthL.push(fetchedData);
        }catch(error){
            // console.log(error);
            continue;
        }
        //try to fetch data if not pssbl continue with next 
        // to make code faster skip sat sun auto


    }
    return monthL;
}



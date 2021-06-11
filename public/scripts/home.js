function expandandcollapse() {
    document.getElementById('moreinfobtn').addEventListener('click', () => {
        var show = document.getElementById('moreinfobtn').innerHTML;
        if (show === "Show Less") {
            document.getElementById('moreinfobtn').innerHTML = "Show More";
        } else {
            document.getElementById('moreinfobtn').innerHTML = "Show Less";
        }
        for (let i = 2; i < 9; i++) {
            for (let j = 0; j < 5; j++) {
                document.getElementById(`card_${5 * i + j}`).classList.toggle('visually-hidden');
                document.getElementById(`card_${5 * i + j}`).classList.add('h-100', 'border-dark');
            }
        }
    });
}

// function getapi(value) {
//     axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
//         params: {
//             //Date: '04-Jun-2021',     //2007 onwards
//             // SchemeName: 'a',
//             //SchemeCode:'127629',
//             SchemeType: 'Open Ended Schemes',
//             MutualFundFamily: value,
//             //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
//         },
//         headers: {
//             'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
//             'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
//         }
//     })
//         .then(function (response) {
//             var schemes = [];
//             var schemecode = [];
//             for (let i = 0; i < response.data.length; i++) {
//                 var schem = response.data[i]['Scheme Name'].toString();
//                 var code = response.data[i]['Scheme Code'].toString();
//                 // if (scheme.includes("&amp")) {
//                 var scheme = schem.replace(/&/g, "cxwo");

//                 if (scheme.includes("DIRECT") || scheme.includes("Direct")) {

//                 }
//                 else {
//                     schemes.push(scheme);
//                     schemecode.push(code);
//                 }
//             }
//             window.location.href = "http://localhost:3000/company?scheme=" + schemes;
//             //console.log(schemes);
//             //window.location.href = "http://localhost:3000/company?scheme=" + schemecode;


//         })
//         .catch(function (e) {
//             console.log(e);

//         });
// }


function getapi(value) {
    window.location.href = "http://localhost:3000/company?mf=" + value;
}


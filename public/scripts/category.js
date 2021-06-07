


function getapi() {
    axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
        //Date: '04-Jun-2021',     //2007 onwards
        // SchemeName: 'a',
        //SchemeCode:'127629',
         SchemeType: 'Open Ended Schemes',
         MutualFundFamily: 'HDFC Mutual Fund',
        //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
        },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    })
        .then(function (response) {
            var schemes = [];
            for(let i=0;i<response.data.length;i++){
                schemes[i] = response.data[i]['Scheme Name'];
                document.getElementById(`scheme${i}`).innerHTML="HI";
            }
             console.log(schemes);

             

        })
        .catch(function (e) {
            console.log(e);

        });
}



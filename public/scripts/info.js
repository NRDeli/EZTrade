getapi();
function getapi() {
    axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchHistoricalNAV', {
        params: {
            Date: '04-Jun-2021',     //2007 onwards
            // SchemeName: 'a',
            //SchemeCode:'127629',
            // SchemeType: 'All',
            // MutualFundFamily: 'L&T Mutual Fund',
            SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
          },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    })
        .then(function (response) {

            console.log(response);

        })
        .catch(function (e) {
            console.log(e);

        });
}






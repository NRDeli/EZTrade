function getapi(value) {
    //var schemecat = scheme;
    axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
            //Date: '04-Jun-2021',     //2007 onwards
            SchemeName: value.toString(),

            //SchemeCode: value.toString(),
            SchemeType: 'Open Ended Schemes'
            //MutualFundFamily: 'HDFC Mutual Fund',
            //SchemeCategory: schemecat
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


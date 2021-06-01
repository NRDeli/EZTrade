//var name = document.getElementById("name").innerText;
//var currentp = document.getElementById("currentprice");



/*var options = {
    method: 'GET',
    url: 'https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/blockfacts/price/snapshot',
    params: { denominator: 'USD', asset: 'BTC' },
    headers: {
        "x-api-key": "Vhcl75IoYr5JhVxiaYHArbQydrj0ax",
        "x-api-secret": "BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm",
        'x-rapidapi-key': 'baeb03ac5fmsh49043f8e3816ef3p1cfc3fjsne0af95be0094',
        'x-rapidapi-host': 'crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});*/






getapi();
function getapi() {
    axios.get('https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/blockfacts/price/snapshot', {
        params: {
            // exchange: 'CRYPTO_INTRADAY',
            // symbol: 'ETH',
            // market: 'USD',
            // interval: '1min',
            // apikey: 'CHQE0DE1ARC0CVW0'

            denominator: 'USD',
            asset: 'ETH'
        },
        headers: {
            "x-api-key": "Vhcl75IoYr5JhVxiaYHArbQydrj0ax",
            "x-api-secret": "BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm",
            'x-rapidapi-key': 'baeb03ac5fmsh49043f8e3816ef3p1cfc3fjsne0af95be0094',
            'x-rapidapi-host': 'crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com'
        }
    })
        .then(function (response) {
            console.log(response.data.BLOCKFACTS['ETH-USD']['0']['price']);
            console.log(response.data.BLOCKFACTS['ETH-USD']['0']['timestamp']);

        })
        .catch(function (e) {
            console.log(e);

        });
}
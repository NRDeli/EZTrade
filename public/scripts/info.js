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
            let price = response.data.BLOCKFACTS['ETH-USD']['0']['price'];
            console.log(price);
            let timestamp = response.data.BLOCKFACTS['ETH-USD']['0']['timestamp'];
            let timestamp1 = response.data.BLOCKFACTS['ETH-USD']['1']['timestamp'];
            console.log(timestamp);
            console.log(response.data.BLOCKFACTS);

            var datevalues = getDateAndTime(timestamp);
            console.log(datevalues);

            var datevalues1 = getDateAndTime(timestamp1);
            console.log(datevalues1);

        })
        .catch(function (e) {
            console.log(e);

        });
}

https://english.api.rakuten.net/crtyptodataAPI/api/crypto-asset-market-data-unified-apis-for-professionals?endpoint=apiendpoint_77e69644-232c-4a2c-9af6-4980c3f788de

function getDateAndTime(timestamp) {
    date = new Date(timestamp),
        datevalues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
    return datevalues;
}

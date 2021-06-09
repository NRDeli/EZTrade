function expandandcollapse() {
    document.getElementById('button_9').addEventListener('click', () => {

        let image = document.createElement('img');
        image.src = "/logos/axis.jpg";
        image.classList.add('card-img-top');
        document.getElementById('card_9').prepend(image);

        let cardcontent = document.createElement('div');
        cardcontent.classList.add('card-body');
        document.getElementById('card_9').appendChild(cardcontent);

        let cardcontentheading = document.createElement('h6');
        cardcontentheading.classList.add('card-title');
        cardcontentheading.innerHTML = "HDFC Mutual Fund";
        document.getElementById('moreinfo').prepend(cardcontentheading);

        document.getElementById('button_9').innerHTML = "Button 9";

        document.getElementById('hidemeonclick').classList.toggle('visually-hidden');
        document.getElementById('showmeonclick').classList.toggle('visually-hidden');
        //Create a button that says 'I toggle now'
        for (let i = 2; i < 9; i++) {
            for (let j = 0; j < 5; j++) {
                document.getElementById(`card_${5 * i + j}`).classList.toggle('visually-hidden');
            }
        }
    });
    // document.getElementById('button_9').addEventListener('dblclick', () => {
    //     //Delete everything, toggle the visually hidden classes. 
    //     document.getElementById('card_9').removeChild()
    // });
}



///////////////////////////////////////////////////////////////////////


function getapi(value) {
    axios.get('https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV', {
        params: {
            //Date: '04-Jun-2021',     //2007 onwards
            // SchemeName: 'a',
            //SchemeCode:'127629',
            SchemeType: 'Open Ended Schemes',
            MutualFundFamily: value,
            //SchemeCategory:"Open Ended Schemes ( Equity Scheme - Large & Mid Cap Fund )"
        },
        headers: {
            'x-rapidapi-key': 'c021a04ec2msh274866ae5d5f773p1d0d47jsn94fa2bd469a5',
            'x-rapidapi-host': 'latest-mutual-fund-nav.p.rapidapi.com'
        }
    })
        .then(function (response) {
            var schemes = [];
            for (let i = 0; i < response.data.length; i++) {
                var schem = response.data[i]['Scheme Name'].toString();
                // if (scheme.includes("&amp")) {
                var scheme = schem.replace(/&/g, "and");

                if (scheme.includes("DIRECT") || scheme.includes("Direct")) {

                }
                else {
                    schemes.push(scheme);
                }


            }
            window.location.href = "http://localhost:3000/company?scheme=" + schemes;
            //console.log(schemes);

        })
        .catch(function (e) {
            console.log(e);

        });
}


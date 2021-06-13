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
                if (i == 8 && j == 3) break;
                document.getElementById(`card_${5 * i + j}`).classList.toggle('visually-hidden');
                document.getElementById(`card_${5 * i + j}`).classList.add('h-100', 'border-dark');
            }
        }
    });
}

function summonsidebar() {
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('eztrade').classList.toggle('visually-hidden');
        document.getElementById('sidebar').classList.toggle('visually-hidden');
        document.getElementById('maincontent').classList.toggle('col-lg-10');
        document.getElementById('maincontent').classList.toggle('col-lg-12');

    });
    // document.getElementById('hamburger').addEventListener('dblclick', () => {
    //     document.getElementById('sidebar').classList.toggle('visually-hidden');
    //     document.getElementById('maincontent').classList.replace('col-lg-10', 'col-lg-12');
    // });
}

function getapi(value) {
    window.location.href = "http://localhost:3000/company?mf=" + value;
}


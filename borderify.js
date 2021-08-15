// document.body.style.border = "5px solid red";

let queryString = window.location.href;


if (queryString.toLowerCase().includes("hdrezka")) {
    element;

    player = document.querySelector('#oframecdnplayer');

    for (let a of player.querySelectorAll('pjsdiv')) {
        if (a.hasAttribute('f2id')) {
            for (let b of a.querySelectorAll('pjsdiv')) {
                if (b.innerHTML === 'Русский' || b.innerHTML === 'English') {
                    console.log(b)

                }
            }
        }
    }

    element.click();
}


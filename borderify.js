// document.body.style.border = "5px solid red";

let queryString = window.location.href;


if (queryString.toLowerCase().includes("rezka")) {
    let player = document.querySelector('#oframecdnplayer');

    document.onkeydown = function KeyPress(e) {
        if (e.key === 'R' && e.shiftKey) {
            for (let a of player.querySelectorAll('pjsdiv')) {
                if (a.hasAttribute('f2id')) {
                    for (let b of a.querySelectorAll('pjsdiv')) {
                        if (b.innerHTML === 'Русский') {
                            console.log(a)
                            a.click()
                        }
                    }
                }
            }
        }

        if (e.key === 'E' && e.shiftKey) {
            for (let a of player.querySelectorAll('pjsdiv')) {
                if (a.hasAttribute('f2id')) {
                    for (let b of a.querySelectorAll('pjsdiv')) {
                        if (b.innerHTML === 'English') {
                            console.log(a)
                            a.click()
                        }
                    }
                }
            }
        }
    };
}

let queryString = window.location.href;


if (queryString.toLowerCase().includes("rezka")) {
    let player = document.querySelector('#oframecdnplayer');

    function clickLang(lang) {
        for (let a of player.querySelectorAll('pjsdiv')) {
            if (a.hasAttribute('f2id')) {
                if (a.textContent === lang) {
                    a.click()
                }
            }
        }
    }

    document.onkeydown = function KeyPress(e) {
        if (e.key === 'R' && e.shiftKey) {
            clickLang('Русский')
        }

        if (e.key === 'E' && e.shiftKey) {
            clickLang('English')
        }
    };
}

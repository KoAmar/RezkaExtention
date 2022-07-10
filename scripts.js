let queryString = window.location.href;

if (queryString.toLowerCase().includes("rezka")) {
    const ccCheckInterval = setInterval(function () {
        let cc = document.querySelector('#cdnplayer_control_cc > pjsdiv:last-child')
        if (cc) {
            cc.click();
            setTimeout(cc.click(), 10)
            clearInterval(ccCheckInterval);
        }
    }, 1000);
    setInterval(function () {
        let cc = document.querySelector('#cdnplayer_control_cc > pjsdiv:last-child')
        if (cc) {
            cc.click();
            setTimeout(cc.click(), 1)
        }
    }, 300000);
    function clickLang(lang) {
        for (let a of document.querySelectorAll('#cdnplayer_settings > pjsdiv > pjsdiv')) {
            if (a.textContent === lang) {
                a.click()
            }
        }
    }
    document.onkeydown = function KeyPress(e) {
        if (e.shiftKey) {
            switch (e.code) {
                case 'KeyR': {
                    clickLang('Русский');
                    break;
                }
                case 'KeyE': {
                    clickLang('English');
                    break;
                }
            }
        }
        switch (e.code) {
            case 'Numpad9': {
                e.preventDefault();
                clickLang('English');
                break;
            }
            case 'Numpad7': {
                e.preventDefault();
                clickLang('Русский');
                break;
            }
            case 'Numpad5': {
                document.querySelector('#pjsfrrscdnplayer + pjsdiv > video').click();
                break;
            }
        }
    };
}

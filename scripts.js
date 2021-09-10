let queryString = window.location.href;

if (queryString.toLowerCase().includes("rezka")) {
    let player = document.querySelector('#oframecdnplayer');

    const ccCheckInterval = setInterval(function () {
        let cc = document.querySelector('#cdnplayer_control_cc > pjsdiv:nth-child(3)')
        if (cc) {
            cc.click();
            setTimeout(cc.click(), 10)
            clearInterval(ccCheckInterval);
        }

    }, 1000);

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
                clickLang('English');
                break;
            }
            case 'Numpad7': {
                clickLang('Русский');
                break;
            }
            case 'Numpad5': {
                document.querySelector('#oframecdnplayer > pjsdiv:nth-child(8) > pjsdiv:nth-child(1) > pjsdiv:nth-child(1)').click();
                break;
            }
            // case 'Numpad4': {
            //     window.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowLeft'}));
            //     break;
            // }
            // case 'Numpad6': {
            //     window.dispatchEvent(new KeyboardEvent(key, {key: 'ArrowRight'}));
            //     break;
            // }
        }
    };
}

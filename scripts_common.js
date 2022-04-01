var infront;

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        infront = new Infront.UI({
            user_id: 'Squidapp.TEST',
            password: 'Infront858!'
        })
        infront.registerEventObserver('onReady', infrontReady);
        infront.init();
    })
}

init();
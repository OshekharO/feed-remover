let domain = window.location.host;

// Facebook
if (domain.includes('facebook')) {
    let id = setInterval(() => {
        const feed = document.querySelector('[role="feed"]');
        if (feed) {
            feed.remove();
            clearInterval(id);
            console.log('removed feed');
        }
    }, 100);
}


// YouTube
if (domain.includes('youtube')) {
    let id1 = setInterval(() => {
        const feed = document.getElementById('contents');
        if (feed) {
            feed.remove();
            clearInterval(id1);
            console.log('removed feed');
        }
    }, 100);
}

// Pornhub
if (domain.includes('pornhub')) {
    let id2 = setInterval(() => {
        // Remove elements with the class "bottomNav clearfix"
        const bottomNav = document.querySelector('.bottomNav.clearfix');
        if (bottomNav) {
            bottomNav.remove();
            console.log('Removed element with class "bottomNav clearfix"');
        }

        // Remove elements with the class "container clearfix notPremium"
        const mobileContainer = document.getElementById('mobileContainer');
        if (mobileContainer) {
            mobileContainer.remove();
            console.log('Removed element with id "mobileContainer"');

            // Remove elements with the class "adContainer clearfix noBottom"
            const adContainer = document.querySelector('.adContainer.clearfix.noBottom');
            if (adContainer) {
                adContainer.remove();
                console.log('Removed element with class "adContainer clearfix noBottom"');
            }

            // Remove elements with the class "adContainer clearfix middleAdContainer"
            const middleAdContainer = document.querySelector('.adContainer.clearfix.middleAdContainer');
            if (middleAdContainer) {
                middleAdContainer.remove();
                console.log('Removed element with class "adContainer clearfix middleAdContainer"');
            }
        }

        clearInterval(id2);
    }, 100);
}

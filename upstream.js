const domain = window.location.host;
const domains = {
  facebook: () => {
    const feed = document.querySelector('[role="feed"]');
    if (feed) feed.remove();
    console.log('removed feed');
  },
  youtube: () => {
    const feed = document.getElementById('contents');
    if (feed) feed.remove();
    console.log('removed feed');
  },
  pornhub: () => {
    const elementsToRemove = [
      '.bottomNav.clearfix',
      '#mobileContainer',
      '.adContainer.clearfix.noBottom',
      '.adContainer.clearfix.middleAdContainer',
    ];
    elementsToRemove.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) element.remove();
      console.log(`Removed element with selector ${selector}`);
    });
  },
};

const checkDomain = () => {
  const regex = new RegExp(Object.keys(domains).join('|'));
  if (regex.test(domain)) {
    domains[domain.replace(regex, '$&')]();
  }
};

// Use MutationObserver instead of setInterval
const observer = new MutationObserver(checkDomain);
observer.observe(document.body, { childList: true, subtree: true });

// Or, if you still want to use setInterval
// setInterval(checkDomain, 100);

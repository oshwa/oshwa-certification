const CookiesPopup = {
  cookies: require('browser-cookies'),
  slideUp: () => {
    setTimeout(() => {
      $('.cookies-popup')
        .animate({ bottom: '0' }, 400)
        .css('display', 'block');
    }, 800);
  },
  slideDown: () => {
    $('.popup-button').on('click', e => {
      const clickedValue = e.currentTarget.getAttribute('cookie-value');
      if (clickedValue === 'agree') {
        CookiesPopup.cookies.set('user_cookie_agreement', 'agree', { expires: 365 });
      } else if (clickedValue === 'disagree') {
        CookiesPopup.cookies.set('user_cookie_agreement', 'disagree', { expires: 365 });
        CookiesPopup.clearCookies();
      }
      $('.cookies-popup').animate({ bottom: '-100px' }, 'slow');
    });
  },
  clearCookies: () => {
    const allCookies = CookiesPopup.cookies.all();
    for (const cookie in allCookies) {
      if (allCookies.hasOwnProperty(cookie) && cookie !== 'user_cookie_agreement') {
        CookiesPopup.cookies.erase(cookie);
      }
    }
  },
  hidePopupBasedOnCookie: () => {
    if (CookiesPopup.cookies.get('user_cookie_agreement')) {
      $('.cookies-popup').addClass('hidden');
    }
  },
  clearCookiesOnLoad: () => {
    if (CookiesPopup.cookies.get('user_cookie_agreement') === 'disagree') {
      CookiesPopup.clearCookies();
    }
  },
  init() {
    this.slideUp();
    this.slideDown();
    this.clearCookiesOnLoad();
    this.hidePopupBasedOnCookie();
  }
};

module.exports = CookiesPopup;

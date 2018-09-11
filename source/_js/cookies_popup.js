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
      }
      $('.cookies-popup').animate({ bottom: '-220px' }, 'slow');
    });
  },
  hidePopupBasedOnCookie: () => {
    if (CookiesPopup.cookies.get('user_cookie_agreement')) {
      $('.cookies-popup').addClass('hidden');
    }
  },
  init() {
    this.slideUp();
    this.slideDown();
    this.hidePopupBasedOnCookie();
  }
};

module.exports = CookiesPopup;

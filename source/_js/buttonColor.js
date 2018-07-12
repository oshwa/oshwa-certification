const ButtonColor = {
  changeColorOnPage() {
    const path = window.location.pathname;
    const button = $('.top-bar__button');

    switch(path) {
      case '/':
        button.addClass('gray');
        break;
      // case '/.html':
      //   break;
      // default:
      //   button.addClass('gray');
    }
  },
  init() {
    this.changeColorOnPage();
  }
};

module.exports = ButtonColor;

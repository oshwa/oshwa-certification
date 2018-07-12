const Nav = {
  mainMenu() {
    // Main Menu Click Behavior
    $('.js-trigger-menu').click(e => {
      $(e.currentTarget)
        .next()
        .addClass('js-active-menu');
      $('#overlay').addClass('js-active');
    });
  },
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
    this.mainMenu();
    this.changeColorOnPage();
  }
};

module.exports = Nav;

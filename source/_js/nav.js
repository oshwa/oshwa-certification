const Nav = {
  openMenu: () => {
    $('.menu-button').on('click', () => {
      $('.js-target-menu').toggleClass('active-menu');
      $('.menu-button').toggleClass('active-menu-button');
      $('#overlay').toggleClass('js-active');
    });
  },
  closeMenu: () => {
    $('.close-menu').on('click', () => {
      $('.js-target-menu').removeClass('active-menu');
      $('.menu-button').removeClass('active-menu-button');
      $('#overlay').removeClass('js-active');
    });

    $('#overlay').on('click', () => {
      $('.js-target-menu').removeClass('active-menu');
      $('.top-bar__button').removeClass('active-menu-button');
    });
  },
  init() {
    this.openMenu();
    this.closeMenu();
  }
};

module.exports = Nav;

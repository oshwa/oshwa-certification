const InternalNav = {
  handleInternalMenu() {
    $('.internal-menu__item').on('click', e => {
      e.preventDefault();
      const $currentTarget = $(e.currentTarget);
      const $allItems = $('.internal-menu__item');
      $allItems.removeClass('js-active-item');
      $currentTarget.addClass('js-active-item');
      const order = $currentTarget.attr('data-order');
      InternalNav.handleNavClick(order);
    });
  },
  getView(target) {
    const pageTarget = target || '1';
    const $viewTarget = $(`[data-nav-order='${pageTarget}']`);
    $viewTarget.addClass('js-active-section');
    // put top of section in view
    if ($('.page-section--nav.fixed').length) {
      const $sectionTop = $viewTarget.offset().top;
      $(window).scrollTop($sectionTop + 5);
    }
  },
  handleNavClick(clickTarget) {
    $('.js-active-section').removeClass('js-active-section');
    InternalNav.getView(clickTarget);
  },
  fixedInternalNav: () => {
    const $window = $(window);
    const $fixedNav = $('.page-section--nav');
    const elTop = $fixedNav.offset().top;
    if ($fixedNav) {
      $window.scroll(() => {
        $fixedNav.toggleClass('fixed', $window.scrollTop() > elTop);
      });
    }
  },
  init() {
    this.handleInternalMenu();
    this.getView();
    this.fixedInternalNav();
  }
};

module.exports = InternalNav;

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
  },
  handleNavClick(clickTarget) {
    $('.js-active-section').removeClass('js-active-section');
    InternalNav.getView(clickTarget);
  },
  init() {
    this.handleInternalMenu();
    this.getView();
  }
};

module.exports = InternalNav;

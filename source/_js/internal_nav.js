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
  redirectLearningModules: path => {
    const softwarePath = 'process/software.html';
    const hardwarePath = 'process/hardware.html';
    const documentationPath = 'process/documentation.html';
    const brandingPath = 'process/branding.html';
    const projectsPath = 'list.html';
    const certifyPath = 'https://application.oshwa.org/apply';

    switch (path) {
      case 'software-process':
        window.location.pathname = softwarePath;
        break;
      case 'hardware-process':
        window.location.pathname = hardwarePath;
        break;
      case 'documentation-process':
        window.location.pathname = documentationPath;
        break;
      case 'branding-process':
        window.location.pathname = brandingPath;
        break;
      case 'certified-projects':
        window.location.pathname = projectsPath;
        break;
      case 'certify-a-project':
        window.location.href = certifyPath;
        break;
      default:
        break;
    }
  },
  resetDropdownsOnBack: () => {
    if ($('.learning-module__dropdown')) {
      $('.learning-module__dropdown').prop('selectedIndex', 0);
    }
  },
  handleLearningModuleSelect: () => {
    // need to reset dropdown on back
    $('.learning-module__dropdown').on('change', e => {
      const learningModuleSelection = $('.learning-module__dropdown')
        .children(':selected')
        .attr('value');
      InternalNav.redirectLearningModules(learningModuleSelection);
    });
  },
  init() {
    this.handleInternalMenu();
    this.getView();
    this.fixedInternalNav();
    this.handleLearningModuleSelect();
    this.resetDropdownsOnBack();
  }
};

module.exports = InternalNav;

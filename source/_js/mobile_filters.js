const MobileFilters = {
  openFilters: () => {
    $('.toggle-filters').click(() => {
      $('.filter-container').toggleClass('active');
      $('.toggle-filters').toggleClass('expanded');
      $('.filters').toggleClass('activated');

      if ($('.toggle-filters').hasClass('expanded')) {
        $('.mobile-results-message').addClass('expanded');
        $('.js-trigger-menu').html('close');
      } else {
        $('.mobile-results-message').removeClass('expanded');
        $('.js-trigger-menu').html('tune');
      }
    });
  },
  init() {
    this.openFilters();
  }
};

module.exports = MobileFilters;

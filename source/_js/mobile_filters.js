const MobileFilters = {
  openFilters: () => {
    $('.toggle-filters').click(() => {
      $('.filter-container').toggleClass('active');
      $('.toggle-filters').toggleClass('expanded');
      $('.filters').toggleClass('activated');

      if ($('.toggle-filters').hasClass('expanded')) {
        $('.toggle-filters').html('close');
      } else {
        $('.toggle-filters').html('tune');
      }
    });
  },
  init() {
    this.openFilters();
  }
};

module.exports = MobileFilters;

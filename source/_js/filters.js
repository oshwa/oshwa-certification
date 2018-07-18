const Filters = {
  openFilters: () => {
    $('.open-filters').click(() => {
      $('.filter-container').toggleClass('js-active');
      $('.expand').toggleClass('expanded');

      if ($('.expand').hasClass('expanded')) {
        $('.expand').html('expand_less');
      } else {
        $('.expand').html('expand_more');
      }
    });
  },
  init() {
    this.openFilters();
  }
}

module.exports = Filters;

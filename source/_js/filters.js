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
  checkboxCheck: () => {
    $('.checkbox').click(e => {
      // e.checked = true;
      // e.currentTarget
      console.log(e.currentTarget)
    });
  },
  init() {
    this.openFilters();
    this.checkboxCheck()
  }
}

module.exports = Filters;

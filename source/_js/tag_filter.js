const TagFilter = {
  url: new URL(window.location.origin),
  listUrl: 'list.html',
  filterByTag: () => {
    $('.project__type').on('click', e => {
      const query = e.target.getAttribute('type-tag');
      const searchListUrl = TagFilter.url + TagFilter.listUrl + '?type=' + query;

      window.location.href = searchListUrl;
    });
  },
  init() {
    this.filterByTag();
  }
};

module.exports = TagFilter;

const TagFilter = {
  listUrl: '/list.html',
  filterByTag: () => {
    $('.project__type').on('click', e => {
      const query = e.target.getAttribute('type-tag');
      const url = document.location.origin;
      const searchListUrl = `${url}${TagFilter.listUrl}?type=${query}`;

      window.location.href = searchListUrl;
    });
  },
  init() {
    this.filterByTag();
  }
};

module.exports = TagFilter;

const TagFilter = {
  listUrl: '/oshwa-certification/list.html',
  searchListUrl: undefined,
  filterByTag: () => {
    $('.project__type').on('click', e => {
      const query = e.target.getAttribute('type-tag');
      const url = document.location.origin;
      TagFilter.searchListUrl = `${url}${TagFilter.listUrl}?type=${query}`;

      if (window.location.href !== 'about:blank') {
        window.location.href = TagFilter.searchListUrl;
      }
    });
  },
  filterByCategory: () => {
    $('.container-overlay').on('click', e => {
      const query = e.target.parentElement.getAttribute('type');
      const url = document.location.origin;
      TagFilter.searchListUrl = `${url}${TagFilter.listUrl}?type=${query}`;

      if (window.location.href !== 'about:blank') {
        window.location.href = TagFilter.searchListUrl;
      }
    });
  },
  init() {
    this.filterByTag();
    this.filterByCategory();
  }
};

module.exports = TagFilter;

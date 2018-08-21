const TagFilter = {
  listUrl: '/oshwa/list.html',
  filterByTag: () => {
    $('.project__type').on('click', e => {
      const query = e.target.getAttribute('type-tag');
      const url = document.location.origin;
      const searchListUrl = `${url}${TagFilter.listUrl}?type=${query}`;

      window.location.href = searchListUrl;
    });
  },
  filterByCategory: () => {
    $('.container-overlay').on('click', e => {
      const query = e.target.parentElement.getAttribute('type');
      const url = document.location.origin;
      const searchListUrl = `${url}${TagFilter.listUrl}?type=${query}`;

      window.location.href = searchListUrl;
    });
  },
  init() {
    this.filterByTag();
    this.filterByCategory();
  }
};

module.exports = TagFilter;

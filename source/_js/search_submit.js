const SearchSubmit = {
  url: new URL(window.location.origin),
  listUrl: 'list.html',
  searchString: $('#searchfield'),
  submitSearch: () => {
    $('.js-search-submit').on('click', () => {
      const query = SearchSubmit.searchString.val();
      const searchListUrl = SearchSubmit.url + SearchSubmit.listUrl + '?q=' + query;

      window.location.href = searchListUrl;
    });
  },
  init() {
    this.submitSearch();
  }
};

module.exports = SearchSubmit;

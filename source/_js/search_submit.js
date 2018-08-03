const SearchSubmit = {
  listUrl: '/list.html',
  searchString: $('#searchfield'),
  submitSearch: () => {
    $('.js-search-submit').on('click', () => {
      const query = SearchSubmit.searchString.val();
      const url = document.location.origin;
      const searchListUrl = `${url}${SearchSubmit.listUrl}?q=${query}`;

      window.location.href = searchListUrl;
    });
  },
  init() {
    this.submitSearch();
  }
};

module.exports = SearchSubmit;

const SearchSubmit = {
  listUrl: '/list.html',
  searchString: undefined,
  searchListUrl: undefined,
  submitSearch: () => {
    SearchSubmit.searchString = $('#searchfield');

    $('.js-search-submit').on('click', () => {
      const query = SearchSubmit.searchString.val();
      const url = document.location.origin;
      SearchSubmit.searchListUrl = `${url}${SearchSubmit.listUrl}?q=${query}`;

      if (window.location.href !== 'about:blank') {
        window.location.href = SearchSubmit.searchListUrl;
      }
    });
  },
  init() {
    this.submitSearch();
  }
};

module.exports = SearchSubmit;

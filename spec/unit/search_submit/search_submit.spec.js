'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'search_submit.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;
let SearchSubmit = require('../../../source/_js/search_submit.js');

describe('SearchSubmit', function() {
  const body = document.body;
  let formSubmitButton;
  let searchQueryValue = 'thisIsASearchQuery';
  let searchURL;

  beforeEach(function() {
    require('jsdom-global')();
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    SearchSubmit.init();
    formSubmitButton = document.querySelector('.js-search-submit');
    document.querySelector('input').value = searchQueryValue;
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('redirects to to the correct path using submitted search query', function() {
    formSubmitButton.click();
    searchURL = SearchSubmit.searchListUrl;
    assert.equal(searchURL, 'null/oshwa/list.html?q=thisIsASearchQuery');
  });
});

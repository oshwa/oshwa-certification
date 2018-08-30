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
  let form;
  let searchQueryValue = 'thisIsASearchQuery';
  let eventOnClick;

  beforeEach(function() {
    require('jsdom-global')();
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    SearchSubmit.init();
    form = document.querySelector('form');
    document.querySelector('input').value = searchQueryValue;

    // form.submit();
    // console.log(eventOnClick)
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  xit('redirects to the right path', function() {
    // form.addEventListener('click', eventOnClick = SearchSubmit.searchListUrl);
    // assert.equal(.to.equal('null/oshwa/list.html?q=thisIsASearchQuery'));
  });
});

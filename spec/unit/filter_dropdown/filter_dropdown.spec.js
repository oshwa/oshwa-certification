'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'filter_dropdown.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;

let FilterDropdown = require('../../../source/_js/filter_dropdown.js');
describe('FilterDropdown', function() {
  const body = document.body;
  let expand;
  let filterContainer;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    FilterDropdown.init();
    expand = document.querySelector('.expand');
    filterContainer = document.querySelector('.filter-container');
    expand.click();
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should add expanded class to expand', function() {
    assert.equal(expand.classList.contains('expanded'), true);
  });
  it('should add js-active class to filter-container', function() {
    assert.equal(filterContainer.classList.contains('js-active'), true);
  });
});

'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'mobile_filters.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;
let MobileFilters = require('../../../source/_js/mobile_filters.js');

describe('MobileFilters', function() {
  const body = document.body;
  let toggleFiltersButton;
  let filterContainer;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    MobileFilters.init();
    toggleFiltersButton = document.querySelector('.toggle-filters');
    filterContainer = document.querySelector('.filter-container');
    toggleFiltersButton.click();
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should add expanded class to mobile filters button', function() {
    assert.equal(toggleFiltersButton.classList.contains('expanded'), true);
  });
  it('should add active class to filter-container', function() {
    assert.equal(filterContainer.classList.contains('active'), true);
  });
});

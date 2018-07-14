'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'internal_nav.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;

let InternalNav = require('../../../source/_js/internal_nav.js');

describe('InternalNav', () => {
  const body = document.body;
  let internalNav;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    InternalNav.init();
    $navLinks = $('.internal-menu__item');
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should initialize with active first item only', () => {
    const initialNavItem = document.querySelector("[data-order='1']");
    const initialNavView = document.querySelector("[data-nav-order='1']");
    assert.equal(initialNavItem.classList.contains('js-active-item'), true);
    assert.equal(initialNavView.classList.contains('js-active-section'), true);
  });

  it('should make clicked nav item and page section active and initial item inactive', () => {
    const initialNavItem = document.querySelector("[data-order='1']");
    const initialNavView = document.querySelector("[data-nav-order='1']");
    const nextNavItem = document.querySelector("[data-order='2']");
    const nextNavView = document.querySelector("[data-nav-order='2']");

    assert.equal(nextNavItem.classList.contains('js-active-item'), false);
    assert.equal(nextNavView.classList.contains('js-active-section'), false);

    nextNavItem.click();

    // next item is active
    assert.equal(nextNavItem.classList.contains('js-active-item'), true);
    assert.equal(nextNavView.classList.contains('js-active-section'), true);

    // previous item is inactive
    assert.equal(initialNavItem.classList.contains('js-active-item'), false);
    assert.equal(initialNavView.classList.contains('js-active-section'), false);
  });
});

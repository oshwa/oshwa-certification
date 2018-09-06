'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'cookies_popup.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;

let CookiesPopup = require('../../../source/_js/cookies_popup.js');
describe('CookiesPopup', function() {
  const body = document.body;
  let popupContainer;
  let buttons;
  let agreeButton;
  let cookies;

  beforeEach(function() {
    require('jsdom-global')();
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    CookiesPopup.init();
    cookies = require('browser-cookies');
    popupContainer = document.querySelector('.cookies-popup');
    buttons = document.querySelectorAll('.popup-button');
    agreeButton = buttons[0];
    agreeButton.click();
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should add user_cookie_agreement cookie on button click', function() {
    assert.equal(cookies.get('user_cookie_agreement'), 'agree');
  });
  it('should add hidden class if user_cookie_agreement cookie exists', function() {
    CookiesPopup.hidePopupBasedOnCookie();
    assert.equal(popupContainer.classList.contains('hidden'), true);
  });
});

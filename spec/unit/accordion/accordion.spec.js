'use strict';

const fs = require('fs');
const path = require('path');

const templateHTML = fs.readFileSync(path.join(__dirname, 'accordion.test.html')).toString();
const { JSDOM } = require('jsdom');
const { window } = new JSDOM(templateHTML);
const { document } = window;
const assert = require('chai').assert;

const Accordion = require('../../../source/_js/accordion.js');
describe('Accordion', function() {
  const body = document.body;
  let accordion;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    Accordion.init();
    accordion = document.querySelector('.accordion');
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should open an accordion panel on click', function() {
    let targetPanel = document.querySelector('#accordion-1');
    assert.equal(targetPanel.classList.contains('js-active'), false);
    targetPanel.click();
    assert.equal(targetPanel.classList.contains('js-active'), true);
  });
  it('should keep panels open if another panel is open without closing it', function() {
    let targetPanelOne = document.querySelector('#accordion-1');
    let targetPanelTwo = document.querySelector('#accordion-2');
    assert.equal(targetPanelOne.classList.contains('js-active'), false);
    assert.equal(targetPanelTwo.classList.contains('js-active'), false);
    targetPanelOne.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), true);
    targetPanelTwo.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), true);
    assert.equal(targetPanelTwo.classList.contains('js-active'), true);
  });
  it('should close individual panels on click', function() {
    let targetPanelOne = document.querySelector('#accordion-1');
    let targetPanelTwo = document.querySelector('#accordion-2');
    assert.equal(targetPanelOne.classList.contains('js-active'), false);
    assert.equal(targetPanelTwo.classList.contains('js-active'), false);
    targetPanelOne.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), true);
    targetPanelTwo.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), true);
    assert.equal(targetPanelTwo.classList.contains('js-active'), true);
    // close one panel
    targetPanelOne.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), false);
    assert.equal(targetPanelTwo.classList.contains('js-active'), true);
    // close two panels
    targetPanelTwo.click();
    assert.equal(targetPanelOne.classList.contains('js-active'), false);
    assert.equal(targetPanelTwo.classList.contains('js-active'), false);
  });
});

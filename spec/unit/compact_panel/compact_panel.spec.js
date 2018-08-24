'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'compact_panel.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;

let CompactPanel = require('../../../source/_js/compact_panel.js');
describe('CompactPanel', () => {
  const body = document.body;

  beforeEach(() => {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    CompactPanel.init();
  });

  afterEach(() => {
    body.innerHTML = '';
  });

  // <a class="checklist slide-panel__open-trigger" data-term="term-one"><i class="material-icons">list</i></a>
  const triggerOne = document.querySelector("[data-term='term-one']");
  const triggerTwo = document.querySelector("[data-term='term-two']");

  // <div class="slide-panel is-visible" data-direction="right" data-value="term-one">
  const panelOne = document.querySelector("[data-value='term-one']");
  const panelTwo = document.querySelector("[data-value='term-two']");

  // <div class="slide-panel__container" style="right: 0%; display: block;">
  const panelOneContainer = panelOne.querySelector('.slide-panel__container');
  const panelTwoContainer = panelTwo.querySelector('.slide-panel__container');

  it('should initialize with the proper classes', () => {
    assert.equal(panelOne.classList.contains('is-visible'), false);
    assert.equal(panelTwo.classList.contains('is-visible'), false);
  });
  xit('should initialize with the proper styles', () => {});
  xit('should open the correct panel', () => {});
});

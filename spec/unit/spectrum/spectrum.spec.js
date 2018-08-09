'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'spectrum.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;
let Spectrum = require('../../../source/_js/spectrum.js');

describe('Spectrum', function() {
  const body = document.body;
  let firstCircle;
  let secondCircle;
  let firstSchematicDescription;
  let secondSchematicDescription;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    Spectrum.init();
    firstCircle = document.querySelector("[circle-attr='1']");
    firstSchematicDescription = document.querySelector("[position-attr='1']");
    secondCircle = document.querySelector("[circle-attr='2']");
    secondSchematicDescription = document.querySelector("[position-attr='2']");
    secondCircle.click();
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should remove active class from first circle', function() {
    assert.equal(firstCircle.classList.contains('active'), false);
  });
  it('should remove display class from first schematic description', function() {
    assert.equal(firstCircle.classList.contains('display'), false);
  });
  it('should add active class to second circle', function() {
    assert.equal(secondCircle.classList.contains('active'), true);
  });
  it('should add display class to second schematic description', function() {
    assert.equal(secondSchematicDescription.classList.contains('display'), true);
  });
});

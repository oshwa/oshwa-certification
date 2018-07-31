// 'use strict';
// let fs = require('fs');
// let path = require('path');
// let templateHTML = fs.readFileSync(path.join(__dirname, 'spectrum.test.html')).toString();
// let { JSDOM } = require('jsdom');
// let { window } = new JSDOM(templateHTML);
// let { document } = window;
// let assert = require('chai').assert;
// let Spectrum = require('../../../source/_js/spectrum.js');
//
// describe('Spectrum', function() {
//   const body = document.body;
//   let circle;
//   let schematicDescription;
//
//   beforeEach(function() {
//     global.$ = require('jquery')(window);
//     body.innerHTML = templateHTML;
//     Spectrum.init();
//     circle = $('.circle');
//     schematicDescription = document.querySelectorAll('.schematic-description');
//     circle.click();
//   });
//   afterEach(function() {
//     body.innerHTML = '';
//   });
//   it('should add active class to circle', function() {
//     assert.equal(circle.classList.contains('active'), true);
//   });
//   it('should add display class to schematic description', function() {
//     assert.equal(schematicDescription.classList.contains('display'), true);
//   });
// });

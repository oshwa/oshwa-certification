// 'use strict';
// let fs = require('fs');
// let path = require('path');
// let templateHTML = fs.readFileSync(path.join(__dirname, 'tag_filter.test.html')).toString();
// let { JSDOM } = require('jsdom');
// let { window } = new JSDOM(templateHTML);
// let { document } = window;
// let assert = require('chai').assert;
// let TagFilter = require('../../../source/_js/tag_filter.js');

// describe('TagFilter', function() {
//   const body = document.body;
//   let typeTagSelected;
//   let typeTagSelectedAttribute;
//   // let projectContainer;
//   let projectType;
//
//   beforeEach(function() {
//     global.$ = require('jquery')(window);
//     body.innerHTML = templateHTML;
//     TagFilter.init();
//     typeTagSelected = document.querySelector('.project__type');
//     typeTagSelectedAttribute = typeTagSelected.getAttribute('type-tag');
//     // projectContainer = document.querySelector('.list');
//     projectType = document.querySelector('.type');
//     typeTagSelected.click();
//   });
//   afterEach(function() {
//     body.innerHTML = '';
//   });
//   it('should contain selected tag in the project data type', function() {
//     global.window = {
//       location: {
//         href: {
//           value: 'list'
//         }
//       }
//     }
//     assert.equal(projectType.getAttribute('type').contains(typeTagSelectedAttribute), true);
//   });
// });

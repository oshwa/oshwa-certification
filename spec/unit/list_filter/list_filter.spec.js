// 'use strict';
// const fs = require('fs');
// const path = require('path');
// const templateHTML = fs.readFileSync(path.join(__dirname, 'list_filter.test.html')).toString();
// const { JSDOM } = require('jsdom');
// const { window } = new JSDOM(templateHTML);
// const { document } = window;
// const assert = require('chai').assert;
// const ListFilter = require('../../../source/_js/list_filter.js');
//
// describe('ListFilter', function() {
//   let body = document.body;
//   let searchBar;
//
//   beforeEach(function() {
//     // require('jsdom-global')();
//     global.$ = require('jquery')(window);
//     body.innerHTML = templateHTML;
//     ListFilter.init();
//     searchBar = document.querySelector('#searchfield');
//   });
//   afterEach(function() {
//     body.innerHTML = '';
//   });
//   it('should filter list by search value', function() {
//     // searchBar.submit();
//   });
//   // it('should filter list by checkboxes', function() {
//   // });
//   // it('should filter list by dropdowns', function() {
//   // });
// });

// 'use strict';
// let fs = require('fs');
// let path = require('path');
// let templateHTML = fs.readFileSync(path.join(__dirname, 'search_submit.test.html')).toString();
// let { JSDOM } = require('jsdom');
// let { window } = new JSDOM(templateHTML);
// let { document } = window;
// let assert = require('chai').assert;
// let SearchSubmit = require('../../../source/_js/search_submit.js');

// describe('SearchSubmit', function() {
//   const body = document.body;
//   let searchBar;
//   let value;
//
//   beforeEach(function() {
//     global.$ = require('jquery')(window);
//     body.innerHTML = templateHTML;
//     SearchSubmit.init();
//     searchBar = document.querySelector('#searchfield');
//     value = searchBar.val();
//     // searchBar.submit();
//   });
//   afterEach(function() {
//     body.innerHTML = '';
//   });
//   it('should filter data by search value', function() {
//   });
// });

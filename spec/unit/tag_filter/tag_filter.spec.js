'use strict';
let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'tag_filter.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;
let TagFilter = require('../../../source/_js/tag_filter.js');

describe('TagFilter', function() {
  const body = document.body;
  let tags;
  let firstTag;
  let profileTagURL;

  let containerOverlay;
  let firstContainer;
  let directoryURL;

  beforeEach(function() {
    require('jsdom-global')();
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    TagFilter.init();
    tags = document.querySelectorAll('.project__type');
    firstTag = tags[0];
    containerOverlay = document.querySelectorAll('.container-overlay');
    firstContainer = containerOverlay[0];
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  it('should have correct type-tag attribute in url for profile tag filters', function() {
    firstTag.click();
    profileTagURL = TagFilter.searchListUrl;
    assert.equal(profileTagURL, 'null/oshwa/list.html?type=example-type-1');
  });
  it('should have correct type-tag attribute in url for directory filters', function() {
    firstContainer.click();
    directoryURL = TagFilter.searchListUrl;
    assert.equal(directoryURL, 'null/oshwa/list.html?type=first-type');
  });
});

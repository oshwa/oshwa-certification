/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accordion = __webpack_require__(1);

var _accordion2 = _interopRequireDefault(_accordion);

var _overlay = __webpack_require__(2);

var _overlay2 = _interopRequireDefault(_overlay);

var _modal = __webpack_require__(3);

var _modal2 = _interopRequireDefault(_modal);

var _nav = __webpack_require__(4);

var _nav2 = _interopRequireDefault(_nav);

var _scroll = __webpack_require__(5);

var _scroll2 = _interopRequireDefault(_scroll);

var _search = __webpack_require__(6);

var _search2 = _interopRequireDefault(_search);

var _slider = __webpack_require__(7);

var _slider2 = _interopRequireDefault(_slider);

var _sticky = __webpack_require__(8);

var _sticky2 = _interopRequireDefault(_sticky);

var _utils = __webpack_require__(9);

var _utils2 = _interopRequireDefault(_utils);

var _internal_nav = __webpack_require__(10);

var _internal_nav2 = _interopRequireDefault(_internal_nav);

var _compact_panel = __webpack_require__(11);

var _compact_panel2 = _interopRequireDefault(_compact_panel);

var _mobile_filters = __webpack_require__(12);

var _mobile_filters2 = _interopRequireDefault(_mobile_filters);

var _list_filter = __webpack_require__(13);

var _list_filter2 = _interopRequireDefault(_list_filter);

var _add_icon = __webpack_require__(14);

var _add_icon2 = _interopRequireDefault(_add_icon);

var _search_submit = __webpack_require__(15);

var _search_submit2 = _interopRequireDefault(_search_submit);

var _tag_filter = __webpack_require__(16);

var _tag_filter2 = _interopRequireDefault(_tag_filter);

var _spectrum = __webpack_require__(17);

var _spectrum2 = _interopRequireDefault(_spectrum);

var _cookies_popup = __webpack_require__(18);

var _cookies_popup2 = _interopRequireDefault(_cookies_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Footer.init();
// import Footer from './Footer';
_accordion2.default.init();
_modal2.default.init();
_nav2.default.init();
_overlay2.default.init();
_scroll2.default.init();
_search2.default.init();
_slider2.default.init();
_sticky2.default.init();
_utils2.default.markdownLinksNewPage();
_internal_nav2.default.init();
_compact_panel2.default.init();
_mobile_filters2.default.init();
_list_filter2.default.init();
_add_icon2.default.init();
_search_submit2.default.init();
_tag_filter2.default.init();
_spectrum2.default.init();
_cookies_popup2.default.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Accordion = {
  handleClick: function handleClick() {
    $('.js-open-accordion').click(function (e) {
      var active = $(e.currentTarget).hasClass('js-active');
      active ? $(e.currentTarget).removeClass('js-active') : $(e.currentTarget).addClass('js-active');
    });
  },
  init: function init() {
    this.handleClick();
  }
};

module.exports = Accordion;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Overlay = {
  onClickOverlay: function onClickOverlay() {
    $('#overlay').click(function () {
      $('.js-active').removeClass('js-active');
      $('.js-active-menu').removeClass('js-active-menu');
    });
  },
  init: function init() {
    this.onClickOverlay();
  }
};

module.exports = Overlay;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Modal = {
  openModal: function openModal() {
    $('.js-open-modal').click(function (e) {
      $(e.currentTarget).find('.js-target-modal').addClass('js-active');
      $('#overlay').addClass('js-active');
      $('body').addClass('js-body-modal-active');
    });
  },
  closeModal: function closeModal() {
    $('body').on('click', '.js-close-modal', function () {
      $('.js-target-modal').removeClass('js-active');
      $('#overlay').removeClass('js-active');
      $('body').removeClass('js-body-modal-active');
    });
  },
  clickOverlayCloseModal: function clickOverlayCloseModal() {
    $('#overlay').click(function () {
      $('body').removeClass('js-body-modal-active');
    });
  },
  init: function init() {
    this.openModal();
    this.closeModal();
    this.clickOverlayCloseModal();
  }
};

module.exports = Modal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nav = {
  openMenu: function openMenu() {
    $('.menu-button').on('click', function () {
      $('.js-target-menu').toggleClass('active-menu');
      $('.menu-button').toggleClass('active-menu-button');
      $('#overlay').toggleClass('js-active');
    });
  },
  closeMenu: function closeMenu() {
    $('.close-menu').on('click', function () {
      $('.js-target-menu').removeClass('active-menu');
      $('.menu-button').removeClass('active-menu-button');
      $('#overlay').removeClass('js-active');
    });

    $('#overlay').on('click', function () {
      $('.js-target-menu').removeClass('active-menu');
      $('.top-bar__button').removeClass('active-menu-button');
    });
  },
  init: function init() {
    this.openMenu();
    this.closeMenu();
  }
};

module.exports = Nav;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Scroll = {
  smoothScrolling: function smoothScrolling() {
    // Smooth Scrolling Function
    $('a[href*=\\#]:not([href=\\#])').on('click', function (e) {
      var $targ = $(e.currentTarget.hash);
      var host1 = e.currentTarget.hostname;
      var host2 = window.location.hostname;
      var path1 = e.currentTarget.pathname.replace(/^\//, '');
      var path2 = window.location.pathname.replace(/^\//, '');
      if (!$targ.length) {
        $targ = $('[name=' + e.currentTarget.hash.slice(1) + ']');
      }
      if ($targ.length && (host1 === host2 || path1 === path2)) {
        $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);
        return false;
      }
      return true;
    });
  },
  hideScrollonPath: function hideScrollonPath(path) {
    if (window.location.pathname === path) {
      $('body').css('overflow', 'hidden');
    }
  },
  init: function init() {
    this.smoothScrolling();
    this.hideScrollonPath('/list.html');
  }
};

module.exports = Scroll;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Search = {
  fixedSearchTrigger: function fixedSearchTrigger() {
    // Search Click Behavior
    $('.js-trigger-search').on('click', function (e) {
      e.preventDefault();
      $(e.currentTarget).parent().addClass('js-active');
      $('#overlay').addClass('js-active');
    });
  },
  init: function init() {
    this.fixedSearchTrigger();
  }
};

module.exports = Search;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Slider = {
  generalSlider: function generalSlider() {
    // Slider
    $('.slider').slick({
      arrows: true,
      draggable: false,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 800,
        settings: {
          draggable: true
        }
      }]
    });
  },
  init: function init() {
    this.generalSlider();
  }
};

module.exports = Slider;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sticky = {
  closeSticky: function closeSticky() {
    $('.js-close-sticky').click(function () {
      $('.js-target-sticky').removeClass('js-active');
    });
  },
  init: function init() {
    this.closeSticky();
  }
};

module.exports = Sticky;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Utils = {
  markdownLinksNewPage: function markdownLinksNewPage() {
    $('.markdown a').map(function (idx, link) {
      return link.setAttribute('target', '_blank');
    });
  }
};

module.exports = Utils;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var InternalNav = {
  handleInternalMenu: function handleInternalMenu() {
    $('.internal-menu__item').on('click', function (e) {
      e.preventDefault();
      var $currentTarget = $(e.currentTarget);
      var $allItems = $('.internal-menu__item');
      $allItems.removeClass('js-active-item');
      $currentTarget.addClass('js-active-item');
      var order = $currentTarget.attr('data-order');
      InternalNav.handleNavClick(order);
    });
  },
  getView: function getView(target) {
    var pageTarget = target || '1';
    var $viewTarget = $('[data-nav-order=\'' + pageTarget + '\']');
    $viewTarget.addClass('js-active-section');
  },
  handleNavClick: function handleNavClick(clickTarget) {
    $('.js-active-section').removeClass('js-active-section');
    InternalNav.getView(clickTarget);
  },
  init: function init() {
    this.handleInternalMenu();
    this.getView();
  }
};

module.exports = InternalNav;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CompactPanel = {
  slideTarget: undefined,
  slideContainer: undefined,
  setupSlideAnimation: function setupSlideAnimation() {
    CompactPanel.slideTarget = $('.slide-panel__container');
    CompactPanel.slideContainer = $('.slide-panel');

    CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
    CompactPanel.slideContainer.removeClass('is-visible');
  },
  handleSlideDisplay: function handleSlideDisplay() {
    $('body').on('click', '.slide-panel__open-trigger', function (e) {
      var dataTarget = e.currentTarget.getAttribute('data-term');
      var targetSlideContainer = $('[data-value="' + dataTarget + '"]');
      if (targetSlideContainer.hasClass('is-visible')) {
        CompactPanel.slideTarget.animate({ right: '-100%' }, 400).fadeOut(5);
        targetSlideContainer.removeClass('is-visible');
      } else {
        CompactPanel.slideTarget.animate({ right: '0%' }, 400).css('display', 'block');
        targetSlideContainer.addClass('is-visible');
        $('#overlay').addClass('js-active');
      }
    });
  },
  handleSlideCloseButton: function handleSlideCloseButton() {
    $('body').on('click', '.slide-panel__close-trigger', function (e) {
      e.preventDefault();
      CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
      CompactPanel.slideContainer.removeClass('is-visible');
      $('#overlay').removeClass('js-active');
    });
  },
  handleOverlayClose: function handleOverlayClose() {
    $('body').on('click', '#overlay', function (e) {
      e.preventDefault();
      CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
      CompactPanel.slideContainer.removeClass('is-visible');
    });
  },
  init: function init() {
    this.setupSlideAnimation();
    this.handleSlideDisplay();
    this.handleSlideCloseButton();
    this.handleOverlayClose();
  }
};

module.exports = CompactPanel;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MobileFilters = {
  openFilters: function openFilters() {
    $('.toggle-filters').click(function () {
      $('.filter-container').toggleClass('active');
      $('.toggle-filters').toggleClass('expanded');

      if ($('.toggle-filters').hasClass('expanded')) {
        $('.toggle-filters').html('close');
      } else {
        $('.toggle-filters').html('tune');
      }
    });
  },
  init: function init() {
    this.openFilters();
  }
};

module.exports = MobileFilters;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListFilter = {
  options: {
    valueNames: ['name', 'uid', 'version', 'keywords', 'responsible-party', { name: 'date', attr: 'date' }, { name: 'type', attr: 'type' }, { name: 'hardware', attr: 'hardware' }, { name: 'documentation', attr: 'documentation' }, { name: 'software', attr: 'software' }, { name: 'location', attr: 'location' }],
    fuzzySearch: {
      searchClass: 'fuzzy-search',
      location: 0,
      distance: 100,
      threshold: 0.2,
      multiSearch: true
    }
  },
  projectList: undefined,
  searchString: '',
  allFilters: undefined,
  searchQueries: { software: 'all', hardware: 'all' },
  typeCheckedValues: [],
  location: 'all',
  createList: function createList() {
    ListFilter.projectList = new List('project_data', ListFilter.options);

    if (document.location.href.indexOf('list') > -1) {
      ListFilter.projectList.sort('name', { order: 'asc' });
    }
  },
  filterList: function filterList() {
    ListFilter.projectList.search(ListFilter.searchString);
    ListFilter.projectList.filter(function (item) {
      if (item.values().hardware !== null && item.values().software !== null && item.values().type !== null && item.values().location !== null && item.values().hardware.indexOf(ListFilter.searchQueries.hardware) !== -1 && item.values().software.indexOf(ListFilter.searchQueries.software) !== -1 && item.values().location.indexOf(ListFilter.location) !== -1 && ListFilter.matchesAllItems(item.values().type, ListFilter.typeCheckedValues)) {
        return true;
      }
    });

    ListFilter.displayResults();
    ListFilter.displayResultQueries();
  },
  filterBySearch: function filterBySearch() {
    $('#searchfield').on('keyup', function (e) {
      ListFilter.searchString = $(e.currentTarget).val();
      ListFilter.filterList();
    });
  },
  filterByDropdowns: function filterByDropdowns() {
    ListFilter.allFilters = $('.dropdown');

    ListFilter.allFilters.on('change', function (e) {
      ListFilter.allFilters.each(function (selection) {
        $(selection).each(function () {
          var filterSelection = e.currentTarget.id;
          var selectedOption = $(e.currentTarget).children(':selected').attr('id');

          ListFilter.searchQueries[filterSelection] = selectedOption;
        });
      });
      ListFilter.filterList();
    });
  },
  filterByLocation: function filterByLocation() {
    $('.country-dropdown').on('change', function (e) {
      ListFilter.location = $(e.currentTarget).children(':selected').attr('id');
      ListFilter.filterList();
    });
  },
  filterByCheckboxes: function filterByCheckboxes() {
    $('.filter-container').on('change', $('input[type="checkbox"]:checked'), function () {
      ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked').map(function () {
        return this.value;
      }).get();

      if (ListFilter.typeCheckedValues.length === 0) {
        ListFilter.typeCheckedValues = ['all'];
      }

      ListFilter.filterList();
    });
  },
  matchesAllItems: function matchesAllItems(arr1, arr2) {
    var matchesAll = void 0;
    var largerArray = void 0;
    var smallerArray = void 0;
    if (arr1.length > arr2.length) {
      largerArray = arr1;
      smallerArray = arr2;
    } else {
      largerArray = arr2;
      smallerArray = arr1;
    }
    matchesAll = smallerArray.every(function (elem) {
      return largerArray.indexOf(elem) !== -1;
    });
    return matchesAll;
  },
  filterByUrlParams: function filterByUrlParams() {
    var searchQuery = window.location.search.split('=')[0];
    var searchParam = window.location.search.split('=')[1];

    switch (searchQuery) {
      case '?q':
        ListFilter.searchString = decodeURI(searchParam);
        ListFilter.projectList.search(ListFilter.searchString);
        ListFilter.displayResultQueries();
        break;
      case '?type':
        $('input[type=checkbox][value=' + searchParam + ']').prop('checked', true);
        ListFilter.typeCheckedValues.push(searchParam);
        ListFilter.displayResultQueries();

        ListFilter.projectList.filter(function (item) {
          if (item.values().type !== null && item.values().type.indexOf(searchParam) !== -1) {
            return true;
          }
        });
        break;
      default:
    }
  },
  clearAllFilters: function clearAllFilters() {
    $('.clear_filters').on('click', function (e) {
      e.preventDefault();
      ListFilter.searchString = '';
      ListFilter.location = '';
      ListFilter.searchQueries = { software: 'all', hardware: 'all' };
      ListFilter.projectList.search();
      ListFilter.projectList.filter();
      ListFilter.projectList.sort('name', { order: 'asc' });

      if (window.location.search !== '') {
        window.location.href = window.location.origin + '/oshwa/list.html';
      }

      ListFilter.clearFormInputs();
      ListFilter.displayResults();
      ListFilter.displayResultQueries();
    });
  },
  clearFormInputs: function clearFormInputs() {
    $('.search__input').val('');
    $('.dropdown').prop('selectedIndex', 0);
    $('.country-dropdown').prop('selectedIndex', 0);
    $('input[type="checkbox"]:checked').prop('checked', false);
  },
  displayResults: function displayResults() {
    var projectCount = $('.project').length;
    $('.results-count').html('<p>Displaying ' + projectCount + ' Projects</p>');
  },
  displayResultQueries: function displayResultQueries() {
    var activeSearchParams = [];

    if (ListFilter.searchString !== '') {
      activeSearchParams.push(ListFilter.searchString);
    }

    $('input[name="type"]:checked').map(function (val, item) {
      return activeSearchParams.push(item.id);
    });

    $('.dropdown').map(function (val, item) {
      if (item.value !== 'Select one') {
        activeSearchParams.push(item.value);
      }
      return activeSearchParams;
    });

    if (activeSearchParams.length > 0) {
      $('.results-message').show();
      if ($('.project').length === 0) {
        $('.results-message').html('<p>No results for: ' + activeSearchParams.join('; ') + '</p>');
      } else {
        $('.results-message').html('<p>Results: ' + activeSearchParams.join('; ') + '</p>');
      }
    } else {
      $('.results-message').hide();
    }
  },
  init: function init() {
    this.createList();
    this.filterBySearch();
    this.filterByDropdowns();
    this.filterByLocation();
    this.filterByCheckboxes();
    this.filterByUrlParams();
    this.clearAllFilters();
    this.clearFormInputs();
    this.displayResults();
  }
};

module.exports = ListFilter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AddIcon = {
  citationContainer: $('.citations').find('a'),
  addIcon: function addIcon() {
    AddIcon.citationContainer.append('<i class="material-icons launch">launch</i>');
  },
  init: function init() {
    this.addIcon();
  }
};

module.exports = AddIcon;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchSubmit = {
  listUrl: '/oshwa/list.html',
  searchString: undefined,
  searchListUrl: undefined,
  submitSearch: function submitSearch() {
    SearchSubmit.searchString = $('#searchfield');

    $('.js-search-submit').on('click', function () {
      var query = SearchSubmit.searchString.val();
      var url = document.location.origin;
      SearchSubmit.searchListUrl = '' + url + SearchSubmit.listUrl + '?q=' + query;

      if (window.location.href !== 'about:blank') {
        window.location.href = SearchSubmit.searchListUrl;
      }
    });
  },
  init: function init() {
    this.submitSearch();
  }
};

module.exports = SearchSubmit;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TagFilter = {
  listUrl: '/oshwa/list.html',
  searchListUrl: undefined,
  filterByTag: function filterByTag() {
    $('.project__type').on('click', function (e) {
      var query = e.target.getAttribute('type-tag');
      var url = document.location.origin;
      TagFilter.searchListUrl = '' + url + TagFilter.listUrl + '?type=' + query;

      if (window.location.href !== 'about:blank') {
        window.location.href = TagFilter.searchListUrl;
      }
    });
  },
  filterByCategory: function filterByCategory() {
    $('.container-overlay').on('click', function (e) {
      var query = e.target.parentElement.getAttribute('type');
      var url = document.location.origin;
      TagFilter.searchListUrl = '' + url + TagFilter.listUrl + '?type=' + query;

      if (window.location.href !== 'about:blank') {
        window.location.href = TagFilter.searchListUrl;
      }
    });
  },
  init: function init() {
    this.filterByTag();
    this.filterByCategory();
  }
};

module.exports = TagFilter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Spectrum = {
  schematicDescription: undefined,
  targetCircles: function targetCircles() {
    Spectrum.schematicDescription = $('.schematic-description');

    $('.circle').on('click', function (e) {
      var clickedCircle = $(e.currentTarget).attr('circle-attr');

      if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
      } else {
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).siblings().removeClass('active');
      }

      Spectrum.showData(clickedCircle);
    });
  },
  showData: function showData(circleAttr) {
    Spectrum.schematicDescription = [].slice.call(Spectrum.schematicDescription);
    Spectrum.schematicDescription.forEach(function (item) {
      if (item.getAttribute('position-attr') === circleAttr) {
        item.classList.toggle('display');
      } else {
        item.classList.remove('display');
      }
    });
  },
  activateFirstCircle: function activateFirstCircle() {
    var firstCircle = $('.circle').first();
    firstCircle.first().addClass('active');
    Spectrum.showData(firstCircle.attr('circle-attr'));
  },
  init: function init() {
    this.targetCircles();
    this.activateFirstCircle();
  }
};

module.exports = Spectrum;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CookiesPopup = {
  cookies: __webpack_require__(19),
  slideUp: function slideUp() {
    setTimeout(function () {
      $('.cookies-popup').animate({ bottom: '0' }, 400).css('display', 'block');
    }, 800);
  },
  slideDown: function slideDown() {
    $('.popup-button').on('click', function (e) {
      var clickedValue = e.currentTarget.getAttribute('cookie-value');
      if (clickedValue === 'agree') {
        CookiesPopup.cookies.set('user_cookie_agreement', 'agree', { expires: 365 });
      } else if (clickedValue === 'disagree') {
        CookiesPopup.cookies.set('user_cookie_agreement', 'disagree', { expires: 365 });
      }
      $('.cookies-popup').animate({ bottom: '-220px' }, 'slow');
    });
  },
  hidePopupBasedOnCookie: function hidePopupBasedOnCookie() {
    if (CookiesPopup.cookies.get('user_cookie_agreement')) {
      $('.cookies-popup').addClass('hidden');
    }
  },
  init: function init() {
    this.slideUp();
    this.slideDown();
    this.hidePopupBasedOnCookie();
  }
};

module.exports = CookiesPopup;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.defaults = {};

exports.set = function(name, value, options) {
  // Retrieve options and defaults
  var opts = options || {};
  var defaults = exports.defaults;

  // Apply default value for unspecified options
  var expires  = opts.expires  || defaults.expires;
  var domain   = opts.domain   || defaults.domain;
  var path     = opts.path     !== undefined ? opts.path     : (defaults.path !== undefined ? defaults.path : '/');
  var secure   = opts.secure   !== undefined ? opts.secure   : defaults.secure;
  var httponly = opts.httponly !== undefined ? opts.httponly : defaults.httponly;
  var samesite = opts.samesite !== undefined ? opts.samesite : defaults.samesite;

  // Determine cookie expiration date
  // If succesful the result will be a valid Date, otherwise it will be an invalid Date or false(ish)
  var expDate = expires ? new Date(
      // in case expires is an integer, it should specify the number of days till the cookie expires
      typeof expires === 'number' ? new Date().getTime() + (expires * 864e5) :
      // else expires should be either a Date object or in a format recognized by Date.parse()
      expires
  ) : 0;

  // Set cookie
  document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent)                // Encode cookie name
  .replace('(', '%28')
  .replace(')', '%29') +
  '=' + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) +                  // Encode cookie value (RFC6265)
  (expDate && expDate.getTime() >= 0 ? ';expires=' + expDate.toUTCString() : '') + // Add expiration date
  (domain   ? ';domain=' + domain     : '') +                                      // Add domain
  (path     ? ';path='   + path       : '') +                                      // Add path
  (secure   ? ';secure'               : '') +                                      // Add secure option
  (httponly ? ';httponly'             : '') +                                      // Add httponly option
  (samesite ? ';samesite=' + samesite : '');                                       // Add samesite option
};

exports.get = function(name) {
  var cookies = document.cookie.split(';');
  
  // Iterate all cookies
  while(cookies.length) {
    var cookie = cookies.pop();

    // Determine separator index ("name=value")
    var separatorIndex = cookie.indexOf('=');

    // IE<11 emits the equal sign when the cookie value is empty
    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;

    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));

    // Return cookie value if the name matches
    if (cookie_name === name) {
      return decodeURIComponent(cookie.slice(separatorIndex + 1));
    }
  }

  // Return `null` as the cookie was not found
  return null;
};

exports.erase = function(name, options) {
  exports.set(name, '', {
    expires:  -1,
    domain:   options && options.domain,
    path:     options && options.path,
    secure:   0,
    httponly: 0}
  );
};

exports.all = function() {
  var all = {};
  var cookies = document.cookie.split(';');

  // Iterate all cookies
  while(cookies.length) {
    var cookie = cookies.pop();

    // Determine separator index ("name=value")
    var separatorIndex = cookie.indexOf('=');

    // IE<11 emits the equal sign when the cookie value is empty
    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;

    // add the cookie name and value to the `all` object
    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));
    all[cookie_name] = decodeURIComponent(cookie.slice(separatorIndex + 1));
  }

  return all;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGU5OWIzNWExMDYwZGIxODE1MjkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2Nvb2tpZXNfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItY29va2llcy9zcmMvYnJvd3Nlci1jb29raWVzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJtYXJrZG93bkxpbmtzTmV3UGFnZSIsIkFjY29yZGlvbiIsImhhbmRsZUNsaWNrIiwiJCIsImNsaWNrIiwiYWN0aXZlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiT3ZlcmxheSIsIm9uQ2xpY2tPdmVybGF5IiwiTW9kYWwiLCJvcGVuTW9kYWwiLCJmaW5kIiwiY2xvc2VNb2RhbCIsIm9uIiwiY2xpY2tPdmVybGF5Q2xvc2VNb2RhbCIsIk5hdiIsIm9wZW5NZW51IiwidG9nZ2xlQ2xhc3MiLCJjbG9zZU1lbnUiLCJTY3JvbGwiLCJzbW9vdGhTY3JvbGxpbmciLCIkdGFyZyIsImhhc2giLCJob3N0MSIsImhvc3RuYW1lIiwiaG9zdDIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGgxIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicGF0aDIiLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJoaWRlU2Nyb2xsb25QYXRoIiwicGF0aCIsImNzcyIsIlNlYXJjaCIsImZpeGVkU2VhcmNoVHJpZ2dlciIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiU2xpZGVyIiwiZ2VuZXJhbFNsaWRlciIsInNsaWNrIiwiYXJyb3dzIiwiZHJhZ2dhYmxlIiwic3dpcGVUb1NsaWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlN0aWNreSIsImNsb3NlU3RpY2t5IiwiVXRpbHMiLCJtYXAiLCJpZHgiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiSW50ZXJuYWxOYXYiLCJoYW5kbGVJbnRlcm5hbE1lbnUiLCIkY3VycmVudFRhcmdldCIsIiRhbGxJdGVtcyIsIm9yZGVyIiwiYXR0ciIsImhhbmRsZU5hdkNsaWNrIiwiZ2V0VmlldyIsInRhcmdldCIsInBhZ2VUYXJnZXQiLCIkdmlld1RhcmdldCIsImNsaWNrVGFyZ2V0IiwiQ29tcGFjdFBhbmVsIiwic2xpZGVUYXJnZXQiLCJ1bmRlZmluZWQiLCJzbGlkZUNvbnRhaW5lciIsInNldHVwU2xpZGVBbmltYXRpb24iLCJyaWdodCIsImZhZGVPdXQiLCJoYW5kbGVTbGlkZURpc3BsYXkiLCJkYXRhVGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0U2xpZGVDb250YWluZXIiLCJoYW5kbGVTbGlkZUNsb3NlQnV0dG9uIiwiaGFuZGxlT3ZlcmxheUNsb3NlIiwiTW9iaWxlRmlsdGVycyIsIm9wZW5GaWx0ZXJzIiwiaHRtbCIsIkxpc3RGaWx0ZXIiLCJvcHRpb25zIiwidmFsdWVOYW1lcyIsIm5hbWUiLCJmdXp6eVNlYXJjaCIsInNlYXJjaENsYXNzIiwiZGlzdGFuY2UiLCJ0aHJlc2hvbGQiLCJtdWx0aVNlYXJjaCIsInByb2plY3RMaXN0Iiwic2VhcmNoU3RyaW5nIiwiYWxsRmlsdGVycyIsInNlYXJjaFF1ZXJpZXMiLCJzb2Z0d2FyZSIsImhhcmR3YXJlIiwidHlwZUNoZWNrZWRWYWx1ZXMiLCJjcmVhdGVMaXN0IiwiTGlzdCIsImRvY3VtZW50IiwiaHJlZiIsImluZGV4T2YiLCJzb3J0IiwiZmlsdGVyTGlzdCIsInNlYXJjaCIsImZpbHRlciIsIml0ZW0iLCJ2YWx1ZXMiLCJ0eXBlIiwibWF0Y2hlc0FsbEl0ZW1zIiwiZGlzcGxheVJlc3VsdHMiLCJkaXNwbGF5UmVzdWx0UXVlcmllcyIsImZpbHRlckJ5U2VhcmNoIiwidmFsIiwiZmlsdGVyQnlEcm9wZG93bnMiLCJlYWNoIiwic2VsZWN0aW9uIiwiZmlsdGVyU2VsZWN0aW9uIiwiaWQiLCJzZWxlY3RlZE9wdGlvbiIsImNoaWxkcmVuIiwiZmlsdGVyQnlMb2NhdGlvbiIsImZpbHRlckJ5Q2hlY2tib3hlcyIsInZhbHVlIiwiZ2V0IiwiYXJyMSIsImFycjIiLCJtYXRjaGVzQWxsIiwibGFyZ2VyQXJyYXkiLCJzbWFsbGVyQXJyYXkiLCJldmVyeSIsImVsZW0iLCJmaWx0ZXJCeVVybFBhcmFtcyIsInNlYXJjaFF1ZXJ5Iiwic3BsaXQiLCJzZWFyY2hQYXJhbSIsImRlY29kZVVSSSIsInByb3AiLCJwdXNoIiwiY2xlYXJBbGxGaWx0ZXJzIiwib3JpZ2luIiwiY2xlYXJGb3JtSW5wdXRzIiwicHJvamVjdENvdW50IiwiYWN0aXZlU2VhcmNoUGFyYW1zIiwic2hvdyIsImpvaW4iLCJoaWRlIiwiQWRkSWNvbiIsImNpdGF0aW9uQ29udGFpbmVyIiwiYWRkSWNvbiIsImFwcGVuZCIsIlNlYXJjaFN1Ym1pdCIsImxpc3RVcmwiLCJzZWFyY2hMaXN0VXJsIiwic3VibWl0U2VhcmNoIiwicXVlcnkiLCJ1cmwiLCJUYWdGaWx0ZXIiLCJmaWx0ZXJCeVRhZyIsImZpbHRlckJ5Q2F0ZWdvcnkiLCJwYXJlbnRFbGVtZW50IiwiU3BlY3RydW0iLCJzY2hlbWF0aWNEZXNjcmlwdGlvbiIsInRhcmdldENpcmNsZXMiLCJjbGlja2VkQ2lyY2xlIiwic2libGluZ3MiLCJzaG93RGF0YSIsImNhbGwiLCJmb3JFYWNoIiwiY2lyY2xlQXR0ciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFjdGl2YXRlRmlyc3RDaXJjbGUiLCJmaXJzdENpcmNsZSIsImZpcnN0IiwiQ29va2llc1BvcHVwIiwiY29va2llcyIsInJlcXVpcmUiLCJzbGlkZVVwIiwic2V0VGltZW91dCIsImJvdHRvbSIsInNsaWRlRG93biIsImNsaWNrZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJoaWRlUG9wdXBCYXNlZE9uQ29va2llIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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QUE0QixFQUFFNkosUUFBUSxRQUFWLEVBQTVCLEVBQWtELE1BQWxEO0FBQ0QsS0FSRDtBQVNELEdBbkJrQjtBQW9CbkJLLDBCQUF3QixrQ0FBTTtBQUM1QixRQUFJVixhQUFhQyxPQUFiLENBQXFCckQsR0FBckIsQ0FBeUIsdUJBQXpCLENBQUosRUFBdUQ7QUFDckR6SSxRQUFFLGdCQUFGLEVBQW9CTyxRQUFwQixDQUE2QixRQUE3QjtBQUNEO0FBQ0YsR0F4QmtCO0FBeUJuQlgsTUF6Qm1CLGtCQXlCWjtBQUNMLFNBQUtvTSxPQUFMO0FBQ0EsU0FBS0csU0FBTDtBQUNBLFNBQUtJLHNCQUFMO0FBQ0Q7QUE3QmtCLENBQXJCOztBQWdDQS9MLE9BQU9DLE9BQVAsR0FBaUJvTCxZQUFqQixDOzs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyx5Q0FBeUM7QUFDekMsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQiw0QkFBNEI7QUFDNUM7O0FBRUE7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZTk5YjM1YTEwNjBkYjE4MTUyOSIsIi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vc2Nyb2xsJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5pbXBvcnQgU3RpY2t5IGZyb20gJy4vc3RpY2t5JztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBJbnRlcm5hbE5hdiBmcm9tICcuL2ludGVybmFsX25hdic7XG5pbXBvcnQgQ29tcGFjdFBhbmVsIGZyb20gJy4vY29tcGFjdF9wYW5lbCc7XG5pbXBvcnQgTW9iaWxlRmlsdGVycyBmcm9tICcuL21vYmlsZV9maWx0ZXJzJztcbmltcG9ydCBMaXN0RmlsdGVyIGZyb20gJy4vbGlzdF9maWx0ZXInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnLi9hZGRfaWNvbic7XG5pbXBvcnQgU2VhcmNoU3VibWl0IGZyb20gJy4vc2VhcmNoX3N1Ym1pdCc7XG5pbXBvcnQgVGFnRmlsdGVyIGZyb20gJy4vdGFnX2ZpbHRlcic7XG5pbXBvcnQgU3BlY3RydW0gZnJvbSAnLi9zcGVjdHJ1bSc7XG5pbXBvcnQgQ29va2llc1BvcHVwIGZyb20gJy4vY29va2llc19wb3B1cCc7XG5cbi8vIEZvb3Rlci5pbml0KCk7XG5BY2NvcmRpb24uaW5pdCgpO1xuTW9kYWwuaW5pdCgpO1xuTmF2LmluaXQoKTtcbk92ZXJsYXkuaW5pdCgpO1xuU2Nyb2xsLmluaXQoKTtcblNlYXJjaC5pbml0KCk7XG5TbGlkZXIuaW5pdCgpO1xuU3RpY2t5LmluaXQoKTtcblV0aWxzLm1hcmtkb3duTGlua3NOZXdQYWdlKCk7XG5JbnRlcm5hbE5hdi5pbml0KCk7XG5Db21wYWN0UGFuZWwuaW5pdCgpO1xuTW9iaWxlRmlsdGVycy5pbml0KCk7XG5MaXN0RmlsdGVyLmluaXQoKTtcbkFkZEljb24uaW5pdCgpO1xuU2VhcmNoU3VibWl0LmluaXQoKTtcblRhZ0ZpbHRlci5pbml0KCk7XG5TcGVjdHJ1bS5pbml0KCk7XG5Db29raWVzUG9wdXAuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwiY29uc3QgQWNjb3JkaW9uID0ge1xuICBoYW5kbGVDbGljazogKCkgPT4ge1xuICAgICQoJy5qcy1vcGVuLWFjY29yZGlvbicpLmNsaWNrKGUgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgIGFjdGl2ZSA/ICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJykgOiAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2soKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY2NvcmRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2FjY29yZGlvbi5qcyIsImNvbnN0IE92ZXJsYXkgPSB7XG4gIG9uQ2xpY2tPdmVybGF5KCkge1xuICAgICQoJyNvdmVybGF5JykuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnLmpzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJy5qcy1hY3RpdmUtbWVudScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUtbWVudScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub25DbGlja092ZXJsYXkoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPdmVybGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9vdmVybGF5LmpzIiwiY29uc3QgTW9kYWwgPSB7XG4gIG9wZW5Nb2RhbDogKCkgPT4ge1xuICAgICQoJy5qcy1vcGVuLW1vZGFsJykuY2xpY2soZSA9PiB7XG4gICAgICAkKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgLmZpbmQoJy5qcy10YXJnZXQtbW9kYWwnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2pzLWJvZHktbW9kYWwtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlTW9kYWw6ICgpID0+IHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qcy1jbG9zZS1tb2RhbCcsICgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtbW9kYWwnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnanMtYm9keS1tb2RhbC1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xpY2tPdmVybGF5Q2xvc2VNb2RhbDogKCkgPT4ge1xuICAgICQoJyNvdmVybGF5JykuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdqcy1ib2R5LW1vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgdGhpcy5jbGlja092ZXJsYXlDbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwiY29uc3QgTmF2ID0ge1xuICBvcGVuTWVudTogKCkgPT4ge1xuICAgICQoJy5tZW51LWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtbWVudScpO1xuICAgICAgJCgnLm1lbnUtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51LWJ1dHRvbicpO1xuICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlTWVudTogKCkgPT4ge1xuICAgICQoJy5jbG9zZS1tZW51Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XG4gICAgICAkKCcubWVudS1idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUtYnV0dG9uJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XG4gICAgICAkKCcudG9wLWJhcl9fYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51LWJ1dHRvbicpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICB0aGlzLmNsb3NlTWVudSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbmF2LmpzIiwiY29uc3QgU2Nyb2xsID0ge1xuICBzbW9vdGhTY3JvbGxpbmcoKSB7XG4gICAgLy8gU21vb3RoIFNjcm9sbGluZyBGdW5jdGlvblxuICAgICQoJ2FbaHJlZio9XFxcXCNdOm5vdChbaHJlZj1cXFxcI10pJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBsZXQgJHRhcmcgPSAkKGUuY3VycmVudFRhcmdldC5oYXNoKTtcbiAgICAgIGNvbnN0IGhvc3QxID0gZS5jdXJyZW50VGFyZ2V0Lmhvc3RuYW1lO1xuICAgICAgY29uc3QgaG9zdDIgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICBjb25zdCBwYXRoMSA9IGUuY3VycmVudFRhcmdldC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgY29uc3QgcGF0aDIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgIGlmICghJHRhcmcubGVuZ3RoKSB7XG4gICAgICAgICR0YXJnID0gJChgW25hbWU9JHtlLmN1cnJlbnRUYXJnZXQuaGFzaC5zbGljZSgxKX1dYCk7XG4gICAgICB9XG4gICAgICBpZiAoJHRhcmcubGVuZ3RoICYmIChob3N0MSA9PT0gaG9zdDIgfHwgcGF0aDEgPT09IHBhdGgyKSkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJHRhcmcub2Zmc2V0KCkudG9wIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgaGlkZVNjcm9sbG9uUGF0aChwYXRoKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcGF0aCkge1xuICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsaW5nKCk7XG4gICAgdGhpcy5oaWRlU2Nyb2xsb25QYXRoKCcvbGlzdC5odG1sJyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zY3JvbGwuanMiLCJjb25zdCBTZWFyY2ggPSB7XG4gIGZpeGVkU2VhcmNoVHJpZ2dlcigpIHtcbiAgICAvLyBTZWFyY2ggQ2xpY2sgQmVoYXZpb3JcbiAgICAkKCcuanMtdHJpZ2dlci1zZWFyY2gnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZml4ZWRTZWFyY2hUcmlnZ2VyKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zZWFyY2guanMiLCJjb25zdCBTbGlkZXIgPSB7XG4gIGdlbmVyYWxTbGlkZXIoKSB7XG4gICAgLy8gU2xpZGVyXG4gICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzd2lwZVRvU2xpZGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZ2VuZXJhbFNsaWRlcigpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwiY29uc3QgU3RpY2t5ID0ge1xuICBjbG9zZVN0aWNreSgpIHtcbiAgICAkKCcuanMtY2xvc2Utc3RpY2t5JykuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1zdGlja3knKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZVN0aWNreSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0aWNreTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwiY29uc3QgVXRpbHMgPSB7XG4gIG1hcmtkb3duTGlua3NOZXdQYWdlOiAoKSA9PiB7XG4gICAgJCgnLm1hcmtkb3duIGEnKS5tYXAoKGlkeCwgbGluaykgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3V0aWxzLmpzIiwiY29uc3QgSW50ZXJuYWxOYXYgPSB7XG4gIGhhbmRsZUludGVybmFsTWVudSgpIHtcbiAgICAkKCcuaW50ZXJuYWwtbWVudV9faXRlbScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBjb25zdCAkYWxsSXRlbXMgPSAkKCcuaW50ZXJuYWwtbWVudV9faXRlbScpO1xuICAgICAgJGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUtaXRlbScpO1xuICAgICAgJGN1cnJlbnRUYXJnZXQuYWRkQ2xhc3MoJ2pzLWFjdGl2ZS1pdGVtJyk7XG4gICAgICBjb25zdCBvcmRlciA9ICRjdXJyZW50VGFyZ2V0LmF0dHIoJ2RhdGEtb3JkZXInKTtcbiAgICAgIEludGVybmFsTmF2LmhhbmRsZU5hdkNsaWNrKG9yZGVyKTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Vmlldyh0YXJnZXQpIHtcbiAgICBjb25zdCBwYWdlVGFyZ2V0ID0gdGFyZ2V0IHx8ICcxJztcbiAgICBjb25zdCAkdmlld1RhcmdldCA9ICQoYFtkYXRhLW5hdi1vcmRlcj0nJHtwYWdlVGFyZ2V0fSddYCk7XG4gICAgJHZpZXdUYXJnZXQuYWRkQ2xhc3MoJ2pzLWFjdGl2ZS1zZWN0aW9uJyk7XG4gIH0sXG4gIGhhbmRsZU5hdkNsaWNrKGNsaWNrVGFyZ2V0KSB7XG4gICAgJCgnLmpzLWFjdGl2ZS1zZWN0aW9uJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1zZWN0aW9uJyk7XG4gICAgSW50ZXJuYWxOYXYuZ2V0VmlldyhjbGlja1RhcmdldCk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnRlcm5hbE1lbnUoKTtcbiAgICB0aGlzLmdldFZpZXcoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcm5hbE5hdjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvaW50ZXJuYWxfbmF2LmpzIiwiY29uc3QgQ29tcGFjdFBhbmVsID0ge1xuICBzbGlkZVRhcmdldDogdW5kZWZpbmVkLFxuICBzbGlkZUNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICBzZXR1cFNsaWRlQW5pbWF0aW9uOiAoKSA9PiB7XG4gICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0ID0gJCgnLnNsaWRlLXBhbmVsX19jb250YWluZXInKTtcbiAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIgPSAkKCcuc2xpZGUtcGFuZWwnKTtcblxuICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgIENvbXBhY3RQYW5lbC5zbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9LFxuICBoYW5kbGVTbGlkZURpc3BsYXk6ICgpID0+IHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zbGlkZS1wYW5lbF9fb3Blbi10cmlnZ2VyJywgZSA9PiB7XG4gICAgICBjb25zdCBkYXRhVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXJtJyk7XG4gICAgICBjb25zdCB0YXJnZXRTbGlkZUNvbnRhaW5lciA9ICQoYFtkYXRhLXZhbHVlPVwiJHtkYXRhVGFyZ2V0fVwiXWApO1xuICAgICAgaWYgKHRhcmdldFNsaWRlQ29udGFpbmVyLmhhc0NsYXNzKCdpcy12aXNpYmxlJykpIHtcbiAgICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCA0MDApLmZhZGVPdXQoNSk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnMCUnIH0sIDQwMCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVTbGlkZUNsb3NlQnV0dG9uOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGUtcGFuZWxfX2Nsb3NlLXRyaWdnZXInLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlT3ZlcmxheUNsb3NlOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjb3ZlcmxheScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCAnc2xvdycpLmZhZGVPdXQoNSk7XG4gICAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwU2xpZGVBbmltYXRpb24oKTtcbiAgICB0aGlzLmhhbmRsZVNsaWRlRGlzcGxheSgpO1xuICAgIHRoaXMuaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbigpO1xuICAgIHRoaXMuaGFuZGxlT3ZlcmxheUNsb3NlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFjdFBhbmVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwiY29uc3QgTW9iaWxlRmlsdGVycyA9IHtcbiAgb3BlbkZpbHRlcnM6ICgpID0+IHtcbiAgICAkKCcudG9nZ2xlLWZpbHRlcnMnKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuZmlsdGVyLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy50b2dnbGUtZmlsdGVycycpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXG4gICAgICBpZiAoJCgnLnRvZ2dsZS1maWx0ZXJzJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykuaHRtbCgnY2xvc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy50b2dnbGUtZmlsdGVycycpLmh0bWwoJ3R1bmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wZW5GaWx0ZXJzKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9iaWxlRmlsdGVycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJjb25zdCBMaXN0RmlsdGVyID0ge1xuICBvcHRpb25zOiB7XG4gICAgdmFsdWVOYW1lczogW1xuICAgICAgJ25hbWUnLFxuICAgICAgJ3VpZCcsXG4gICAgICAndmVyc2lvbicsXG4gICAgICAna2V5d29yZHMnLFxuICAgICAgJ3Jlc3BvbnNpYmxlLXBhcnR5JyxcbiAgICAgIHsgbmFtZTogJ2RhdGUnLCBhdHRyOiAnZGF0ZScgfSxcbiAgICAgIHsgbmFtZTogJ3R5cGUnLCBhdHRyOiAndHlwZScgfSxcbiAgICAgIHsgbmFtZTogJ2hhcmR3YXJlJywgYXR0cjogJ2hhcmR3YXJlJyB9LFxuICAgICAgeyBuYW1lOiAnZG9jdW1lbnRhdGlvbicsIGF0dHI6ICdkb2N1bWVudGF0aW9uJyB9LFxuICAgICAgeyBuYW1lOiAnc29mdHdhcmUnLCBhdHRyOiAnc29mdHdhcmUnIH0sXG4gICAgICB7IG5hbWU6ICdsb2NhdGlvbicsIGF0dHI6ICdsb2NhdGlvbicgfVxuICAgIF0sXG4gICAgZnV6enlTZWFyY2g6IHtcbiAgICAgIHNlYXJjaENsYXNzOiAnZnV6enktc2VhcmNoJyxcbiAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgbXVsdGlTZWFyY2g6IHRydWVcbiAgICB9XG4gIH0sXG4gIHByb2plY3RMaXN0OiB1bmRlZmluZWQsXG4gIHNlYXJjaFN0cmluZzogJycsXG4gIGFsbEZpbHRlcnM6IHVuZGVmaW5lZCxcbiAgc2VhcmNoUXVlcmllczogeyBzb2Z0d2FyZTogJ2FsbCcsIGhhcmR3YXJlOiAnYWxsJyB9LFxuICB0eXBlQ2hlY2tlZFZhbHVlczogW10sXG4gIGxvY2F0aW9uOiAnYWxsJyxcbiAgY3JlYXRlTGlzdDogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QgPSBuZXcgTGlzdCgncHJvamVjdF9kYXRhJywgTGlzdEZpbHRlci5vcHRpb25zKTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2xpc3QnKSA+IC0xKSB7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNvcnQoJ25hbWUnLCB7IG9yZGVyOiAnYXNjJyB9KTtcbiAgICB9XG4gIH0sXG4gIGZpbHRlckxpc3Q6ICgpID0+IHtcbiAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuaGFyZHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5zb2Z0d2FyZSAhPT0gbnVsbCAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLnR5cGUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5sb2NhdGlvbiAhPT0gbnVsbCAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLmhhcmR3YXJlLmluZGV4T2YoTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzLmhhcmR3YXJlKSAhPT0gLTEgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5zb2Z0d2FyZS5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5zb2Z0d2FyZSkgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24uaW5kZXhPZihMaXN0RmlsdGVyLmxvY2F0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgTGlzdEZpbHRlci5tYXRjaGVzQWxsSXRlbXMoaXRlbS52YWx1ZXMoKS50eXBlLCBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0cygpO1xuICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgfSxcbiAgZmlsdGVyQnlTZWFyY2g6ICgpID0+IHtcbiAgICAkKCcjc2VhcmNoZmllbGQnKS5vbigna2V5dXAnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nID0gJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5RHJvcGRvd25zOiAoKSA9PiB7XG4gICAgTGlzdEZpbHRlci5hbGxGaWx0ZXJzID0gJCgnLmRyb3Bkb3duJyk7XG5cbiAgICBMaXN0RmlsdGVyLmFsbEZpbHRlcnMub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgTGlzdEZpbHRlci5hbGxGaWx0ZXJzLmVhY2goc2VsZWN0aW9uID0+IHtcbiAgICAgICAgJChzZWxlY3Rpb24pLmVhY2goKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlclNlbGVjdGlvbiA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jaGlsZHJlbignOnNlbGVjdGVkJykuYXR0cignaWQnKTtcblxuICAgICAgICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllc1tmaWx0ZXJTZWxlY3Rpb25dID0gc2VsZWN0ZWRPcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoKTtcbiAgICB9KTtcbiAgfSxcbiAgZmlsdGVyQnlMb2NhdGlvbjogKCkgPT4ge1xuICAgICQoJy5jb3VudHJ5LWRyb3Bkb3duJykub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgTGlzdEZpbHRlci5sb2NhdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jaGlsZHJlbignOnNlbGVjdGVkJykuYXR0cignaWQnKTtcbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdCgpO1xuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeUNoZWNrYm94ZXM6ICgpID0+IHtcbiAgICAkKCcuZmlsdGVyLWNvbnRhaW5lcicpLm9uKCdjaGFuZ2UnLCAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLCAoKSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5nZXQoKTtcblxuICAgICAgaWYgKExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMgPSBbJ2FsbCddO1xuICAgICAgfVxuXG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoKTtcbiAgICB9KTtcbiAgfSxcbiAgbWF0Y2hlc0FsbEl0ZW1zOiAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGxldCBtYXRjaGVzQWxsO1xuICAgIGxldCBsYXJnZXJBcnJheTtcbiAgICBsZXQgc21hbGxlckFycmF5O1xuICAgIGlmIChhcnIxLmxlbmd0aCA+IGFycjIubGVuZ3RoKSB7XG4gICAgICBsYXJnZXJBcnJheSA9IGFycjE7XG4gICAgICBzbWFsbGVyQXJyYXkgPSBhcnIyO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXJnZXJBcnJheSA9IGFycjI7XG4gICAgICBzbWFsbGVyQXJyYXkgPSBhcnIxO1xuICAgIH1cbiAgICBtYXRjaGVzQWxsID0gc21hbGxlckFycmF5LmV2ZXJ5KGVsZW0gPT4gbGFyZ2VyQXJyYXkuaW5kZXhPZihlbGVtKSAhPT0gLTEpO1xuICAgIHJldHVybiBtYXRjaGVzQWxsO1xuICB9LFxuICBmaWx0ZXJCeVVybFBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzBdO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzFdO1xuXG4gICAgc3dpdGNoIChzZWFyY2hRdWVyeSkge1xuICAgICAgY2FzZSAnP3EnOlxuICAgICAgICBMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyA9IGRlY29kZVVSSShzZWFyY2hQYXJhbSk7XG4gICAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc2VhcmNoKExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0UXVlcmllcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz90eXBlJzpcbiAgICAgICAgJChgaW5wdXRbdHlwZT1jaGVja2JveF1bdmFsdWU9JHtzZWFyY2hQYXJhbX1dYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzLnB1c2goc2VhcmNoUGFyYW0pO1xuICAgICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG5cbiAgICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWVzKCkudHlwZSAhPT0gbnVsbCAmJiBpdGVtLnZhbHVlcygpLnR5cGUuaW5kZXhPZihzZWFyY2hQYXJhbSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9LFxuICBjbGVhckFsbEZpbHRlcnM6ICgpID0+IHtcbiAgICAkKCcuY2xlYXJfZmlsdGVycycpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcgPSAnJztcbiAgICAgIExpc3RGaWx0ZXIubG9jYXRpb24gPSAnJztcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcyA9IHsgc29mdHdhcmU6ICdhbGwnLCBoYXJkd2FyZTogJ2FsbCcgfTtcbiAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc2VhcmNoKCk7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LmZpbHRlcigpO1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zb3J0KCduYW1lJywgeyBvcmRlcjogJ2FzYycgfSk7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoICE9PSAnJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL29zaHdhL2xpc3QuaHRtbCc7XG4gICAgICB9XG5cbiAgICAgIExpc3RGaWx0ZXIuY2xlYXJGb3JtSW5wdXRzKCk7XG4gICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRzKCk7XG4gICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG4gICAgfSk7XG4gIH0sXG4gIGNsZWFyRm9ybUlucHV0czogKCkgPT4ge1xuICAgICQoJy5zZWFyY2hfX2lucHV0JykudmFsKCcnKTtcbiAgICAkKCcuZHJvcGRvd24nKS5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XG4gICAgJCgnLmNvdW50cnktZHJvcGRvd24nKS5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICB9LFxuICBkaXNwbGF5UmVzdWx0czogKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb3VudCA9ICQoJy5wcm9qZWN0JykubGVuZ3RoO1xuICAgICQoJy5yZXN1bHRzLWNvdW50JykuaHRtbChgPHA+RGlzcGxheWluZyAke3Byb2plY3RDb3VudH0gUHJvamVjdHM8L3A+YCk7XG4gIH0sXG4gIGRpc3BsYXlSZXN1bHRRdWVyaWVzOiAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlU2VhcmNoUGFyYW1zID0gW107XG5cbiAgICBpZiAoTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcgIT09ICcnKSB7XG4gICAgICBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgfVxuXG4gICAgJCgnaW5wdXRbbmFtZT1cInR5cGVcIl06Y2hlY2tlZCcpLm1hcCgodmFsLCBpdGVtKSA9PiBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChpdGVtLmlkKSk7XG5cbiAgICAkKCcuZHJvcGRvd24nKS5tYXAoKHZhbCwgaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgIT09ICdTZWxlY3Qgb25lJykge1xuICAgICAgICBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3RpdmVTZWFyY2hQYXJhbXM7XG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2VhcmNoUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5zaG93KCk7XG4gICAgICBpZiAoJCgnLnByb2plY3QnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLmh0bWwoYDxwPk5vIHJlc3VsdHMgZm9yOiAke2FjdGl2ZVNlYXJjaFBhcmFtcy5qb2luKCc7ICcpfTwvcD5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5odG1sKGA8cD5SZXN1bHRzOiAke2FjdGl2ZVNlYXJjaFBhcmFtcy5qb2luKCc7ICcpfTwvcD5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLmhpZGUoKTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgdGhpcy5maWx0ZXJCeVNlYXJjaCgpO1xuICAgIHRoaXMuZmlsdGVyQnlEcm9wZG93bnMoKTtcbiAgICB0aGlzLmZpbHRlckJ5TG9jYXRpb24oKTtcbiAgICB0aGlzLmZpbHRlckJ5Q2hlY2tib3hlcygpO1xuICAgIHRoaXMuZmlsdGVyQnlVcmxQYXJhbXMoKTtcbiAgICB0aGlzLmNsZWFyQWxsRmlsdGVycygpO1xuICAgIHRoaXMuY2xlYXJGb3JtSW5wdXRzKCk7XG4gICAgdGhpcy5kaXNwbGF5UmVzdWx0cygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2xpc3RfZmlsdGVyLmpzIiwiY29uc3QgQWRkSWNvbiA9IHtcbiAgY2l0YXRpb25Db250YWluZXI6ICQoJy5jaXRhdGlvbnMnKS5maW5kKCdhJyksXG4gIGFkZEljb246ICgpID0+IHtcbiAgICBBZGRJY29uLmNpdGF0aW9uQ29udGFpbmVyLmFwcGVuZCgnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBsYXVuY2hcIj5sYXVuY2g8L2k+Jyk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGRJY29uKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvYWRkX2ljb24uanMiLCJjb25zdCBTZWFyY2hTdWJtaXQgPSB7XG4gIGxpc3RVcmw6ICcvb3Nod2EvbGlzdC5odG1sJyxcbiAgc2VhcmNoU3RyaW5nOiB1bmRlZmluZWQsXG4gIHNlYXJjaExpc3RVcmw6IHVuZGVmaW5lZCxcbiAgc3VibWl0U2VhcmNoOiAoKSA9PiB7XG4gICAgU2VhcmNoU3VibWl0LnNlYXJjaFN0cmluZyA9ICQoJyNzZWFyY2hmaWVsZCcpO1xuXG4gICAgJCgnLmpzLXNlYXJjaC1zdWJtaXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IFNlYXJjaFN1Ym1pdC5zZWFyY2hTdHJpbmcudmFsKCk7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47XG4gICAgICBTZWFyY2hTdWJtaXQuc2VhcmNoTGlzdFVybCA9IGAke3VybH0ke1NlYXJjaFN1Ym1pdC5saXN0VXJsfT9xPSR7cXVlcnl9YDtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gU2VhcmNoU3VibWl0LnNlYXJjaExpc3RVcmw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2hTdWJtaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NlYXJjaF9zdWJtaXQuanMiLCJjb25zdCBUYWdGaWx0ZXIgPSB7XG4gIGxpc3RVcmw6ICcvb3Nod2EvbGlzdC5odG1sJyxcbiAgc2VhcmNoTGlzdFVybDogdW5kZWZpbmVkLFxuICBmaWx0ZXJCeVRhZzogKCkgPT4ge1xuICAgICQoJy5wcm9qZWN0X190eXBlJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZS10YWcnKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIFRhZ0ZpbHRlci5zZWFyY2hMaXN0VXJsID0gYCR7dXJsfSR7VGFnRmlsdGVyLmxpc3RVcmx9P3R5cGU9JHtxdWVyeX1gO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdhYm91dDpibGFuaycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBUYWdGaWx0ZXIuc2VhcmNoTGlzdFVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZmlsdGVyQnlDYXRlZ29yeTogKCkgPT4ge1xuICAgICQoJy5jb250YWluZXItb3ZlcmxheScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgVGFnRmlsdGVyLnNlYXJjaExpc3RVcmwgPSBgJHt1cmx9JHtUYWdGaWx0ZXIubGlzdFVybH0/dHlwZT0ke3F1ZXJ5fWA7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2Fib3V0OmJsYW5rJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFRhZ0ZpbHRlci5zZWFyY2hMaXN0VXJsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZmlsdGVyQnlUYWcoKTtcbiAgICB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWdGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJjb25zdCBTcGVjdHJ1bSA9IHtcbiAgc2NoZW1hdGljRGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgdGFyZ2V0Q2lyY2xlczogKCkgPT4ge1xuICAgIFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uID0gJCgnLnNjaGVtYXRpYy1kZXNjcmlwdGlvbicpO1xuXG4gICAgJCgnLmNpcmNsZScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgY2xpY2tlZENpcmNsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdjaXJjbGUtYXR0cicpO1xuXG4gICAgICBpZiAoJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBTcGVjdHJ1bS5zaG93RGF0YShjbGlja2VkQ2lyY2xlKTtcbiAgICB9KTtcbiAgfSxcbiAgc2hvd0RhdGE6IGNpcmNsZUF0dHIgPT4ge1xuICAgIFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uID0gW10uc2xpY2UuY2FsbChTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbik7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgncG9zaXRpb24tYXR0cicpID09PSBjaXJjbGVBdHRyKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFjdGl2YXRlRmlyc3RDaXJjbGU6ICgpID0+IHtcbiAgICBjb25zdCBmaXJzdENpcmNsZSA9ICQoJy5jaXJjbGUnKS5maXJzdCgpO1xuICAgIGZpcnN0Q2lyY2xlLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIFNwZWN0cnVtLnNob3dEYXRhKGZpcnN0Q2lyY2xlLmF0dHIoJ2NpcmNsZS1hdHRyJykpO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMudGFyZ2V0Q2lyY2xlcygpO1xuICAgIHRoaXMuYWN0aXZhdGVGaXJzdENpcmNsZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwZWN0cnVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyIsImNvbnN0IENvb2tpZXNQb3B1cCA9IHtcbiAgY29va2llczogcmVxdWlyZSgnYnJvd3Nlci1jb29raWVzJyksXG4gIHNsaWRlVXA6ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICQoJy5jb29raWVzLXBvcHVwJylcbiAgICAgICAgLmFuaW1hdGUoeyBib3R0b206ICcwJyB9LCA0MDApXG4gICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9LCA4MDApO1xuICB9LFxuICBzbGlkZURvd246ICgpID0+IHtcbiAgICAkKCcucG9wdXAtYnV0dG9uJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBjbGlja2VkVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdjb29raWUtdmFsdWUnKTtcbiAgICAgIGlmIChjbGlja2VkVmFsdWUgPT09ICdhZ3JlZScpIHtcbiAgICAgICAgQ29va2llc1BvcHVwLmNvb2tpZXMuc2V0KCd1c2VyX2Nvb2tpZV9hZ3JlZW1lbnQnLCAnYWdyZWUnLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFZhbHVlID09PSAnZGlzYWdyZWUnKSB7XG4gICAgICAgIENvb2tpZXNQb3B1cC5jb29raWVzLnNldCgndXNlcl9jb29raWVfYWdyZWVtZW50JywgJ2Rpc2FncmVlJywgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgICB9XG4gICAgICAkKCcuY29va2llcy1wb3B1cCcpLmFuaW1hdGUoeyBib3R0b206ICctMjIwcHgnIH0sICdzbG93Jyk7XG4gICAgfSk7XG4gIH0sXG4gIGhpZGVQb3B1cEJhc2VkT25Db29raWU6ICgpID0+IHtcbiAgICBpZiAoQ29va2llc1BvcHVwLmNvb2tpZXMuZ2V0KCd1c2VyX2Nvb2tpZV9hZ3JlZW1lbnQnKSkge1xuICAgICAgJCgnLmNvb2tpZXMtcG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc2xpZGVVcCgpO1xuICAgIHRoaXMuc2xpZGVEb3duKCk7XG4gICAgdGhpcy5oaWRlUG9wdXBCYXNlZE9uQ29va2llKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29va2llc1BvcHVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9jb29raWVzX3BvcHVwLmpzIiwiZXhwb3J0cy5kZWZhdWx0cyA9IHt9O1xyXG5cclxuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gIC8vIFJldHJpZXZlIG9wdGlvbnMgYW5kIGRlZmF1bHRzXHJcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIHZhciBkZWZhdWx0cyA9IGV4cG9ydHMuZGVmYXVsdHM7XHJcblxyXG4gIC8vIEFwcGx5IGRlZmF1bHQgdmFsdWUgZm9yIHVuc3BlY2lmaWVkIG9wdGlvbnNcclxuICB2YXIgZXhwaXJlcyAgPSBvcHRzLmV4cGlyZXMgIHx8IGRlZmF1bHRzLmV4cGlyZXM7XHJcbiAgdmFyIGRvbWFpbiAgID0gb3B0cy5kb21haW4gICB8fCBkZWZhdWx0cy5kb21haW47XHJcbiAgdmFyIHBhdGggICAgID0gb3B0cy5wYXRoICAgICAhPT0gdW5kZWZpbmVkID8gb3B0cy5wYXRoICAgICA6IChkZWZhdWx0cy5wYXRoICE9PSB1bmRlZmluZWQgPyBkZWZhdWx0cy5wYXRoIDogJy8nKTtcclxuICB2YXIgc2VjdXJlICAgPSBvcHRzLnNlY3VyZSAgICE9PSB1bmRlZmluZWQgPyBvcHRzLnNlY3VyZSAgIDogZGVmYXVsdHMuc2VjdXJlO1xyXG4gIHZhciBodHRwb25seSA9IG9wdHMuaHR0cG9ubHkgIT09IHVuZGVmaW5lZCA/IG9wdHMuaHR0cG9ubHkgOiBkZWZhdWx0cy5odHRwb25seTtcclxuICB2YXIgc2FtZXNpdGUgPSBvcHRzLnNhbWVzaXRlICE9PSB1bmRlZmluZWQgPyBvcHRzLnNhbWVzaXRlIDogZGVmYXVsdHMuc2FtZXNpdGU7XHJcblxyXG4gIC8vIERldGVybWluZSBjb29raWUgZXhwaXJhdGlvbiBkYXRlXHJcbiAgLy8gSWYgc3VjY2VzZnVsIHRoZSByZXN1bHQgd2lsbCBiZSBhIHZhbGlkIERhdGUsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGFuIGludmFsaWQgRGF0ZSBvciBmYWxzZShpc2gpXHJcbiAgdmFyIGV4cERhdGUgPSBleHBpcmVzID8gbmV3IERhdGUoXHJcbiAgICAgIC8vIGluIGNhc2UgZXhwaXJlcyBpcyBhbiBpbnRlZ2VyLCBpdCBzaG91bGQgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIGRheXMgdGlsbCB0aGUgY29va2llIGV4cGlyZXNcclxuICAgICAgdHlwZW9mIGV4cGlyZXMgPT09ICdudW1iZXInID8gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoZXhwaXJlcyAqIDg2NGU1KSA6XHJcbiAgICAgIC8vIGVsc2UgZXhwaXJlcyBzaG91bGQgYmUgZWl0aGVyIGEgRGF0ZSBvYmplY3Qgb3IgaW4gYSBmb3JtYXQgcmVjb2duaXplZCBieSBEYXRlLnBhcnNlKClcclxuICAgICAgZXhwaXJlc1xyXG4gICkgOiAwO1xyXG5cclxuICAvLyBTZXQgY29va2llXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZS5yZXBsYWNlKC9bXisjJCZeYHxdL2csIGVuY29kZVVSSUNvbXBvbmVudCkgICAgICAgICAgICAgICAgLy8gRW5jb2RlIGNvb2tpZSBuYW1lXHJcbiAgLnJlcGxhY2UoJygnLCAnJTI4JylcclxuICAucmVwbGFjZSgnKScsICclMjknKSArXHJcbiAgJz0nICsgdmFsdWUucmVwbGFjZSgvW14rIyQmLzo8LVxcW1xcXS19XS9nLCBlbmNvZGVVUklDb21wb25lbnQpICsgICAgICAgICAgICAgICAgICAvLyBFbmNvZGUgY29va2llIHZhbHVlIChSRkM2MjY1KVxyXG4gIChleHBEYXRlICYmIGV4cERhdGUuZ2V0VGltZSgpID49IDAgPyAnO2V4cGlyZXM9JyArIGV4cERhdGUudG9VVENTdHJpbmcoKSA6ICcnKSArIC8vIEFkZCBleHBpcmF0aW9uIGRhdGVcclxuICAoZG9tYWluICAgPyAnO2RvbWFpbj0nICsgZG9tYWluICAgICA6ICcnKSArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZG9tYWluXHJcbiAgKHBhdGggICAgID8gJztwYXRoPScgICArIHBhdGggICAgICAgOiAnJykgKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBhdGhcclxuICAoc2VjdXJlICAgPyAnO3NlY3VyZScgICAgICAgICAgICAgICA6ICcnKSArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VjdXJlIG9wdGlvblxyXG4gIChodHRwb25seSA/ICc7aHR0cG9ubHknICAgICAgICAgICAgIDogJycpICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBodHRwb25seSBvcHRpb25cclxuICAoc2FtZXNpdGUgPyAnO3NhbWVzaXRlPScgKyBzYW1lc2l0ZSA6ICcnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2FtZXNpdGUgb3B0aW9uXHJcbn07XHJcblxyXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gIFxyXG4gIC8vIEl0ZXJhdGUgYWxsIGNvb2tpZXNcclxuICB3aGlsZShjb29raWVzLmxlbmd0aCkge1xyXG4gICAgdmFyIGNvb2tpZSA9IGNvb2tpZXMucG9wKCk7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIHNlcGFyYXRvciBpbmRleCAoXCJuYW1lPXZhbHVlXCIpXHJcbiAgICB2YXIgc2VwYXJhdG9ySW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xyXG5cclxuICAgIC8vIElFPDExIGVtaXRzIHRoZSBlcXVhbCBzaWduIHdoZW4gdGhlIGNvb2tpZSB2YWx1ZSBpcyBlbXB0eVxyXG4gICAgc2VwYXJhdG9ySW5kZXggPSBzZXBhcmF0b3JJbmRleCA8IDAgPyBjb29raWUubGVuZ3RoIDogc2VwYXJhdG9ySW5kZXg7XHJcblxyXG4gICAgdmFyIGNvb2tpZV9uYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkucmVwbGFjZSgvXlxccysvLCAnJykpO1xyXG5cclxuICAgIC8vIFJldHVybiBjb29raWUgdmFsdWUgaWYgdGhlIG5hbWUgbWF0Y2hlc1xyXG4gICAgaWYgKGNvb2tpZV9uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIGBudWxsYCBhcyB0aGUgY29va2llIHdhcyBub3QgZm91bmRcclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydHMuZXJhc2UgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25zKSB7XHJcbiAgZXhwb3J0cy5zZXQobmFtZSwgJycsIHtcclxuICAgIGV4cGlyZXM6ICAtMSxcclxuICAgIGRvbWFpbjogICBvcHRpb25zICYmIG9wdGlvbnMuZG9tYWluLFxyXG4gICAgcGF0aDogICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5wYXRoLFxyXG4gICAgc2VjdXJlOiAgIDAsXHJcbiAgICBodHRwb25seTogMH1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0cy5hbGwgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgYWxsID0ge307XHJcbiAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBhbGwgY29va2llc1xyXG4gIHdoaWxlKGNvb2tpZXMubGVuZ3RoKSB7XHJcbiAgICB2YXIgY29va2llID0gY29va2llcy5wb3AoKTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgc2VwYXJhdG9yIGluZGV4IChcIm5hbWU9dmFsdWVcIilcclxuICAgIHZhciBzZXBhcmF0b3JJbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XHJcblxyXG4gICAgLy8gSUU8MTEgZW1pdHMgdGhlIGVxdWFsIHNpZ24gd2hlbiB0aGUgY29va2llIHZhbHVlIGlzIGVtcHR5XHJcbiAgICBzZXBhcmF0b3JJbmRleCA9IHNlcGFyYXRvckluZGV4IDwgMCA/IGNvb2tpZS5sZW5ndGggOiBzZXBhcmF0b3JJbmRleDtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGNvb2tpZSBuYW1lIGFuZCB2YWx1ZSB0byB0aGUgYGFsbGAgb2JqZWN0XHJcbiAgICB2YXIgY29va2llX25hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KS5yZXBsYWNlKC9eXFxzKy8sICcnKSk7XHJcbiAgICBhbGxbY29va2llX25hbWVdID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhbGw7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItY29va2llcy9zcmMvYnJvd3Nlci1jb29raWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
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
    $('.js-trigger-menu').on('click', function () {
      $('.js-target-menu').toggleClass('active-menu');
      $('.top-bar__button').toggleClass('active-menu-button');
      $('#overlay').toggleClass('js-active');
    });
  },
  closeMenu: function closeMenu() {
    $('.close-menu').on('click', function () {
      $('.js-target-menu').removeClass('active-menu');
      $('.top-bar__button').removeClass('active-menu-button');
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
  init: function init() {
    this.smoothScrolling();
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
  searchQueries: { documentation: 'all', software: 'all', hardware: 'all' },
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
      if (item.values().hardware !== null && item.values().documentation !== null && item.values().software !== null && item.values().type !== null && item.values().location !== null && item.values().hardware.indexOf(ListFilter.searchQueries.hardware) !== -1 && item.values().documentation.indexOf(ListFilter.searchQueries.documentation) !== -1 && item.values().software.indexOf(ListFilter.searchQueries.software) !== -1 && item.values().location.indexOf(ListFilter.location) !== -1 && ListFilter.matchesAllItems(item.values().type, ListFilter.typeCheckedValues)) {
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
  userCookieAgreement: undefined,
  cookies: __webpack_require__(19),
  slideUp: function slideUp() {
    setTimeout(function () {
      $('.cookies-popup').animate({ bottom: '0' }, 400).css('display', 'block');
    }, 800);
    console.log("at the top document.cookie", document.cookie);
    console.log("browser-cookies", CookiesPopup.cookies.all());
  },
  slideDown: function slideDown() {
    $('.popup-button').on('click', function (e) {
      var clickedValue = e.currentTarget.getAttribute('cookie-value');
      if (clickedValue === 'agree') {
        CookiesPopup.cookies.set('user_cookie_agreement', 'agree', { expires: 365 });
      } else if (clickedValue === 'disagree') {
        // window['ga-disable-UA-119081851-1'] = true;
        CookiesPopup.cookies.set('user_cookie_agreement', 'disagree', { expires: 365 });
        CookiesPopup.clearCookies();
      }
      $('.cookies-popup').animate({ bottom: '-100px' }, 'slow');
    });
  },
  clearCookies: function clearCookies() {
    var allCookies = CookiesPopup.cookies.all();
    for (var cookie in allCookies) {
      if (allCookies.hasOwnProperty(cookie) && cookie != 'user_cookie_agreement') {
        CookiesPopup.cookies.erase(cookie);
      }
    }
    console.log("all browser-cookies", allCookies);
    console.log("document.cookies", document.cookie);
  },
  hidePopupBasedOnCookie: function hidePopupBasedOnCookie() {
    // if (CookiesPopup.cookies.get('user_cookie_agreement')) {
    //   $('.cookies-popup').addClass('hidden');
    // }
  },
  clearCookiesOnLoad: function clearCookiesOnLoad() {
    if (CookiesPopup.cookies.get('user_cookie_agreement') === 'disagree') {
      CookiesPopup.clearCookies();
    }
  },
  init: function init() {
    this.slideUp();
    this.slideDown();
    this.clearCookiesOnLoad();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDJlY2NmNmIyZWY4NmI2MWFkNTciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2Nvb2tpZXNfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItY29va2llcy9zcmMvYnJvd3Nlci1jb29raWVzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJtYXJrZG93bkxpbmtzTmV3UGFnZSIsIkFjY29yZGlvbiIsImhhbmRsZUNsaWNrIiwiJCIsImNsaWNrIiwiYWN0aXZlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiT3ZlcmxheSIsIm9uQ2xpY2tPdmVybGF5IiwiTW9kYWwiLCJvcGVuTW9kYWwiLCJmaW5kIiwiY2xvc2VNb2RhbCIsIm9uIiwiY2xpY2tPdmVybGF5Q2xvc2VNb2RhbCIsIk5hdiIsIm9wZW5NZW51IiwidG9nZ2xlQ2xhc3MiLCJjbG9zZU1lbnUiLCJTY3JvbGwiLCJzbW9vdGhTY3JvbGxpbmciLCIkdGFyZyIsImhhc2giLCJob3N0MSIsImhvc3RuYW1lIiwiaG9zdDIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGgxIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicGF0aDIiLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJTZWFyY2giLCJmaXhlZFNlYXJjaFRyaWdnZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsIlNsaWRlciIsImdlbmVyYWxTbGlkZXIiLCJzbGljayIsImFycm93cyIsImRyYWdnYWJsZSIsInN3aXBlVG9TbGlkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJTdGlja3kiLCJjbG9zZVN0aWNreSIsIlV0aWxzIiwibWFwIiwiaWR4IiwibGluayIsInNldEF0dHJpYnV0ZSIsIkludGVybmFsTmF2IiwiaGFuZGxlSW50ZXJuYWxNZW51IiwiJGN1cnJlbnRUYXJnZXQiLCIkYWxsSXRlbXMiLCJvcmRlciIsImF0dHIiLCJoYW5kbGVOYXZDbGljayIsImdldFZpZXciLCJ0YXJnZXQiLCJwYWdlVGFyZ2V0IiwiJHZpZXdUYXJnZXQiLCJjbGlja1RhcmdldCIsIkNvbXBhY3RQYW5lbCIsInNsaWRlVGFyZ2V0IiwidW5kZWZpbmVkIiwic2xpZGVDb250YWluZXIiLCJzZXR1cFNsaWRlQW5pbWF0aW9uIiwicmlnaHQiLCJmYWRlT3V0IiwiaGFuZGxlU2xpZGVEaXNwbGF5IiwiZGF0YVRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldFNsaWRlQ29udGFpbmVyIiwiY3NzIiwiaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbiIsImhhbmRsZU92ZXJsYXlDbG9zZSIsIk1vYmlsZUZpbHRlcnMiLCJvcGVuRmlsdGVycyIsImh0bWwiLCJMaXN0RmlsdGVyIiwib3B0aW9ucyIsInZhbHVlTmFtZXMiLCJuYW1lIiwiZnV6enlTZWFyY2giLCJzZWFyY2hDbGFzcyIsImRpc3RhbmNlIiwidGhyZXNob2xkIiwibXVsdGlTZWFyY2giLCJwcm9qZWN0TGlzdCIsInNlYXJjaFN0cmluZyIsImFsbEZpbHRlcnMiLCJzZWFyY2hRdWVyaWVzIiwiZG9jdW1lbnRhdGlvbiIsInNvZnR3YXJlIiwiaGFyZHdhcmUiLCJ0eXBlQ2hlY2tlZFZhbHVlcyIsImNyZWF0ZUxpc3QiLCJMaXN0IiwiZG9jdW1lbnQiLCJocmVmIiwiaW5kZXhPZiIsInNvcnQiLCJmaWx0ZXJMaXN0Iiwic2VhcmNoIiwiZmlsdGVyIiwiaXRlbSIsInZhbHVlcyIsInR5cGUiLCJtYXRjaGVzQWxsSXRlbXMiLCJkaXNwbGF5UmVzdWx0cyIsImRpc3BsYXlSZXN1bHRRdWVyaWVzIiwiZmlsdGVyQnlTZWFyY2giLCJ2YWwiLCJmaWx0ZXJCeURyb3Bkb3ducyIsImVhY2giLCJzZWxlY3Rpb24iLCJmaWx0ZXJTZWxlY3Rpb24iLCJpZCIsInNlbGVjdGVkT3B0aW9uIiwiY2hpbGRyZW4iLCJmaWx0ZXJCeUxvY2F0aW9uIiwiZmlsdGVyQnlDaGVja2JveGVzIiwidmFsdWUiLCJnZXQiLCJhcnIxIiwiYXJyMiIsIm1hdGNoZXNBbGwiLCJsYXJnZXJBcnJheSIsInNtYWxsZXJBcnJheSIsImV2ZXJ5IiwiZWxlbSIsImZpbHRlckJ5VXJsUGFyYW1zIiwic2VhcmNoUXVlcnkiLCJzcGxpdCIsInNlYXJjaFBhcmFtIiwiZGVjb2RlVVJJIiwicHJvcCIsInB1c2giLCJjbGVhckFsbEZpbHRlcnMiLCJvcmlnaW4iLCJjbGVhckZvcm1JbnB1dHMiLCJwcm9qZWN0Q291bnQiLCJhY3RpdmVTZWFyY2hQYXJhbXMiLCJzaG93Iiwiam9pbiIsImhpZGUiLCJBZGRJY29uIiwiY2l0YXRpb25Db250YWluZXIiLCJhZGRJY29uIiwiYXBwZW5kIiwiU2VhcmNoU3VibWl0IiwibGlzdFVybCIsInNlYXJjaExpc3RVcmwiLCJzdWJtaXRTZWFyY2giLCJxdWVyeSIsInVybCIsIlRhZ0ZpbHRlciIsImZpbHRlckJ5VGFnIiwiZmlsdGVyQnlDYXRlZ29yeSIsInBhcmVudEVsZW1lbnQiLCJTcGVjdHJ1bSIsInNjaGVtYXRpY0Rlc2NyaXB0aW9uIiwidGFyZ2V0Q2lyY2xlcyIsImNsaWNrZWRDaXJjbGUiLCJzaWJsaW5ncyIsInNob3dEYXRhIiwiY2FsbCIsImZvckVhY2giLCJjaXJjbGVBdHRyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiYWN0aXZhdGVGaXJzdENpcmNsZSIsImZpcnN0Q2lyY2xlIiwiZmlyc3QiLCJDb29raWVzUG9wdXAiLCJ1c2VyQ29va2llQWdyZWVtZW50IiwiY29va2llcyIsInJlcXVpcmUiLCJzbGlkZVVwIiwic2V0VGltZW91dCIsImJvdHRvbSIsImNvbnNvbGUiLCJsb2ciLCJjb29raWUiLCJhbGwiLCJzbGlkZURvd24iLCJjbGlja2VkVmFsdWUiLCJzZXQiLCJleHBpcmVzIiwiY2xlYXJDb29raWVzIiwiYWxsQ29va2llcyIsImhhc093blByb3BlcnR5IiwiZXJhc2UiLCJoaWRlUG9wdXBCYXNlZE9uQ29va2llIiwiY2xlYXJDb29raWVzT25Mb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztB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LEM7Ozs7OztBQ25EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6QyxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCLDRCQUE0QjtBQUM1Qzs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyZWNjZjZiMmVmODZiNjFhZDU3IiwiLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCBTdGlja3kgZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEludGVybmFsTmF2IGZyb20gJy4vaW50ZXJuYWxfbmF2JztcbmltcG9ydCBDb21wYWN0UGFuZWwgZnJvbSAnLi9jb21wYWN0X3BhbmVsJztcbmltcG9ydCBNb2JpbGVGaWx0ZXJzIGZyb20gJy4vbW9iaWxlX2ZpbHRlcnMnO1xuaW1wb3J0IExpc3RGaWx0ZXIgZnJvbSAnLi9saXN0X2ZpbHRlcic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2FkZF9pY29uJztcbmltcG9ydCBTZWFyY2hTdWJtaXQgZnJvbSAnLi9zZWFyY2hfc3VibWl0JztcbmltcG9ydCBUYWdGaWx0ZXIgZnJvbSAnLi90YWdfZmlsdGVyJztcbmltcG9ydCBTcGVjdHJ1bSBmcm9tICcuL3NwZWN0cnVtJztcbmltcG9ydCBDb29raWVzUG9wdXAgZnJvbSAnLi9jb29raWVzX3BvcHVwJztcblxuLy8gRm9vdGVyLmluaXQoKTtcbkFjY29yZGlvbi5pbml0KCk7XG5Nb2RhbC5pbml0KCk7XG5OYXYuaW5pdCgpO1xuT3ZlcmxheS5pbml0KCk7XG5TY3JvbGwuaW5pdCgpO1xuU2VhcmNoLmluaXQoKTtcblNsaWRlci5pbml0KCk7XG5TdGlja3kuaW5pdCgpO1xuVXRpbHMubWFya2Rvd25MaW5rc05ld1BhZ2UoKTtcbkludGVybmFsTmF2LmluaXQoKTtcbkNvbXBhY3RQYW5lbC5pbml0KCk7XG5Nb2JpbGVGaWx0ZXJzLmluaXQoKTtcbkxpc3RGaWx0ZXIuaW5pdCgpO1xuQWRkSWNvbi5pbml0KCk7XG5TZWFyY2hTdWJtaXQuaW5pdCgpO1xuVGFnRmlsdGVyLmluaXQoKTtcblNwZWN0cnVtLmluaXQoKTtcbkNvb2tpZXNQb3B1cC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NjcmlwdHMuanMiLCJjb25zdCBBY2NvcmRpb24gPSB7XG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB7XG4gICAgJCgnLmpzLW9wZW4tYWNjb3JkaW9uJykuY2xpY2soZSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmUgPSAkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgYWN0aXZlID8gJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKSA6ICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVDbGljaygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY29yZGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwiY29uc3QgT3ZlcmxheSA9IHtcbiAgb25DbGlja092ZXJsYXkoKSB7XG4gICAgJCgnI292ZXJsYXknKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuanMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnLmpzLWFjdGl2ZS1tZW51JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1tZW51Jyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vbkNsaWNrT3ZlcmxheSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL292ZXJsYXkuanMiLCJjb25zdCBNb2RhbCA9IHtcbiAgb3Blbk1vZGFsOiAoKSA9PiB7XG4gICAgJCgnLmpzLW9wZW4tbW9kYWwnKS5jbGljayhlID0+IHtcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAuZmluZCgnLmpzLXRhcmdldC1tb2RhbCcpXG4gICAgICAgIC5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnanMtYm9keS1tb2RhbC1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xvc2VNb2RhbDogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmpzLWNsb3NlLW1vZGFsJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdqcy1ib2R5LW1vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBjbGlja092ZXJsYXlDbG9zZU1vZGFsOiAoKSA9PiB7XG4gICAgJCgnI292ZXJsYXknKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2pzLWJvZHktbW9kYWwtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLmNsaWNrT3ZlcmxheUNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbW9kYWwuanMiLCJjb25zdCBOYXYgPSB7XG4gIG9wZW5NZW51OiAoKSA9PiB7XG4gICAgJCgnLmpzLXRyaWdnZXItbWVudScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtbWVudScpO1xuICAgICAgJCgnLnRvcC1iYXJfX2J1dHRvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtbWVudS1idXR0b24nKTtcbiAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBjbG9zZU1lbnU6ICgpID0+IHtcbiAgICAkKCcuY2xvc2UtbWVudScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xuICAgICAgJCgnLnRvcC1iYXJfX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudS1idXR0b24nKTtcbiAgICAgICQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LW1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUnKTtcbiAgICAgICQoJy50b3AtYmFyX19idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUtYnV0dG9uJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9uYXYuanMiLCJjb25zdCBTY3JvbGwgPSB7XG4gIHNtb290aFNjcm9sbGluZygpIHtcbiAgICAvLyBTbW9vdGggU2Nyb2xsaW5nIEZ1bmN0aW9uXG4gICAgJCgnYVtocmVmKj1cXFxcI106bm90KFtocmVmPVxcXFwjXSknKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGxldCAkdGFyZyA9ICQoZS5jdXJyZW50VGFyZ2V0Lmhhc2gpO1xuICAgICAgY29uc3QgaG9zdDEgPSBlLmN1cnJlbnRUYXJnZXQuaG9zdG5hbWU7XG4gICAgICBjb25zdCBob3N0MiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgIGNvbnN0IHBhdGgxID0gZS5jdXJyZW50VGFyZ2V0LnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICBjb25zdCBwYXRoMiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgaWYgKCEkdGFyZy5sZW5ndGgpIHtcbiAgICAgICAgJHRhcmcgPSAkKGBbbmFtZT0ke2UuY3VycmVudFRhcmdldC5oYXNoLnNsaWNlKDEpfV1gKTtcbiAgICAgIH1cbiAgICAgIGlmICgkdGFyZy5sZW5ndGggJiYgKGhvc3QxID09PSBob3N0MiB8fCBwYXRoMSA9PT0gcGF0aDIpKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkdGFyZy5vZmZzZXQoKS50b3AgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsaW5nKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zY3JvbGwuanMiLCJjb25zdCBTZWFyY2ggPSB7XG4gIGZpeGVkU2VhcmNoVHJpZ2dlcigpIHtcbiAgICAvLyBTZWFyY2ggQ2xpY2sgQmVoYXZpb3JcbiAgICAkKCcuanMtdHJpZ2dlci1zZWFyY2gnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZml4ZWRTZWFyY2hUcmlnZ2VyKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zZWFyY2guanMiLCJjb25zdCBTbGlkZXIgPSB7XG4gIGdlbmVyYWxTbGlkZXIoKSB7XG4gICAgLy8gU2xpZGVyXG4gICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzd2lwZVRvU2xpZGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZ2VuZXJhbFNsaWRlcigpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwiY29uc3QgU3RpY2t5ID0ge1xuICBjbG9zZVN0aWNreSgpIHtcbiAgICAkKCcuanMtY2xvc2Utc3RpY2t5JykuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1zdGlja3knKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jbG9zZVN0aWNreSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0aWNreTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwiY29uc3QgVXRpbHMgPSB7XG4gIG1hcmtkb3duTGlua3NOZXdQYWdlOiAoKSA9PiB7XG4gICAgJCgnLm1hcmtkb3duIGEnKS5tYXAoKGlkeCwgbGluaykgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3V0aWxzLmpzIiwiY29uc3QgSW50ZXJuYWxOYXYgPSB7XG4gIGhhbmRsZUludGVybmFsTWVudSgpIHtcbiAgICAkKCcuaW50ZXJuYWwtbWVudV9faXRlbScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICBjb25zdCAkYWxsSXRlbXMgPSAkKCcuaW50ZXJuYWwtbWVudV9faXRlbScpO1xuICAgICAgJGFsbEl0ZW1zLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUtaXRlbScpO1xuICAgICAgJGN1cnJlbnRUYXJnZXQuYWRkQ2xhc3MoJ2pzLWFjdGl2ZS1pdGVtJyk7XG4gICAgICBjb25zdCBvcmRlciA9ICRjdXJyZW50VGFyZ2V0LmF0dHIoJ2RhdGEtb3JkZXInKTtcbiAgICAgIEludGVybmFsTmF2LmhhbmRsZU5hdkNsaWNrKG9yZGVyKTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Vmlldyh0YXJnZXQpIHtcbiAgICBjb25zdCBwYWdlVGFyZ2V0ID0gdGFyZ2V0IHx8ICcxJztcbiAgICBjb25zdCAkdmlld1RhcmdldCA9ICQoYFtkYXRhLW5hdi1vcmRlcj0nJHtwYWdlVGFyZ2V0fSddYCk7XG4gICAgJHZpZXdUYXJnZXQuYWRkQ2xhc3MoJ2pzLWFjdGl2ZS1zZWN0aW9uJyk7XG4gIH0sXG4gIGhhbmRsZU5hdkNsaWNrKGNsaWNrVGFyZ2V0KSB7XG4gICAgJCgnLmpzLWFjdGl2ZS1zZWN0aW9uJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1zZWN0aW9uJyk7XG4gICAgSW50ZXJuYWxOYXYuZ2V0VmlldyhjbGlja1RhcmdldCk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnRlcm5hbE1lbnUoKTtcbiAgICB0aGlzLmdldFZpZXcoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcm5hbE5hdjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvaW50ZXJuYWxfbmF2LmpzIiwiY29uc3QgQ29tcGFjdFBhbmVsID0ge1xuICBzbGlkZVRhcmdldDogdW5kZWZpbmVkLFxuICBzbGlkZUNvbnRhaW5lcjogdW5kZWZpbmVkLFxuICBzZXR1cFNsaWRlQW5pbWF0aW9uOiAoKSA9PiB7XG4gICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0ID0gJCgnLnNsaWRlLXBhbmVsX19jb250YWluZXInKTtcbiAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIgPSAkKCcuc2xpZGUtcGFuZWwnKTtcblxuICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgIENvbXBhY3RQYW5lbC5zbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9LFxuICBoYW5kbGVTbGlkZURpc3BsYXk6ICgpID0+IHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zbGlkZS1wYW5lbF9fb3Blbi10cmlnZ2VyJywgZSA9PiB7XG4gICAgICBjb25zdCBkYXRhVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXJtJyk7XG4gICAgICBjb25zdCB0YXJnZXRTbGlkZUNvbnRhaW5lciA9ICQoYFtkYXRhLXZhbHVlPVwiJHtkYXRhVGFyZ2V0fVwiXWApO1xuICAgICAgaWYgKHRhcmdldFNsaWRlQ29udGFpbmVyLmhhc0NsYXNzKCdpcy12aXNpYmxlJykpIHtcbiAgICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCA0MDApLmZhZGVPdXQoNSk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnMCUnIH0sIDQwMCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVTbGlkZUNsb3NlQnV0dG9uOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGUtcGFuZWxfX2Nsb3NlLXRyaWdnZXInLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlT3ZlcmxheUNsb3NlOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjb3ZlcmxheScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCAnc2xvdycpLmZhZGVPdXQoNSk7XG4gICAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9KVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBTbGlkZUFuaW1hdGlvbigpO1xuICAgIHRoaXMuaGFuZGxlU2xpZGVEaXNwbGF5KCk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZUNsb3NlQnV0dG9uKCk7XG4gICAgdGhpcy5oYW5kbGVPdmVybGF5Q2xvc2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYWN0UGFuZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2NvbXBhY3RfcGFuZWwuanMiLCJjb25zdCBNb2JpbGVGaWx0ZXJzID0ge1xuICBvcGVuRmlsdGVyczogKCkgPT4ge1xuICAgICQoJy50b2dnbGUtZmlsdGVycycpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5maWx0ZXItY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cbiAgICAgIGlmICgkKCcudG9nZ2xlLWZpbHRlcnMnKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuICAgICAgICAkKCcudG9nZ2xlLWZpbHRlcnMnKS5odG1sKCdjbG9zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykuaHRtbCgndHVuZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub3BlbkZpbHRlcnMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2JpbGVGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9tb2JpbGVfZmlsdGVycy5qcyIsImNvbnN0IExpc3RGaWx0ZXIgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YWx1ZU5hbWVzOiBbXG4gICAgICAnbmFtZScsXG4gICAgICAndWlkJyxcbiAgICAgICd2ZXJzaW9uJyxcbiAgICAgICdrZXl3b3JkcycsXG4gICAgICAncmVzcG9uc2libGUtcGFydHknLFxuICAgICAgeyBuYW1lOiAnZGF0ZScsIGF0dHI6ICdkYXRlJyB9LFxuICAgICAgeyBuYW1lOiAndHlwZScsIGF0dHI6ICd0eXBlJyB9LFxuICAgICAgeyBuYW1lOiAnaGFyZHdhcmUnLCBhdHRyOiAnaGFyZHdhcmUnIH0sXG4gICAgICB7IG5hbWU6ICdkb2N1bWVudGF0aW9uJywgYXR0cjogJ2RvY3VtZW50YXRpb24nIH0sXG4gICAgICB7IG5hbWU6ICdzb2Z0d2FyZScsIGF0dHI6ICdzb2Z0d2FyZScgfSxcbiAgICAgIHsgbmFtZTogJ2xvY2F0aW9uJywgYXR0cjogJ2xvY2F0aW9uJyB9XG4gICAgXSxcbiAgICBmdXp6eVNlYXJjaDoge1xuICAgICAgc2VhcmNoQ2xhc3M6ICdmdXp6eS1zZWFyY2gnLFxuICAgICAgbG9jYXRpb246IDAsXG4gICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgdGhyZXNob2xkOiAwLjIsXG4gICAgICBtdWx0aVNlYXJjaDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgcHJvamVjdExpc3Q6IHVuZGVmaW5lZCxcbiAgc2VhcmNoU3RyaW5nOiAnJyxcbiAgYWxsRmlsdGVyczogdW5kZWZpbmVkLFxuICBzZWFyY2hRdWVyaWVzOiB7IGRvY3VtZW50YXRpb246ICdhbGwnLCBzb2Z0d2FyZTogJ2FsbCcsIGhhcmR3YXJlOiAnYWxsJyB9LFxuICB0eXBlQ2hlY2tlZFZhbHVlczogW10sXG4gIGxvY2F0aW9uOiAnYWxsJyxcbiAgY3JlYXRlTGlzdDogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QgPSBuZXcgTGlzdCgncHJvamVjdF9kYXRhJywgTGlzdEZpbHRlci5vcHRpb25zKTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2xpc3QnKSA+IC0xKSB7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNvcnQoJ25hbWUnLCB7IG9yZGVyOiAnYXNjJyB9KTtcbiAgICB9XG4gIH0sXG4gIGZpbHRlckxpc3Q6ICgpID0+IHtcbiAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuaGFyZHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5kb2N1bWVudGF0aW9uICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuc29mdHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS50eXBlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24gIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5oYXJkd2FyZS5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5oYXJkd2FyZSkgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuZG9jdW1lbnRhdGlvbi5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5kb2N1bWVudGF0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5zb2Z0d2FyZS5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5zb2Z0d2FyZSkgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24uaW5kZXhPZihMaXN0RmlsdGVyLmxvY2F0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgTGlzdEZpbHRlci5tYXRjaGVzQWxsSXRlbXMoaXRlbS52YWx1ZXMoKS50eXBlLCBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0cygpO1xuICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgfSxcbiAgZmlsdGVyQnlTZWFyY2g6ICgpID0+IHtcbiAgICAkKCcjc2VhcmNoZmllbGQnKS5vbigna2V5dXAnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nID0gJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5RHJvcGRvd25zOiAoKSA9PiB7XG4gICAgTGlzdEZpbHRlci5hbGxGaWx0ZXJzID0gJCgnLmRyb3Bkb3duJyk7XG5cbiAgICBMaXN0RmlsdGVyLmFsbEZpbHRlcnMub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgTGlzdEZpbHRlci5hbGxGaWx0ZXJzLmVhY2goc2VsZWN0aW9uID0+IHtcbiAgICAgICAgJChzZWxlY3Rpb24pLmVhY2goKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlclNlbGVjdGlvbiA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jaGlsZHJlbignOnNlbGVjdGVkJykuYXR0cignaWQnKTtcblxuICAgICAgICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllc1tmaWx0ZXJTZWxlY3Rpb25dID0gc2VsZWN0ZWRPcHRpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoKTtcbiAgICB9KTtcbiAgfSxcbiAgZmlsdGVyQnlMb2NhdGlvbjogKCkgPT4ge1xuICAgICQoJy5jb3VudHJ5LWRyb3Bkb3duJykub24oJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgTGlzdEZpbHRlci5sb2NhdGlvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jaGlsZHJlbignOnNlbGVjdGVkJykuYXR0cignaWQnKTtcbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdCgpO1xuICAgIH0pXG4gIH0sXG4gIGZpbHRlckJ5Q2hlY2tib3hlczogKCkgPT4ge1xuICAgICQoJy5maWx0ZXItY29udGFpbmVyJykub24oJ2NoYW5nZScsICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyksICgpID0+IHtcbiAgICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9KS5nZXQoKTtcblxuICAgICAgaWYgKExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMgPSBbJ2FsbCddO1xuICAgICAgfVxuXG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoKTtcbiAgICB9KTtcbiAgfSxcbiAgbWF0Y2hlc0FsbEl0ZW1zOiAoYXJyMSwgYXJyMikgPT4ge1xuICAgIGxldCBtYXRjaGVzQWxsO1xuICAgIGxldCBsYXJnZXJBcnJheTtcbiAgICBsZXQgc21hbGxlckFycmF5O1xuICAgIGlmIChhcnIxLmxlbmd0aCA+IGFycjIubGVuZ3RoKSB7XG4gICAgICBsYXJnZXJBcnJheSA9IGFycjE7XG4gICAgICBzbWFsbGVyQXJyYXkgPSBhcnIyO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXJnZXJBcnJheSA9IGFycjI7XG4gICAgICBzbWFsbGVyQXJyYXkgPSBhcnIxO1xuICAgIH1cbiAgICBtYXRjaGVzQWxsID0gc21hbGxlckFycmF5LmV2ZXJ5KGVsZW0gPT4gbGFyZ2VyQXJyYXkuaW5kZXhPZihlbGVtKSAhPT0gLTEpO1xuICAgIHJldHVybiBtYXRjaGVzQWxsO1xuICB9LFxuICBmaWx0ZXJCeVVybFBhcmFtczogKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzBdO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzFdO1xuXG4gICAgc3dpdGNoIChzZWFyY2hRdWVyeSkge1xuICAgICAgY2FzZSAnP3EnOlxuICAgICAgICBMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyA9IGRlY29kZVVSSShzZWFyY2hQYXJhbSk7XG4gICAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc2VhcmNoKExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0UXVlcmllcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz90eXBlJzpcbiAgICAgICAgJChgaW5wdXRbdHlwZT1jaGVja2JveF1bdmFsdWU9JHtzZWFyY2hQYXJhbX1dYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzLnB1c2goc2VhcmNoUGFyYW0pO1xuICAgICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG5cbiAgICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWVzKCkudHlwZSAhPT0gbnVsbCAmJiBpdGVtLnZhbHVlcygpLnR5cGUuaW5kZXhPZihzZWFyY2hQYXJhbSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9LFxuICBjbGVhckFsbEZpbHRlcnM6ICgpID0+IHtcbiAgICAkKCcuY2xlYXJfZmlsdGVycycpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcgPSAnJztcbiAgICAgIExpc3RGaWx0ZXIubG9jYXRpb24gPSAnJztcbiAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc2VhcmNoKCk7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LmZpbHRlcigpO1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zb3J0KCduYW1lJywgeyBvcmRlcjogJ2FzYycgfSk7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoICE9PSAnJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL29zaHdhL2xpc3QuaHRtbCc7XG4gICAgICB9XG5cbiAgICAgIExpc3RGaWx0ZXIuY2xlYXJGb3JtSW5wdXRzKCk7XG4gICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRzKCk7XG4gICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG4gICAgfSk7XG4gIH0sXG4gIGNsZWFyRm9ybUlucHV0czogKCkgPT4ge1xuICAgICQoJy5zZWFyY2hfX2lucHV0JykudmFsKCcnKTtcbiAgICAkKCcuZHJvcGRvd24nKS5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XG4gICAgJCgnLmNvdW50cnktZHJvcGRvd24nKS5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICB9LFxuICBkaXNwbGF5UmVzdWx0czogKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb3VudCA9ICQoJy5wcm9qZWN0JykubGVuZ3RoO1xuICAgICQoJy5yZXN1bHRzLWNvdW50JykuaHRtbChgPHA+RGlzcGxheWluZyAke3Byb2plY3RDb3VudH0gUHJvamVjdHM8L3A+YCk7XG4gIH0sXG4gIGRpc3BsYXlSZXN1bHRRdWVyaWVzOiAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlU2VhcmNoUGFyYW1zID0gW107XG5cbiAgICBpZiAoTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcgIT09ICcnKSB7XG4gICAgICBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgfVxuXG4gICAgJCgnaW5wdXRbbmFtZT1cInR5cGVcIl06Y2hlY2tlZCcpLm1hcCgodmFsLCBpdGVtKSA9PiBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChpdGVtLmlkKSk7XG5cbiAgICAkKCcuZHJvcGRvd24nKS5tYXAoKHZhbCwgaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgIT09ICdTZWxlY3Qgb25lJykge1xuICAgICAgICBhY3RpdmVTZWFyY2hQYXJhbXMucHVzaChpdGVtLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3RpdmVTZWFyY2hQYXJhbXM7XG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlU2VhcmNoUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5zaG93KCk7XG4gICAgICBpZiAoJCgnLnByb2plY3QnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLmh0bWwoYDxwPk5vIHJlc3VsdHMgZm9yOiAke2FjdGl2ZVNlYXJjaFBhcmFtcy5qb2luKCc7ICcpfTwvcD5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5odG1sKGA8cD5SZXN1bHRzOiAke2FjdGl2ZVNlYXJjaFBhcmFtcy5qb2luKCc7ICcpfTwvcD5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLmhpZGUoKTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVMaXN0KCk7XG4gICAgdGhpcy5maWx0ZXJCeVNlYXJjaCgpO1xuICAgIHRoaXMuZmlsdGVyQnlEcm9wZG93bnMoKTtcbiAgICB0aGlzLmZpbHRlckJ5TG9jYXRpb24oKTtcbiAgICB0aGlzLmZpbHRlckJ5Q2hlY2tib3hlcygpO1xuICAgIHRoaXMuZmlsdGVyQnlVcmxQYXJhbXMoKTtcbiAgICB0aGlzLmNsZWFyQWxsRmlsdGVycygpO1xuICAgIHRoaXMuY2xlYXJGb3JtSW5wdXRzKCk7XG4gICAgdGhpcy5kaXNwbGF5UmVzdWx0cygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2xpc3RfZmlsdGVyLmpzIiwiY29uc3QgQWRkSWNvbiA9IHtcbiAgY2l0YXRpb25Db250YWluZXI6ICQoJy5jaXRhdGlvbnMnKS5maW5kKCdhJyksXG4gIGFkZEljb246ICgpID0+IHtcbiAgICBBZGRJY29uLmNpdGF0aW9uQ29udGFpbmVyLmFwcGVuZCgnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBsYXVuY2hcIj5sYXVuY2g8L2k+Jyk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGRJY29uKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvYWRkX2ljb24uanMiLCJjb25zdCBTZWFyY2hTdWJtaXQgPSB7XG4gIGxpc3RVcmw6ICcvb3Nod2EvbGlzdC5odG1sJyxcbiAgc2VhcmNoU3RyaW5nOiB1bmRlZmluZWQsXG4gIHNlYXJjaExpc3RVcmw6IHVuZGVmaW5lZCxcbiAgc3VibWl0U2VhcmNoOiAoKSA9PiB7XG4gICAgU2VhcmNoU3VibWl0LnNlYXJjaFN0cmluZyA9ICQoJyNzZWFyY2hmaWVsZCcpO1xuXG4gICAgJCgnLmpzLXNlYXJjaC1zdWJtaXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IFNlYXJjaFN1Ym1pdC5zZWFyY2hTdHJpbmcudmFsKCk7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47XG4gICAgICBTZWFyY2hTdWJtaXQuc2VhcmNoTGlzdFVybCA9IGAke3VybH0ke1NlYXJjaFN1Ym1pdC5saXN0VXJsfT9xPSR7cXVlcnl9YDtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gU2VhcmNoU3VibWl0LnNlYXJjaExpc3RVcmw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdWJtaXRTZWFyY2goKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2hTdWJtaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NlYXJjaF9zdWJtaXQuanMiLCJjb25zdCBUYWdGaWx0ZXIgPSB7XG4gIGxpc3RVcmw6ICcvb3Nod2EvbGlzdC5odG1sJyxcbiAgc2VhcmNoTGlzdFVybDogdW5kZWZpbmVkLFxuICBmaWx0ZXJCeVRhZzogKCkgPT4ge1xuICAgICQoJy5wcm9qZWN0X190eXBlJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZS10YWcnKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIFRhZ0ZpbHRlci5zZWFyY2hMaXN0VXJsID0gYCR7dXJsfSR7VGFnRmlsdGVyLmxpc3RVcmx9P3R5cGU9JHtxdWVyeX1gO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdhYm91dDpibGFuaycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBUYWdGaWx0ZXIuc2VhcmNoTGlzdFVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZmlsdGVyQnlDYXRlZ29yeTogKCkgPT4ge1xuICAgICQoJy5jb250YWluZXItb3ZlcmxheScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgVGFnRmlsdGVyLnNlYXJjaExpc3RVcmwgPSBgJHt1cmx9JHtUYWdGaWx0ZXIubGlzdFVybH0/dHlwZT0ke3F1ZXJ5fWA7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2Fib3V0OmJsYW5rJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFRhZ0ZpbHRlci5zZWFyY2hMaXN0VXJsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuZmlsdGVyQnlUYWcoKTtcbiAgICB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUYWdGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJjb25zdCBTcGVjdHJ1bSA9IHtcbiAgc2NoZW1hdGljRGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgdGFyZ2V0Q2lyY2xlczogKCkgPT4ge1xuICAgIFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uID0gJCgnLnNjaGVtYXRpYy1kZXNjcmlwdGlvbicpO1xuXG4gICAgJCgnLmNpcmNsZScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgY2xpY2tlZENpcmNsZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdjaXJjbGUtYXR0cicpO1xuXG4gICAgICBpZiAoJChlLmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBTcGVjdHJ1bS5zaG93RGF0YShjbGlja2VkQ2lyY2xlKTtcbiAgICB9KTtcbiAgfSxcbiAgc2hvd0RhdGE6IGNpcmNsZUF0dHIgPT4ge1xuICAgIFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uID0gW10uc2xpY2UuY2FsbChTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbik7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgncG9zaXRpb24tYXR0cicpID09PSBjaXJjbGVBdHRyKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFjdGl2YXRlRmlyc3RDaXJjbGU6ICgpID0+IHtcbiAgICBjb25zdCBmaXJzdENpcmNsZSA9ICQoJy5jaXJjbGUnKS5maXJzdCgpO1xuICAgIGZpcnN0Q2lyY2xlLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIFNwZWN0cnVtLnNob3dEYXRhKGZpcnN0Q2lyY2xlLmF0dHIoJ2NpcmNsZS1hdHRyJykpO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMudGFyZ2V0Q2lyY2xlcygpO1xuICAgIHRoaXMuYWN0aXZhdGVGaXJzdENpcmNsZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwZWN0cnVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyIsImNvbnN0IENvb2tpZXNQb3B1cCA9IHtcbiAgdXNlckNvb2tpZUFncmVlbWVudDogdW5kZWZpbmVkLFxuICBjb29raWVzOiByZXF1aXJlKCdicm93c2VyLWNvb2tpZXMnKSxcbiAgc2xpZGVVcDogKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnLmNvb2tpZXMtcG9wdXAnKS5hbmltYXRlKHsgYm90dG9tOiAnMCcgfSwgNDAwKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9LCA4MDApO1xuICAgIGNvbnNvbGUubG9nKFwiYXQgdGhlIHRvcCBkb2N1bWVudC5jb29raWVcIiwgZG9jdW1lbnQuY29va2llKVxuICAgIGNvbnNvbGUubG9nKFwiYnJvd3Nlci1jb29raWVzXCIsIENvb2tpZXNQb3B1cC5jb29raWVzLmFsbCgpKVxuICB9LFxuICBzbGlkZURvd246ICgpID0+IHtcbiAgICAkKCcucG9wdXAtYnV0dG9uJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBjbGlja2VkVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdjb29raWUtdmFsdWUnKVxuICAgICAgaWYgKCBjbGlja2VkVmFsdWUgPT09ICdhZ3JlZScpIHtcbiAgICAgICAgQ29va2llc1BvcHVwLmNvb2tpZXMuc2V0KCd1c2VyX2Nvb2tpZV9hZ3JlZW1lbnQnLCAnYWdyZWUnLCB7ZXhwaXJlczogMzY1fSk7XG4gICAgICB9IGVsc2UgaWYgKGNsaWNrZWRWYWx1ZSA9PT0gJ2Rpc2FncmVlJykge1xuICAgICAgICAvLyB3aW5kb3dbJ2dhLWRpc2FibGUtVUEtMTE5MDgxODUxLTEnXSA9IHRydWU7XG4gICAgICAgIENvb2tpZXNQb3B1cC5jb29raWVzLnNldCgndXNlcl9jb29raWVfYWdyZWVtZW50JywgJ2Rpc2FncmVlJywge2V4cGlyZXM6IDM2NX0pO1xuICAgICAgICBDb29raWVzUG9wdXAuY2xlYXJDb29raWVzKCk7XG4gICAgICB9XG4gICAgICAkKCcuY29va2llcy1wb3B1cCcpLmFuaW1hdGUoeyBib3R0b206ICctMTAwcHgnIH0sICdzbG93Jyk7XG4gICAgfSlcbiAgfSxcbiAgY2xlYXJDb29raWVzOiAoKSA9PiB7XG4gICAgY29uc3QgYWxsQ29va2llcyA9IENvb2tpZXNQb3B1cC5jb29raWVzLmFsbCgpO1xuICAgIGZvciAobGV0IGNvb2tpZSBpbiBhbGxDb29raWVzKSB7XG4gICAgICBpZiAoYWxsQ29va2llcy5oYXNPd25Qcm9wZXJ0eShjb29raWUpICYmIGNvb2tpZSAhPSAndXNlcl9jb29raWVfYWdyZWVtZW50Jykge1xuICAgICAgICBDb29raWVzUG9wdXAuY29va2llcy5lcmFzZShjb29raWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImFsbCBicm93c2VyLWNvb2tpZXNcIiwgYWxsQ29va2llcylcbiAgICBjb25zb2xlLmxvZyhcImRvY3VtZW50LmNvb2tpZXNcIiwgZG9jdW1lbnQuY29va2llKTtcbiAgfSxcbiAgaGlkZVBvcHVwQmFzZWRPbkNvb2tpZTogKCkgPT4ge1xuICAgIC8vIGlmIChDb29raWVzUG9wdXAuY29va2llcy5nZXQoJ3VzZXJfY29va2llX2FncmVlbWVudCcpKSB7XG4gICAgLy8gICAkKCcuY29va2llcy1wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAvLyB9XG4gIH0sXG4gIGNsZWFyQ29va2llc09uTG9hZDogKCkgPT4ge1xuICAgIGlmIChDb29raWVzUG9wdXAuY29va2llcy5nZXQoJ3VzZXJfY29va2llX2FncmVlbWVudCcpID09PSAnZGlzYWdyZWUnKSB7XG4gICAgICBDb29raWVzUG9wdXAuY2xlYXJDb29raWVzKCk7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc2xpZGVVcCgpO1xuICAgIHRoaXMuc2xpZGVEb3duKCk7XG4gICAgdGhpcy5jbGVhckNvb2tpZXNPbkxvYWQoKTtcbiAgICB0aGlzLmhpZGVQb3B1cEJhc2VkT25Db29raWUoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVzUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2Nvb2tpZXNfcG9wdXAuanMiLCJleHBvcnRzLmRlZmF1bHRzID0ge307XHJcblxyXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgLy8gUmV0cmlldmUgb3B0aW9ucyBhbmQgZGVmYXVsdHNcclxuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XHJcbiAgdmFyIGRlZmF1bHRzID0gZXhwb3J0cy5kZWZhdWx0cztcclxuXHJcbiAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBmb3IgdW5zcGVjaWZpZWQgb3B0aW9uc1xyXG4gIHZhciBleHBpcmVzICA9IG9wdHMuZXhwaXJlcyAgfHwgZGVmYXVsdHMuZXhwaXJlcztcclxuICB2YXIgZG9tYWluICAgPSBvcHRzLmRvbWFpbiAgIHx8IGRlZmF1bHRzLmRvbWFpbjtcclxuICB2YXIgcGF0aCAgICAgPSBvcHRzLnBhdGggICAgICE9PSB1bmRlZmluZWQgPyBvcHRzLnBhdGggICAgIDogKGRlZmF1bHRzLnBhdGggIT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzLnBhdGggOiAnLycpO1xyXG4gIHZhciBzZWN1cmUgICA9IG9wdHMuc2VjdXJlICAgIT09IHVuZGVmaW5lZCA/IG9wdHMuc2VjdXJlICAgOiBkZWZhdWx0cy5zZWN1cmU7XHJcbiAgdmFyIGh0dHBvbmx5ID0gb3B0cy5odHRwb25seSAhPT0gdW5kZWZpbmVkID8gb3B0cy5odHRwb25seSA6IGRlZmF1bHRzLmh0dHBvbmx5O1xyXG4gIHZhciBzYW1lc2l0ZSA9IG9wdHMuc2FtZXNpdGUgIT09IHVuZGVmaW5lZCA/IG9wdHMuc2FtZXNpdGUgOiBkZWZhdWx0cy5zYW1lc2l0ZTtcclxuXHJcbiAgLy8gRGV0ZXJtaW5lIGNvb2tpZSBleHBpcmF0aW9uIGRhdGVcclxuICAvLyBJZiBzdWNjZXNmdWwgdGhlIHJlc3VsdCB3aWxsIGJlIGEgdmFsaWQgRGF0ZSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYW4gaW52YWxpZCBEYXRlIG9yIGZhbHNlKGlzaClcclxuICB2YXIgZXhwRGF0ZSA9IGV4cGlyZXMgPyBuZXcgRGF0ZShcclxuICAgICAgLy8gaW4gY2FzZSBleHBpcmVzIGlzIGFuIGludGVnZXIsIGl0IHNob3VsZCBzcGVjaWZ5IHRoZSBudW1iZXIgb2YgZGF5cyB0aWxsIHRoZSBjb29raWUgZXhwaXJlc1xyXG4gICAgICB0eXBlb2YgZXhwaXJlcyA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChleHBpcmVzICogODY0ZTUpIDpcclxuICAgICAgLy8gZWxzZSBleHBpcmVzIHNob3VsZCBiZSBlaXRoZXIgYSBEYXRlIG9iamVjdCBvciBpbiBhIGZvcm1hdCByZWNvZ25pemVkIGJ5IERhdGUucGFyc2UoKVxyXG4gICAgICBleHBpcmVzXHJcbiAgKSA6IDA7XHJcblxyXG4gIC8vIFNldCBjb29raWVcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lLnJlcGxhY2UoL1teKyMkJl5gfF0vZywgZW5jb2RlVVJJQ29tcG9uZW50KSAgICAgICAgICAgICAgICAvLyBFbmNvZGUgY29va2llIG5hbWVcclxuICAucmVwbGFjZSgnKCcsICclMjgnKVxyXG4gIC5yZXBsYWNlKCcpJywgJyUyOScpICtcclxuICAnPScgKyB2YWx1ZS5yZXBsYWNlKC9bXisjJCYvOjwtXFxbXFxdLX1dL2csIGVuY29kZVVSSUNvbXBvbmVudCkgKyAgICAgICAgICAgICAgICAgIC8vIEVuY29kZSBjb29raWUgdmFsdWUgKFJGQzYyNjUpXHJcbiAgKGV4cERhdGUgJiYgZXhwRGF0ZS5nZXRUaW1lKCkgPj0gMCA/ICc7ZXhwaXJlcz0nICsgZXhwRGF0ZS50b1VUQ1N0cmluZygpIDogJycpICsgLy8gQWRkIGV4cGlyYXRpb24gZGF0ZVxyXG4gIChkb21haW4gICA/ICc7ZG9tYWluPScgKyBkb21haW4gICAgIDogJycpICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkb21haW5cclxuICAocGF0aCAgICAgPyAnO3BhdGg9JyAgICsgcGF0aCAgICAgICA6ICcnKSArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgcGF0aFxyXG4gIChzZWN1cmUgICA/ICc7c2VjdXJlJyAgICAgICAgICAgICAgIDogJycpICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZWN1cmUgb3B0aW9uXHJcbiAgKGh0dHBvbmx5ID8gJztodHRwb25seScgICAgICAgICAgICAgOiAnJykgKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGh0dHBvbmx5IG9wdGlvblxyXG4gIChzYW1lc2l0ZSA/ICc7c2FtZXNpdGU9JyArIHNhbWVzaXRlIDogJycpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzYW1lc2l0ZSBvcHRpb25cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgXHJcbiAgLy8gSXRlcmF0ZSBhbGwgY29va2llc1xyXG4gIHdoaWxlKGNvb2tpZXMubGVuZ3RoKSB7XHJcbiAgICB2YXIgY29va2llID0gY29va2llcy5wb3AoKTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgc2VwYXJhdG9yIGluZGV4IChcIm5hbWU9dmFsdWVcIilcclxuICAgIHZhciBzZXBhcmF0b3JJbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XHJcblxyXG4gICAgLy8gSUU8MTEgZW1pdHMgdGhlIGVxdWFsIHNpZ24gd2hlbiB0aGUgY29va2llIHZhbHVlIGlzIGVtcHR5XHJcbiAgICBzZXBhcmF0b3JJbmRleCA9IHNlcGFyYXRvckluZGV4IDwgMCA/IGNvb2tpZS5sZW5ndGggOiBzZXBhcmF0b3JJbmRleDtcclxuXHJcbiAgICB2YXIgY29va2llX25hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KS5yZXBsYWNlKC9eXFxzKy8sICcnKSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNvb2tpZSB2YWx1ZSBpZiB0aGUgbmFtZSBtYXRjaGVzXHJcbiAgICBpZiAoY29va2llX25hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyAxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gYG51bGxgIGFzIHRoZSBjb29raWUgd2FzIG5vdCBmb3VuZFxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0cy5lcmFzZSA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMpIHtcclxuICBleHBvcnRzLnNldChuYW1lLCAnJywge1xyXG4gICAgZXhwaXJlczogIC0xLFxyXG4gICAgZG9tYWluOiAgIG9wdGlvbnMgJiYgb3B0aW9ucy5kb21haW4sXHJcbiAgICBwYXRoOiAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnBhdGgsXHJcbiAgICBzZWN1cmU6ICAgMCxcclxuICAgIGh0dHBvbmx5OiAwfVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnRzLmFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBhbGwgPSB7fTtcclxuICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICAvLyBJdGVyYXRlIGFsbCBjb29raWVzXHJcbiAgd2hpbGUoY29va2llcy5sZW5ndGgpIHtcclxuICAgIHZhciBjb29raWUgPSBjb29raWVzLnBvcCgpO1xyXG5cclxuICAgIC8vIERldGVybWluZSBzZXBhcmF0b3IgaW5kZXggKFwibmFtZT12YWx1ZVwiKVxyXG4gICAgdmFyIHNlcGFyYXRvckluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcclxuXHJcbiAgICAvLyBJRTwxMSBlbWl0cyB0aGUgZXF1YWwgc2lnbiB3aGVuIHRoZSBjb29raWUgdmFsdWUgaXMgZW1wdHlcclxuICAgIHNlcGFyYXRvckluZGV4ID0gc2VwYXJhdG9ySW5kZXggPCAwID8gY29va2llLmxlbmd0aCA6IHNlcGFyYXRvckluZGV4O1xyXG5cclxuICAgIC8vIGFkZCB0aGUgY29va2llIG5hbWUgYW5kIHZhbHVlIHRvIHRoZSBgYWxsYCBvYmplY3RcclxuICAgIHZhciBjb29raWVfbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLnJlcGxhY2UoL15cXHMrLywgJycpKTtcclxuICAgIGFsbFtjb29raWVfbmFtZV0gPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFsbDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1jb29raWVzL3NyYy9icm93c2VyLWNvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
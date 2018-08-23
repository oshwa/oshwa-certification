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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Footer.init();
_accordion2.default.init(); // import Footer from './Footer';

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
  slideTarget: $('.slide-panel__container'),
  slideContainer: $('.slide-panel'),
  setupSlideAnimation: function setupSlideAnimation() {
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
  allFilters: $('.dropdown'),
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
  searchString: $('#searchfield'),
  submitSearch: function submitSearch() {
    $('.js-search-submit').on('click', function () {
      var query = SearchSubmit.searchString.val();
      var url = document.location.origin;
      var searchListUrl = '' + url + SearchSubmit.listUrl + '?q=' + query;

      window.location.href = searchListUrl;
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
  filterByTag: function filterByTag() {
    $('.project__type').on('click', function (e) {
      var query = e.target.getAttribute('type-tag');
      var url = document.location.origin;
      var searchListUrl = '' + url + TagFilter.listUrl + '?type=' + query;

      window.location.href = searchListUrl;
    });
  },
  filterByCategory: function filterByCategory() {
    $('.container-overlay').on('click', function (e) {
      var query = e.target.parentElement.getAttribute('type');
      var url = document.location.origin;
      var searchListUrl = '' + url + TagFilter.listUrl + '?type=' + query;

      window.location.href = searchListUrl;
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTYxYWRjZDY0MjAxMWY2ZTM1NmUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyJdLCJuYW1lcyI6WyJpbml0IiwibWFya2Rvd25MaW5rc05ld1BhZ2UiLCJBY2NvcmRpb24iLCJoYW5kbGVDbGljayIsIiQiLCJjbGljayIsImFjdGl2ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsIk92ZXJsYXkiLCJvbkNsaWNrT3ZlcmxheSIsIk1vZGFsIiwib3Blbk1vZGFsIiwiZmluZCIsImNsb3NlTW9kYWwiLCJvbiIsImNsaWNrT3ZlcmxheUNsb3NlTW9kYWwiLCJOYXYiLCJvcGVuTWVudSIsInRvZ2dsZUNsYXNzIiwiY2xvc2VNZW51IiwiU2Nyb2xsIiwic21vb3RoU2Nyb2xsaW5nIiwiJHRhcmciLCJoYXNoIiwiaG9zdDEiLCJob3N0bmFtZSIsImhvc3QyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRoMSIsInBhdGhuYW1lIiwicmVwbGFjZSIsInBhdGgyIiwibGVuZ3RoIiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiU2VhcmNoIiwiZml4ZWRTZWFyY2hUcmlnZ2VyIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJTbGlkZXIiLCJnZW5lcmFsU2xpZGVyIiwic2xpY2siLCJhcnJvd3MiLCJkcmFnZ2FibGUiLCJzd2lwZVRvU2xpZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiU3RpY2t5IiwiY2xvc2VTdGlja3kiLCJVdGlscyIsIm1hcCIsImlkeCIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJJbnRlcm5hbE5hdiIsImhhbmRsZUludGVybmFsTWVudSIsIiRjdXJyZW50VGFyZ2V0IiwiJGFsbEl0ZW1zIiwib3JkZXIiLCJhdHRyIiwiaGFuZGxlTmF2Q2xpY2siLCJnZXRWaWV3IiwidGFyZ2V0IiwicGFnZVRhcmdldCIsIiR2aWV3VGFyZ2V0IiwiY2xpY2tUYXJnZXQiLCJDb21wYWN0UGFuZWwiLCJzbGlkZVRhcmdldCIsInNsaWRlQ29udGFpbmVyIiwic2V0dXBTbGlkZUFuaW1hdGlvbiIsInJpZ2h0IiwiZmFkZU91dCIsImhhbmRsZVNsaWRlRGlzcGxheSIsImRhdGFUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRTbGlkZUNvbnRhaW5lciIsImNzcyIsImhhbmRsZVNsaWRlQ2xvc2VCdXR0b24iLCJoYW5kbGVPdmVybGF5Q2xvc2UiLCJNb2JpbGVGaWx0ZXJzIiwib3BlbkZpbHRlcnMiLCJodG1sIiwiTGlzdEZpbHRlciIsIm9wdGlvbnMiLCJ2YWx1ZU5hbWVzIiwibmFtZSIsImZ1enp5U2VhcmNoIiwic2VhcmNoQ2xhc3MiLCJkaXN0YW5jZSIsInRocmVzaG9sZCIsIm11bHRpU2VhcmNoIiwicHJvamVjdExpc3QiLCJ1bmRlZmluZWQiLCJzZWFyY2hTdHJpbmciLCJhbGxGaWx0ZXJzIiwic2VhcmNoUXVlcmllcyIsImRvY3VtZW50YXRpb24iLCJzb2Z0d2FyZSIsImhhcmR3YXJlIiwidHlwZUNoZWNrZWRWYWx1ZXMiLCJjcmVhdGVMaXN0IiwiTGlzdCIsImRvY3VtZW50IiwiaHJlZiIsImluZGV4T2YiLCJzb3J0IiwiZmlsdGVyTGlzdCIsInNlYXJjaCIsImZpbHRlciIsIml0ZW0iLCJ2YWx1ZXMiLCJ0eXBlIiwibWF0Y2hlc0FsbEl0ZW1zIiwiZGlzcGxheVJlc3VsdHMiLCJkaXNwbGF5UmVzdWx0UXVlcmllcyIsImZpbHRlckJ5U2VhcmNoIiwidmFsIiwiZmlsdGVyQnlEcm9wZG93bnMiLCJlYWNoIiwic2VsZWN0aW9uIiwiZmlsdGVyU2VsZWN0aW9uIiwiaWQiLCJzZWxlY3RlZE9wdGlvbiIsImNoaWxkcmVuIiwiZmlsdGVyQnlMb2NhdGlvbiIsImZpbHRlckJ5Q2hlY2tib3hlcyIsInZhbHVlIiwiZ2V0IiwiYXJyMSIsImFycjIiLCJtYXRjaGVzQWxsIiwibGFyZ2VyQXJyYXkiLCJzbWFsbGVyQXJyYXkiLCJldmVyeSIsImVsZW0iLCJmaWx0ZXJCeVVybFBhcmFtcyIsInNlYXJjaFF1ZXJ5Iiwic3BsaXQiLCJzZWFyY2hQYXJhbSIsImRlY29kZVVSSSIsInByb3AiLCJwdXNoIiwiY2xlYXJBbGxGaWx0ZXJzIiwib3JpZ2luIiwiY2xlYXJGb3JtSW5wdXRzIiwicHJvamVjdENvdW50IiwiYWN0aXZlU2VhcmNoUGFyYW1zIiwic2hvdyIsImpvaW4iLCJoaWRlIiwiQWRkSWNvbiIsImNpdGF0aW9uQ29udGFpbmVyIiwiYWRkSWNvbiIsImFwcGVuZCIsIlNlYXJjaFN1Ym1pdCIsImxpc3RVcmwiLCJzdWJtaXRTZWFyY2giLCJxdWVyeSIsInVybCIsInNlYXJjaExpc3RVcmwiLCJUYWdGaWx0ZXIiLCJmaWx0ZXJCeVRhZyIsImZpbHRlckJ5Q2F0ZWdvcnkiLCJwYXJlbnRFbGVtZW50IiwiU3BlY3RydW0iLCJzY2hlbWF0aWNEZXNjcmlwdGlvbiIsInRhcmdldENpcmNsZXMiLCJjbGlja2VkQ2lyY2xlIiwic2libGluZ3MiLCJzaG93RGF0YSIsImNhbGwiLCJmb3JFYWNoIiwiY2lyY2xlQXR0ciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFjdGl2YXRlRmlyc3RDaXJjbGUiLCJmaXJzdENpcmNsZSIsImZpcnN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxvQkFBVUEsSUFBVixHLENB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LFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNELE9BRkQsTUFFTztBQUNMakUsYUFBS2dFLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixTQUF0QjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBM0JjO0FBNEJmQyx1QkFBcUIsK0JBQU07QUFDekIsUUFBTUMsY0FBYzFMLEVBQUUsU0FBRixFQUFhMkwsS0FBYixFQUFwQjtBQUNBRCxnQkFBWUMsS0FBWixHQUFvQnBMLFFBQXBCLENBQTZCLFFBQTdCO0FBQ0FzSyxhQUFTSyxRQUFULENBQWtCUSxZQUFZdEgsSUFBWixDQUFpQixhQUFqQixDQUFsQjtBQUNELEdBaENjO0FBaUNmeEUsTUFqQ2Usa0JBaUNSO0FBQ0wsU0FBS21MLGFBQUw7QUFDQSxTQUFLVSxtQkFBTDtBQUNEO0FBcENjLENBQWpCOztBQXVDQWpMLE9BQU9DLE9BQVAsR0FBaUJvSyxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE2MWFkY2Q2NDIwMTFmNmUzNTZlIiwiLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCBTdGlja3kgZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEludGVybmFsTmF2IGZyb20gJy4vaW50ZXJuYWxfbmF2JztcbmltcG9ydCBDb21wYWN0UGFuZWwgZnJvbSAnLi9jb21wYWN0X3BhbmVsJztcbmltcG9ydCBNb2JpbGVGaWx0ZXJzIGZyb20gJy4vbW9iaWxlX2ZpbHRlcnMnO1xuaW1wb3J0IExpc3RGaWx0ZXIgZnJvbSAnLi9saXN0X2ZpbHRlcic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2FkZF9pY29uJztcbmltcG9ydCBTZWFyY2hTdWJtaXQgZnJvbSAnLi9zZWFyY2hfc3VibWl0JztcbmltcG9ydCBUYWdGaWx0ZXIgZnJvbSAnLi90YWdfZmlsdGVyJztcbmltcG9ydCBTcGVjdHJ1bSBmcm9tICcuL3NwZWN0cnVtJztcblxuLy8gRm9vdGVyLmluaXQoKTtcbkFjY29yZGlvbi5pbml0KCk7XG5Nb2RhbC5pbml0KCk7XG5OYXYuaW5pdCgpO1xuT3ZlcmxheS5pbml0KCk7XG5TY3JvbGwuaW5pdCgpO1xuU2VhcmNoLmluaXQoKTtcblNsaWRlci5pbml0KCk7XG5TdGlja3kuaW5pdCgpO1xuVXRpbHMubWFya2Rvd25MaW5rc05ld1BhZ2UoKTtcbkludGVybmFsTmF2LmluaXQoKTtcbkNvbXBhY3RQYW5lbC5pbml0KCk7XG5Nb2JpbGVGaWx0ZXJzLmluaXQoKTtcbkxpc3RGaWx0ZXIuaW5pdCgpO1xuQWRkSWNvbi5pbml0KCk7XG5TZWFyY2hTdWJtaXQuaW5pdCgpO1xuVGFnRmlsdGVyLmluaXQoKTtcblNwZWN0cnVtLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2NyaXB0cy5qcyIsImNvbnN0IEFjY29yZGlvbiA9IHtcbiAgaGFuZGxlQ2xpY2s6ICgpID0+IHtcbiAgICAkKCcuanMtb3Blbi1hY2NvcmRpb24nKS5jbGljayhlID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICBhY3RpdmUgPyAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpIDogJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWNjb3JkaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9hY2NvcmRpb24uanMiLCJjb25zdCBPdmVybGF5ID0ge1xuICBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAkKCcjb3ZlcmxheScpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5qcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcuanMtYWN0aXZlLW1lbnUnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlLW1lbnUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9uQ2xpY2tPdmVybGF5KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3ZlcmxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsImNvbnN0IE1vZGFsID0ge1xuICBvcGVuTW9kYWw6ICgpID0+IHtcbiAgICAkKCcuanMtb3Blbi1tb2RhbCcpLmNsaWNrKGUgPT4ge1xuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIC5maW5kKCcuanMtdGFyZ2V0LW1vZGFsJylcbiAgICAgICAgLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdqcy1ib2R5LW1vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBjbG9zZU1vZGFsOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtY2xvc2UtbW9kYWwnLCAoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2pzLWJvZHktbW9kYWwtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGNsaWNrT3ZlcmxheUNsb3NlTW9kYWw6ICgpID0+IHtcbiAgICAkKCcjb3ZlcmxheScpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnanMtYm9keS1tb2RhbC1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIHRoaXMuY2xpY2tPdmVybGF5Q2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9tb2RhbC5qcyIsImNvbnN0IE5hdiA9IHtcbiAgb3Blbk1lbnU6ICgpID0+IHtcbiAgICAkKCcuanMtdHJpZ2dlci1tZW51Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XG4gICAgICAkKCcudG9wLWJhcl9fYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51LWJ1dHRvbicpO1xuICAgICAgJCgnI292ZXJsYXknKS50b2dnbGVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGNsb3NlTWVudTogKCkgPT4ge1xuICAgICQoJy5jbG9zZS1tZW51Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XG4gICAgICAkKCcudG9wLWJhcl9fYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tZW51LWJ1dHRvbicpO1xuICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjb3ZlcmxheScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudScpO1xuICAgICAgJCgnLnRvcC1iYXJfX2J1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudS1idXR0b24nKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL25hdi5qcyIsImNvbnN0IFNjcm9sbCA9IHtcbiAgc21vb3RoU2Nyb2xsaW5nKCkge1xuICAgIC8vIFNtb290aCBTY3JvbGxpbmcgRnVuY3Rpb25cbiAgICAkKCdhW2hyZWYqPVxcXFwjXTpub3QoW2hyZWY9XFxcXCNdKScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgbGV0ICR0YXJnID0gJChlLmN1cnJlbnRUYXJnZXQuaGFzaCk7XG4gICAgICBjb25zdCBob3N0MSA9IGUuY3VycmVudFRhcmdldC5ob3N0bmFtZTtcbiAgICAgIGNvbnN0IGhvc3QyID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgY29uc3QgcGF0aDEgPSBlLmN1cnJlbnRUYXJnZXQucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgIGNvbnN0IHBhdGgyID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICBpZiAoISR0YXJnLmxlbmd0aCkge1xuICAgICAgICAkdGFyZyA9ICQoYFtuYW1lPSR7ZS5jdXJyZW50VGFyZ2V0Lmhhc2guc2xpY2UoMSl9XWApO1xuICAgICAgfVxuICAgICAgaWYgKCR0YXJnLmxlbmd0aCAmJiAoaG9zdDEgPT09IGhvc3QyIHx8IHBhdGgxID09PSBwYXRoMikpIHtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICR0YXJnLm9mZnNldCgpLnRvcCB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxpbmcoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3Njcm9sbC5qcyIsImNvbnN0IFNlYXJjaCA9IHtcbiAgZml4ZWRTZWFyY2hUcmlnZ2VyKCkge1xuICAgIC8vIFNlYXJjaCBDbGljayBCZWhhdmlvclxuICAgICQoJy5qcy10cmlnZ2VyLXNlYXJjaCcpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5maXhlZFNlYXJjaFRyaWdnZXIoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NlYXJjaC5qcyIsImNvbnN0IFNsaWRlciA9IHtcbiAgZ2VuZXJhbFNsaWRlcigpIHtcbiAgICAvLyBTbGlkZXJcbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHN3aXBlVG9TbGlkZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmFsU2xpZGVyKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zbGlkZXIuanMiLCJjb25zdCBTdGlja3kgPSB7XG4gIGNsb3NlU3RpY2t5KCkge1xuICAgICQoJy5qcy1jbG9zZS1zdGlja3knKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LXN0aWNreScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlU3RpY2t5KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RpY2t5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zdGlja3kuanMiLCJjb25zdCBVdGlscyA9IHtcbiAgbWFya2Rvd25MaW5rc05ld1BhZ2U6ICgpID0+IHtcbiAgICAkKCcubWFya2Rvd24gYScpLm1hcCgoaWR4LCBsaW5rKSA9PiB7XG4gICAgICByZXR1cm4gbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvdXRpbHMuanMiLCJjb25zdCBJbnRlcm5hbE5hdiA9IHtcbiAgaGFuZGxlSW50ZXJuYWxNZW51KCkge1xuICAgICQoJy5pbnRlcm5hbC1tZW51X19pdGVtJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkY3VycmVudFRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0ICRhbGxJdGVtcyA9ICQoJy5pbnRlcm5hbC1tZW51X19pdGVtJyk7XG4gICAgICAkYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1pdGVtJyk7XG4gICAgICAkY3VycmVudFRhcmdldC5hZGRDbGFzcygnanMtYWN0aXZlLWl0ZW0nKTtcbiAgICAgIGNvbnN0IG9yZGVyID0gJGN1cnJlbnRUYXJnZXQuYXR0cignZGF0YS1vcmRlcicpO1xuICAgICAgSW50ZXJuYWxOYXYuaGFuZGxlTmF2Q2xpY2sob3JkZXIpO1xuICAgIH0pO1xuICB9LFxuICBnZXRWaWV3KHRhcmdldCkge1xuICAgIGNvbnN0IHBhZ2VUYXJnZXQgPSB0YXJnZXQgfHwgJzEnO1xuICAgIGNvbnN0ICR2aWV3VGFyZ2V0ID0gJChgW2RhdGEtbmF2LW9yZGVyPScke3BhZ2VUYXJnZXR9J11gKTtcbiAgICAkdmlld1RhcmdldC5hZGRDbGFzcygnanMtYWN0aXZlLXNlY3Rpb24nKTtcbiAgfSxcbiAgaGFuZGxlTmF2Q2xpY2soY2xpY2tUYXJnZXQpIHtcbiAgICAkKCcuanMtYWN0aXZlLXNlY3Rpb24nKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlLXNlY3Rpb24nKTtcbiAgICBJbnRlcm5hbE5hdi5nZXRWaWV3KGNsaWNrVGFyZ2V0KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZUludGVybmFsTWVudSgpO1xuICAgIHRoaXMuZ2V0VmlldygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVybmFsTmF2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJjb25zdCBDb21wYWN0UGFuZWwgPSB7XG4gIHNsaWRlVGFyZ2V0OiAkKCcuc2xpZGUtcGFuZWxfX2NvbnRhaW5lcicpLFxuICBzbGlkZUNvbnRhaW5lcjogJCgnLnNsaWRlLXBhbmVsJyksXG4gIHNldHVwU2xpZGVBbmltYXRpb246ICgpID0+IHtcbiAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnLTEwMCUnIH0sICdzbG93JykuZmFkZU91dCg1KTtcbiAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgfSxcbiAgaGFuZGxlU2xpZGVEaXNwbGF5OiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGUtcGFuZWxfX29wZW4tdHJpZ2dlcicsIGUgPT4ge1xuICAgICAgY29uc3QgZGF0YVRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVybScpO1xuICAgICAgY29uc3QgdGFyZ2V0U2xpZGVDb250YWluZXIgPSAkKGBbZGF0YS12YWx1ZT1cIiR7ZGF0YVRhcmdldH1cIl1gKTtcbiAgICAgIGlmICh0YXJnZXRTbGlkZUNvbnRhaW5lci5oYXNDbGFzcygnaXMtdmlzaWJsZScpKSB7XG4gICAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgNDAwKS5mYWRlT3V0KDUpO1xuICAgICAgICB0YXJnZXRTbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJzAlJyB9LCA0MDApLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB0YXJnZXRTbGlkZUNvbnRhaW5lci5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICAkKCcjb3ZlcmxheScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbjogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnNsaWRlLXBhbmVsX19jbG9zZS10cmlnZ2VyJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnLTEwMCUnIH0sICdzbG93JykuZmFkZU91dCg1KTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU92ZXJsYXlDbG9zZTogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI292ZXJsYXknLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgfSlcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNldHVwU2xpZGVBbmltYXRpb24oKTtcbiAgICB0aGlzLmhhbmRsZVNsaWRlRGlzcGxheSgpO1xuICAgIHRoaXMuaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbigpO1xuICAgIHRoaXMuaGFuZGxlT3ZlcmxheUNsb3NlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFjdFBhbmVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwiY29uc3QgTW9iaWxlRmlsdGVycyA9IHtcbiAgb3BlbkZpbHRlcnM6ICgpID0+IHtcbiAgICAkKCcudG9nZ2xlLWZpbHRlcnMnKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuZmlsdGVyLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy50b2dnbGUtZmlsdGVycycpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXG4gICAgICBpZiAoJCgnLnRvZ2dsZS1maWx0ZXJzJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykuaHRtbCgnY2xvc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy50b2dnbGUtZmlsdGVycycpLmh0bWwoJ3R1bmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wZW5GaWx0ZXJzKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9iaWxlRmlsdGVycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJjb25zdCBMaXN0RmlsdGVyID0ge1xuICBvcHRpb25zOiB7XG4gICAgdmFsdWVOYW1lczogW1xuICAgICAgJ25hbWUnLFxuICAgICAgJ3VpZCcsXG4gICAgICAndmVyc2lvbicsXG4gICAgICAna2V5d29yZHMnLFxuICAgICAgJ3Jlc3BvbnNpYmxlLXBhcnR5JyxcbiAgICAgIHsgbmFtZTogJ2RhdGUnLCBhdHRyOiAnZGF0ZScgfSxcbiAgICAgIHsgbmFtZTogJ3R5cGUnLCBhdHRyOiAndHlwZScgfSxcbiAgICAgIHsgbmFtZTogJ2hhcmR3YXJlJywgYXR0cjogJ2hhcmR3YXJlJyB9LFxuICAgICAgeyBuYW1lOiAnZG9jdW1lbnRhdGlvbicsIGF0dHI6ICdkb2N1bWVudGF0aW9uJyB9LFxuICAgICAgeyBuYW1lOiAnc29mdHdhcmUnLCBhdHRyOiAnc29mdHdhcmUnIH0sXG4gICAgICB7IG5hbWU6ICdsb2NhdGlvbicsIGF0dHI6ICdsb2NhdGlvbicgfVxuICAgIF0sXG4gICAgZnV6enlTZWFyY2g6IHtcbiAgICAgIHNlYXJjaENsYXNzOiAnZnV6enktc2VhcmNoJyxcbiAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgbXVsdGlTZWFyY2g6IHRydWVcbiAgICB9XG4gIH0sXG4gIHByb2plY3RMaXN0OiB1bmRlZmluZWQsXG4gIHNlYXJjaFN0cmluZzogJycsXG4gIGFsbEZpbHRlcnM6ICQoJy5kcm9wZG93bicpLFxuICBzZWFyY2hRdWVyaWVzOiB7IGRvY3VtZW50YXRpb246ICdhbGwnLCBzb2Z0d2FyZTogJ2FsbCcsIGhhcmR3YXJlOiAnYWxsJyB9LFxuICB0eXBlQ2hlY2tlZFZhbHVlczogW10sXG4gIGxvY2F0aW9uOiAnYWxsJyxcbiAgY3JlYXRlTGlzdDogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QgPSBuZXcgTGlzdCgncHJvamVjdF9kYXRhJywgTGlzdEZpbHRlci5vcHRpb25zKTtcblxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2xpc3QnKSA+IC0xKSB7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNvcnQoJ25hbWUnLCB7IG9yZGVyOiAnYXNjJyB9KTtcbiAgICB9XG4gIH0sXG4gIGZpbHRlckxpc3Q6ICgpID0+IHtcbiAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuaGFyZHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5kb2N1bWVudGF0aW9uICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuc29mdHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS50eXBlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24gIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5oYXJkd2FyZS5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5oYXJkd2FyZSkgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuZG9jdW1lbnRhdGlvbi5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5kb2N1bWVudGF0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5zb2Z0d2FyZS5pbmRleE9mKExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5zb2Z0d2FyZSkgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24uaW5kZXhPZihMaXN0RmlsdGVyLmxvY2F0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgTGlzdEZpbHRlci5tYXRjaGVzQWxsSXRlbXMoaXRlbS52YWx1ZXMoKS50eXBlLCBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0cygpO1xuICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgfSxcbiAgZmlsdGVyQnlTZWFyY2g6ICgpID0+IHtcbiAgICAkKCcjc2VhcmNoZmllbGQnKS5vbigna2V5dXAnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nID0gJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5RHJvcGRvd25zOiAoKSA9PiB7XG4gICAgTGlzdEZpbHRlci5hbGxGaWx0ZXJzLm9uKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIuYWxsRmlsdGVycy5lYWNoKHNlbGVjdGlvbiA9PiB7XG4gICAgICAgICQoc2VsZWN0aW9uKS5lYWNoKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJTZWxlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAkKGUuY3VycmVudFRhcmdldCkuY2hpbGRyZW4oJzpzZWxlY3RlZCcpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXNbZmlsdGVyU2VsZWN0aW9uXSA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5TG9jYXRpb246ICgpID0+IHtcbiAgICAkKCcuY291bnRyeS1kcm9wZG93bicpLm9uKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIubG9jYXRpb24gPSAkKGUuY3VycmVudFRhcmdldCkuY2hpbGRyZW4oJzpzZWxlY3RlZCcpLmF0dHIoJ2lkJyk7XG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoKTtcbiAgICB9KVxuICB9LFxuICBmaWx0ZXJCeUNoZWNrYm94ZXM6ICgpID0+IHtcbiAgICAkKCcuZmlsdGVyLWNvbnRhaW5lcicpLm9uKCdjaGFuZ2UnLCAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLCAoKSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfSkuZ2V0KCk7XG5cbiAgICAgIGlmIChMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzID0gWydhbGwnXTtcbiAgICAgIH1cblxuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSk7XG4gIH0sXG4gIG1hdGNoZXNBbGxJdGVtczogKGFycjEsIGFycjIpID0+IHtcbiAgICBsZXQgbWF0Y2hlc0FsbDtcbiAgICBsZXQgbGFyZ2VyQXJyYXk7XG4gICAgbGV0IHNtYWxsZXJBcnJheTtcbiAgICBpZiAoYXJyMS5sZW5ndGggPiBhcnIyLmxlbmd0aCkge1xuICAgICAgbGFyZ2VyQXJyYXkgPSBhcnIxO1xuICAgICAgc21hbGxlckFycmF5ID0gYXJyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFyZ2VyQXJyYXkgPSBhcnIyO1xuICAgICAgc21hbGxlckFycmF5ID0gYXJyMTtcbiAgICB9XG4gICAgbWF0Y2hlc0FsbCA9IHNtYWxsZXJBcnJheS5ldmVyeShlbGVtID0+IGxhcmdlckFycmF5LmluZGV4T2YoZWxlbSkgIT09IC0xKTtcbiAgICByZXR1cm4gbWF0Y2hlc0FsbDtcbiAgfSxcbiAgZmlsdGVyQnlVcmxQYXJhbXM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz0nKVswXTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz0nKVsxXTtcblxuICAgIHN3aXRjaCAoc2VhcmNoUXVlcnkpIHtcbiAgICAgIGNhc2UgJz9xJzpcbiAgICAgICAgTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcgPSBkZWNvZGVVUkkoc2VhcmNoUGFyYW0pO1xuICAgICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyk7XG4gICAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc/dHlwZSc6XG4gICAgICAgICQoYGlucHV0W3R5cGU9Y2hlY2tib3hdW3ZhbHVlPSR7c2VhcmNoUGFyYW19XWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcy5wdXNoKHNlYXJjaFBhcmFtKTtcbiAgICAgICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0UXVlcmllcygpO1xuXG4gICAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlcygpLnR5cGUgIT09IG51bGwgJiYgaXRlbS52YWx1ZXMoKS50eXBlLmluZGV4T2Yoc2VhcmNoUGFyYW0pICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSxcbiAgY2xlYXJBbGxGaWx0ZXJzOiAoKSA9PiB7XG4gICAgJCgnLmNsZWFyX2ZpbHRlcnMnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nID0gJyc7XG4gICAgICBMaXN0RmlsdGVyLmxvY2F0aW9uID0gJyc7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaCgpO1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5maWx0ZXIoKTtcbiAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc29ydCgnbmFtZScsIHsgb3JkZXI6ICdhc2MnIH0pO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCAhPT0gJycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9vc2h3YS9saXN0Lmh0bWwnO1xuICAgICAgfVxuXG4gICAgICBMaXN0RmlsdGVyLmNsZWFyRm9ybUlucHV0cygpO1xuICAgICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0cygpO1xuICAgICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0UXVlcmllcygpO1xuICAgIH0pO1xuICB9LFxuICBjbGVhckZvcm1JbnB1dHM6ICgpID0+IHtcbiAgICAkKCcuc2VhcmNoX19pbnB1dCcpLnZhbCgnJyk7XG4gICAgJCgnLmRyb3Bkb3duJykucHJvcCgnc2VsZWN0ZWRJbmRleCcsIDApO1xuICAgICQoJy5jb3VudHJ5LWRyb3Bkb3duJykucHJvcCgnc2VsZWN0ZWRJbmRleCcsIDApO1xuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgfSxcbiAgZGlzcGxheVJlc3VsdHM6ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSAkKCcucHJvamVjdCcpLmxlbmd0aDtcbiAgICAkKCcucmVzdWx0cy1jb3VudCcpLmh0bWwoYDxwPkRpc3BsYXlpbmcgJHtwcm9qZWN0Q291bnR9IFByb2plY3RzPC9wPmApO1xuICB9LFxuICBkaXNwbGF5UmVzdWx0UXVlcmllczogKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVNlYXJjaFBhcmFtcyA9IFtdO1xuXG4gICAgaWYgKExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nICE9PSAnJykge1xuICAgICAgYWN0aXZlU2VhcmNoUGFyYW1zLnB1c2goTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcpO1xuICAgIH1cblxuICAgICQoJ2lucHV0W25hbWU9XCJ0eXBlXCJdOmNoZWNrZWQnKS5tYXAoKHZhbCwgaXRlbSkgPT4gYWN0aXZlU2VhcmNoUGFyYW1zLnB1c2goaXRlbS5pZCkpO1xuXG4gICAgJCgnLmRyb3Bkb3duJykubWFwKCh2YWwsIGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnZhbHVlICE9PSAnU2VsZWN0IG9uZScpIHtcbiAgICAgICAgYWN0aXZlU2VhcmNoUGFyYW1zLnB1c2goaXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aXZlU2VhcmNoUGFyYW1zO1xuICAgIH0pO1xuXG4gICAgaWYgKGFjdGl2ZVNlYXJjaFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuc2hvdygpO1xuICAgICAgaWYgKCQoJy5wcm9qZWN0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5odG1sKGA8cD5ObyByZXN1bHRzIGZvcjogJHthY3RpdmVTZWFyY2hQYXJhbXMuam9pbignOyAnKX08L3A+YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuaHRtbChgPHA+UmVzdWx0czogJHthY3RpdmVTZWFyY2hQYXJhbXMuam9pbignOyAnKX08L3A+YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5oaWRlKCk7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgIHRoaXMuZmlsdGVyQnlTZWFyY2goKTtcbiAgICB0aGlzLmZpbHRlckJ5RHJvcGRvd25zKCk7XG4gICAgdGhpcy5maWx0ZXJCeUxvY2F0aW9uKCk7XG4gICAgdGhpcy5maWx0ZXJCeUNoZWNrYm94ZXMoKTtcbiAgICB0aGlzLmZpbHRlckJ5VXJsUGFyYW1zKCk7XG4gICAgdGhpcy5jbGVhckFsbEZpbHRlcnMoKTtcbiAgICB0aGlzLmNsZWFyRm9ybUlucHV0cygpO1xuICAgIHRoaXMuZGlzcGxheVJlc3VsdHMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsImNvbnN0IEFkZEljb24gPSB7XG4gIGNpdGF0aW9uQ29udGFpbmVyOiAkKCcuY2l0YXRpb25zJykuZmluZCgnYScpLFxuICBhZGRJY29uOiAoKSA9PiB7XG4gICAgQWRkSWNvbi5jaXRhdGlvbkNvbnRhaW5lci5hcHBlbmQoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbGF1bmNoXCI+bGF1bmNoPC9pPicpO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuYWRkSWNvbigpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwiY29uc3QgU2VhcmNoU3VibWl0ID0ge1xuICBsaXN0VXJsOiAnL29zaHdhL2xpc3QuaHRtbCcsXG4gIHNlYXJjaFN0cmluZzogJCgnI3NlYXJjaGZpZWxkJyksXG4gIHN1Ym1pdFNlYXJjaDogKCkgPT4ge1xuICAgICQoJy5qcy1zZWFyY2gtc3VibWl0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBTZWFyY2hTdWJtaXQuc2VhcmNoU3RyaW5nLnZhbCgpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgY29uc3Qgc2VhcmNoTGlzdFVybCA9IGAke3VybH0ke1NlYXJjaFN1Ym1pdC5saXN0VXJsfT9xPSR7cXVlcnl9YDtcblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWFyY2hMaXN0VXJsO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc3VibWl0U2VhcmNoKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoU3VibWl0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zZWFyY2hfc3VibWl0LmpzIiwiY29uc3QgVGFnRmlsdGVyID0ge1xuICBsaXN0VXJsOiAnL29zaHdhL2xpc3QuaHRtbCcsXG4gIGZpbHRlckJ5VGFnOiAoKSA9PiB7XG4gICAgJCgnLnByb2plY3RfX3R5cGUnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlLXRhZycpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgY29uc3Qgc2VhcmNoTGlzdFVybCA9IGAke3VybH0ke1RhZ0ZpbHRlci5saXN0VXJsfT90eXBlPSR7cXVlcnl9YDtcblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWFyY2hMaXN0VXJsO1xuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeUNhdGVnb3J5OiAoKSA9PiB7XG4gICAgJCgnLmNvbnRhaW5lci1vdmVybGF5Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47XG4gICAgICBjb25zdCBzZWFyY2hMaXN0VXJsID0gYCR7dXJsfSR7VGFnRmlsdGVyLmxpc3RVcmx9P3R5cGU9JHtxdWVyeX1gO1xuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHNlYXJjaExpc3RVcmw7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJCeVRhZygpO1xuICAgIHRoaXMuZmlsdGVyQnlDYXRlZ29yeSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhZ0ZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvdGFnX2ZpbHRlci5qcyIsImNvbnN0IFNwZWN0cnVtID0ge1xuICBzY2hlbWF0aWNEZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICB0YXJnZXRDaXJjbGVzOiAoKSA9PiB7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24gPSAkKCcuc2NoZW1hdGljLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAkKCcuY2lyY2xlJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBjbGlja2VkQ2lyY2xlID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2NpcmNsZS1hdHRyJyk7XG5cbiAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIFNwZWN0cnVtLnNob3dEYXRhKGNsaWNrZWRDaXJjbGUpO1xuICAgIH0pO1xuICB9LFxuICBzaG93RGF0YTogY2lyY2xlQXR0ciA9PiB7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24gPSBbXS5zbGljZS5jYWxsKFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uKTtcbiAgICBTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbi1hdHRyJykgPT09IGNpcmNsZUF0dHIpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgYWN0aXZhdGVGaXJzdENpcmNsZTogKCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2lyY2xlID0gJCgnLmNpcmNsZScpLmZpcnN0KCk7XG4gICAgZmlyc3RDaXJjbGUuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgU3BlY3RydW0uc2hvd0RhdGEoZmlyc3RDaXJjbGUuYXR0cignY2lyY2xlLWF0dHInKSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy50YXJnZXRDaXJjbGVzKCk7XG4gICAgdGhpcy5hY3RpdmF0ZUZpcnN0Q2lyY2xlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3BlY3RydW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NwZWN0cnVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
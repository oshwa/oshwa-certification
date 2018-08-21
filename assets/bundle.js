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
  mainMenu: function mainMenu() {
    // Main Menu Click Behavior
    $('.js-trigger-menu').click(function (e) {
      $(e.currentTarget).next().addClass('js-active-menu');
      $('#overlay').addClass('js-active');
    });
  },
  init: function init() {
    this.mainMenu();
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
    valueNames: ['name', 'uid', 'version', 'keywords', { name: 'date', attr: 'date' }, { name: 'type', attr: 'type' }, { name: 'hardware', attr: 'hardware' }, { name: 'documentation', attr: 'documentation' }, { name: 'software', attr: 'software' }, { name: 'location', attr: 'location' }],
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
  init: function init() {
    this.filterByTag();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGMwM2NkNjAwNjllM2NlZGQ3MjkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyJdLCJuYW1lcyI6WyJpbml0IiwibWFya2Rvd25MaW5rc05ld1BhZ2UiLCJBY2NvcmRpb24iLCJoYW5kbGVDbGljayIsIiQiLCJjbGljayIsImFjdGl2ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsIk92ZXJsYXkiLCJvbkNsaWNrT3ZlcmxheSIsIk1vZGFsIiwib3Blbk1vZGFsIiwiZmluZCIsImNsb3NlTW9kYWwiLCJvbiIsImNsaWNrT3ZlcmxheUNsb3NlTW9kYWwiLCJOYXYiLCJtYWluTWVudSIsIm5leHQiLCJTY3JvbGwiLCJzbW9vdGhTY3JvbGxpbmciLCIkdGFyZyIsImhhc2giLCJob3N0MSIsImhvc3RuYW1lIiwiaG9zdDIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGgxIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicGF0aDIiLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJTZWFyY2giLCJmaXhlZFNlYXJjaFRyaWdnZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsIlNsaWRlciIsImdlbmVyYWxTbGlkZXIiLCJzbGljayIsImFycm93cyIsImRyYWdnYWJsZSIsInN3aXBlVG9TbGlkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJTdGlja3kiLCJjbG9zZVN0aWNreSIsIlV0aWxzIiwibWFwIiwiaWR4IiwibGluayIsInNldEF0dHJpYnV0ZSIsIkludGVybmFsTmF2IiwiaGFuZGxlSW50ZXJuYWxNZW51IiwiJGN1cnJlbnRUYXJnZXQiLCIkYWxsSXRlbXMiLCJvcmRlciIsImF0dHIiLCJoYW5kbGVOYXZDbGljayIsImdldFZpZXciLCJ0YXJnZXQiLCJwYWdlVGFyZ2V0IiwiJHZpZXdUYXJnZXQiLCJjbGlja1RhcmdldCIsIkNvbXBhY3RQYW5lbCIsInNsaWRlVGFyZ2V0Iiwic2xpZGVDb250YWluZXIiLCJzZXR1cFNsaWRlQW5pbWF0aW9uIiwicmlnaHQiLCJmYWRlT3V0IiwiaGFuZGxlU2xpZGVEaXNwbGF5IiwiZGF0YVRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldFNsaWRlQ29udGFpbmVyIiwiY3NzIiwiaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbiIsImhhbmRsZU92ZXJsYXlDbG9zZSIsIk1vYmlsZUZpbHRlcnMiLCJvcGVuRmlsdGVycyIsInRvZ2dsZUNsYXNzIiwiaHRtbCIsIkxpc3RGaWx0ZXIiLCJvcHRpb25zIiwidmFsdWVOYW1lcyIsIm5hbWUiLCJmdXp6eVNlYXJjaCIsInNlYXJjaENsYXNzIiwiZGlzdGFuY2UiLCJ0aHJlc2hvbGQiLCJtdWx0aVNlYXJjaCIsInByb2plY3RMaXN0IiwidW5kZWZpbmVkIiwic2VhcmNoU3RyaW5nIiwiYWxsRmlsdGVycyIsInNlYXJjaFF1ZXJpZXMiLCJkb2N1bWVudGF0aW9uIiwic29mdHdhcmUiLCJoYXJkd2FyZSIsInR5cGVDaGVja2VkVmFsdWVzIiwiY3JlYXRlTGlzdCIsIkxpc3QiLCJkb2N1bWVudCIsImhyZWYiLCJpbmRleE9mIiwic29ydCIsImZpbHRlckxpc3QiLCJzZWFyY2giLCJmaWx0ZXIiLCJpdGVtIiwidmFsdWVzIiwidHlwZSIsIm1hdGNoZXNBbGxJdGVtcyIsImRpc3BsYXlSZXN1bHRzIiwiZGlzcGxheVJlc3VsdFF1ZXJpZXMiLCJmaWx0ZXJCeVNlYXJjaCIsInZhbCIsImZpbHRlckJ5RHJvcGRvd25zIiwiZWFjaCIsInNlbGVjdGlvbiIsImZpbHRlclNlbGVjdGlvbiIsImlkIiwic2VsZWN0ZWRPcHRpb24iLCJjaGlsZHJlbiIsImZpbHRlckJ5TG9jYXRpb24iLCJmaWx0ZXJCeUNoZWNrYm94ZXMiLCJ2YWx1ZSIsImdldCIsImFycjEiLCJhcnIyIiwibWF0Y2hlc0FsbCIsImxhcmdlckFycmF5Iiwic21hbGxlckFycmF5IiwiZXZlcnkiLCJlbGVtIiwiZmlsdGVyQnlVcmxQYXJhbXMiLCJzZWFyY2hRdWVyeSIsInNwbGl0Iiwic2VhcmNoUGFyYW0iLCJkZWNvZGVVUkkiLCJwcm9wIiwicHVzaCIsImNsZWFyQWxsRmlsdGVycyIsIm9yaWdpbiIsImNsZWFyRm9ybUlucHV0cyIsInByb2plY3RDb3VudCIsImFjdGl2ZVNlYXJjaFBhcmFtcyIsInNob3ciLCJqb2luIiwiaGlkZSIsIkFkZEljb24iLCJjaXRhdGlvbkNvbnRhaW5lciIsImFkZEljb24iLCJhcHBlbmQiLCJTZWFyY2hTdWJtaXQiLCJsaXN0VXJsIiwic3VibWl0U2VhcmNoIiwicXVlcnkiLCJ1cmwiLCJzZWFyY2hMaXN0VXJsIiwiVGFnRmlsdGVyIiwiZmlsdGVyQnlUYWciLCJTcGVjdHJ1bSIsInNjaGVtYXRpY0Rlc2NyaXB0aW9uIiwidGFyZ2V0Q2lyY2xlcyIsImNsaWNrZWRDaXJjbGUiLCJzaWJsaW5ncyIsInNob3dEYXRhIiwiY2FsbCIsImZvckVhY2giLCJjaXJjbGVBdHRyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiYWN0aXZhdGVGaXJzdENpcmNsZSIsImZpcnN0Q2lyY2xlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLG9CQUFVQSxJQUFWLEcsQ0FwQkE7O0FBcUJBLGdCQUFNQSxJQUFOO0FBQ0EsY0FBSUEsSUFBSjtB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QUFRO0FBQzVDLFVBQUk1RCxLQUFLcEMsWUFBTCxDQUFrQixlQUFsQixNQUF1Q2lHLFVBQTNDLEVBQXVEO0FBQ3JEN0QsYUFBSzhELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNELE9BRkQsTUFFTztBQUNML0QsYUFBSzhELFNBQUwsQ0FBZUUsTUFBZixDQUFzQixTQUF0QjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBM0JjO0FBNEJmQyx1QkFBcUIsK0JBQU07QUFDekIsUUFBTUMsY0FBY3hMLEVBQUUsU0FBRixFQUFheUwsS0FBYixFQUFwQjtBQUNBRCxnQkFBWUMsS0FBWixHQUFvQmxMLFFBQXBCLENBQTZCLFFBQTdCO0FBQ0FvSyxhQUFTSyxRQUFULENBQWtCUSxZQUFZckgsSUFBWixDQUFpQixhQUFqQixDQUFsQjtBQUNELEdBaENjO0FBaUNmdkUsTUFqQ2Usa0JBaUNSO0FBQ0wsU0FBS2lMLGFBQUw7QUFDQSxTQUFLVSxtQkFBTDtBQUNEO0FBcENjLENBQWpCOztBQXVDQS9LLE9BQU9DLE9BQVAsR0FBaUJrSyxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjMDNjZDYwMDY5ZTNjZWRkNzI5IiwiLy8gaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCBTdGlja3kgZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEludGVybmFsTmF2IGZyb20gJy4vaW50ZXJuYWxfbmF2JztcbmltcG9ydCBDb21wYWN0UGFuZWwgZnJvbSAnLi9jb21wYWN0X3BhbmVsJztcbmltcG9ydCBNb2JpbGVGaWx0ZXJzIGZyb20gJy4vbW9iaWxlX2ZpbHRlcnMnO1xuaW1wb3J0IExpc3RGaWx0ZXIgZnJvbSAnLi9saXN0X2ZpbHRlcic7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2FkZF9pY29uJztcbmltcG9ydCBTZWFyY2hTdWJtaXQgZnJvbSAnLi9zZWFyY2hfc3VibWl0JztcbmltcG9ydCBUYWdGaWx0ZXIgZnJvbSAnLi90YWdfZmlsdGVyJztcbmltcG9ydCBTcGVjdHJ1bSBmcm9tICcuL3NwZWN0cnVtJztcblxuLy8gRm9vdGVyLmluaXQoKTtcbkFjY29yZGlvbi5pbml0KCk7XG5Nb2RhbC5pbml0KCk7XG5OYXYuaW5pdCgpO1xuT3ZlcmxheS5pbml0KCk7XG5TY3JvbGwuaW5pdCgpO1xuU2VhcmNoLmluaXQoKTtcblNsaWRlci5pbml0KCk7XG5TdGlja3kuaW5pdCgpO1xuVXRpbHMubWFya2Rvd25MaW5rc05ld1BhZ2UoKTtcbkludGVybmFsTmF2LmluaXQoKTtcbkNvbXBhY3RQYW5lbC5pbml0KCk7XG5Nb2JpbGVGaWx0ZXJzLmluaXQoKTtcbkxpc3RGaWx0ZXIuaW5pdCgpO1xuQWRkSWNvbi5pbml0KCk7XG5TZWFyY2hTdWJtaXQuaW5pdCgpO1xuVGFnRmlsdGVyLmluaXQoKTtcblNwZWN0cnVtLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2NyaXB0cy5qcyIsImNvbnN0IEFjY29yZGlvbiA9IHtcbiAgaGFuZGxlQ2xpY2s6ICgpID0+IHtcbiAgICAkKCcuanMtb3Blbi1hY2NvcmRpb24nKS5jbGljayhlID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICBhY3RpdmUgPyAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpIDogJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWNjb3JkaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9hY2NvcmRpb24uanMiLCJjb25zdCBPdmVybGF5ID0ge1xuICBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAkKCcjb3ZlcmxheScpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5qcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcuanMtYWN0aXZlLW1lbnUnKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlLW1lbnUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9uQ2xpY2tPdmVybGF5KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT3ZlcmxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsImNvbnN0IE1vZGFsID0ge1xuICBvcGVuTW9kYWw6ICgpID0+IHtcbiAgICAkKCcuanMtb3Blbi1tb2RhbCcpLmNsaWNrKGUgPT4ge1xuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIC5maW5kKCcuanMtdGFyZ2V0LW1vZGFsJylcbiAgICAgICAgLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdqcy1ib2R5LW1vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBjbG9zZU1vZGFsOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtY2xvc2UtbW9kYWwnLCAoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2pzLWJvZHktbW9kYWwtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGNsaWNrT3ZlcmxheUNsb3NlTW9kYWw6ICgpID0+IHtcbiAgICAkKCcjb3ZlcmxheScpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnanMtYm9keS1tb2RhbC1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIHRoaXMuY2xpY2tPdmVybGF5Q2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9tb2RhbC5qcyIsImNvbnN0IE5hdiA9IHtcbiAgbWFpbk1lbnUoKSB7XG4gICAgLy8gTWFpbiBNZW51IENsaWNrIEJlaGF2aW9yXG4gICAgJCgnLmpzLXRyaWdnZXItbWVudScpLmNsaWNrKGUgPT4ge1xuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIC5uZXh0KClcbiAgICAgICAgLmFkZENsYXNzKCdqcy1hY3RpdmUtbWVudScpO1xuICAgICAgJCgnI292ZXJsYXknKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYWluTWVudSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbmF2LmpzIiwiY29uc3QgU2Nyb2xsID0ge1xuICBzbW9vdGhTY3JvbGxpbmcoKSB7XG4gICAgLy8gU21vb3RoIFNjcm9sbGluZyBGdW5jdGlvblxuICAgICQoJ2FbaHJlZio9XFxcXCNdOm5vdChbaHJlZj1cXFxcI10pJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBsZXQgJHRhcmcgPSAkKGUuY3VycmVudFRhcmdldC5oYXNoKTtcbiAgICAgIGNvbnN0IGhvc3QxID0gZS5jdXJyZW50VGFyZ2V0Lmhvc3RuYW1lO1xuICAgICAgY29uc3QgaG9zdDIgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICBjb25zdCBwYXRoMSA9IGUuY3VycmVudFRhcmdldC5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgY29uc3QgcGF0aDIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgIGlmICghJHRhcmcubGVuZ3RoKSB7XG4gICAgICAgICR0YXJnID0gJChgW25hbWU9JHtlLmN1cnJlbnRUYXJnZXQuaGFzaC5zbGljZSgxKX1dYCk7XG4gICAgICB9XG4gICAgICBpZiAoJHRhcmcubGVuZ3RoICYmIChob3N0MSA9PT0gaG9zdDIgfHwgcGF0aDEgPT09IHBhdGgyKSkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJHRhcmcub2Zmc2V0KCkudG9wIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbGluZygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwiY29uc3QgU2VhcmNoID0ge1xuICBmaXhlZFNlYXJjaFRyaWdnZXIoKSB7XG4gICAgLy8gU2VhcmNoIENsaWNrIEJlaGF2aW9yXG4gICAgJCgnLmpzLXRyaWdnZXItc2VhcmNoJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmZpeGVkU2VhcmNoVHJpZ2dlcigpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwiY29uc3QgU2xpZGVyID0ge1xuICBnZW5lcmFsU2xpZGVyKCkge1xuICAgIC8vIFNsaWRlclxuICAgICQoJy5zbGlkZXInKS5zbGljayh7XG4gICAgICBhcnJvd3M6IHRydWUsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYWxTbGlkZXIoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NsaWRlci5qcyIsImNvbnN0IFN0aWNreSA9IHtcbiAgY2xvc2VTdGlja3koKSB7XG4gICAgJCgnLmpzLWNsb3NlLXN0aWNreScpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5qcy10YXJnZXQtc3RpY2t5JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuY2xvc2VTdGlja3koKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGlja3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3N0aWNreS5qcyIsImNvbnN0IFV0aWxzID0ge1xuICBtYXJrZG93bkxpbmtzTmV3UGFnZTogKCkgPT4ge1xuICAgICQoJy5tYXJrZG93biBhJykubWFwKChpZHgsIGxpbmspID0+IHtcbiAgICAgIHJldHVybiBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy91dGlscy5qcyIsImNvbnN0IEludGVybmFsTmF2ID0ge1xuICBoYW5kbGVJbnRlcm5hbE1lbnUoKSB7XG4gICAgJCgnLmludGVybmFsLW1lbnVfX2l0ZW0nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0ICRjdXJyZW50VGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY29uc3QgJGFsbEl0ZW1zID0gJCgnLmludGVybmFsLW1lbnVfX2l0ZW0nKTtcbiAgICAgICRhbGxJdGVtcy5yZW1vdmVDbGFzcygnanMtYWN0aXZlLWl0ZW0nKTtcbiAgICAgICRjdXJyZW50VGFyZ2V0LmFkZENsYXNzKCdqcy1hY3RpdmUtaXRlbScpO1xuICAgICAgY29uc3Qgb3JkZXIgPSAkY3VycmVudFRhcmdldC5hdHRyKCdkYXRhLW9yZGVyJyk7XG4gICAgICBJbnRlcm5hbE5hdi5oYW5kbGVOYXZDbGljayhvcmRlcik7XG4gICAgfSk7XG4gIH0sXG4gIGdldFZpZXcodGFyZ2V0KSB7XG4gICAgY29uc3QgcGFnZVRhcmdldCA9IHRhcmdldCB8fCAnMSc7XG4gICAgY29uc3QgJHZpZXdUYXJnZXQgPSAkKGBbZGF0YS1uYXYtb3JkZXI9JyR7cGFnZVRhcmdldH0nXWApO1xuICAgICR2aWV3VGFyZ2V0LmFkZENsYXNzKCdqcy1hY3RpdmUtc2VjdGlvbicpO1xuICB9LFxuICBoYW5kbGVOYXZDbGljayhjbGlja1RhcmdldCkge1xuICAgICQoJy5qcy1hY3RpdmUtc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUtc2VjdGlvbicpO1xuICAgIEludGVybmFsTmF2LmdldFZpZXcoY2xpY2tUYXJnZXQpO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuaGFuZGxlSW50ZXJuYWxNZW51KCk7XG4gICAgdGhpcy5nZXRWaWV3KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJuYWxOYXY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2ludGVybmFsX25hdi5qcyIsImNvbnN0IENvbXBhY3RQYW5lbCA9IHtcbiAgc2xpZGVUYXJnZXQ6ICQoJy5zbGlkZS1wYW5lbF9fY29udGFpbmVyJyksXG4gIHNsaWRlQ29udGFpbmVyOiAkKCcuc2xpZGUtcGFuZWwnKSxcbiAgc2V0dXBTbGlkZUFuaW1hdGlvbjogKCkgPT4ge1xuICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgIENvbXBhY3RQYW5lbC5zbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9LFxuICBoYW5kbGVTbGlkZURpc3BsYXk6ICgpID0+IHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zbGlkZS1wYW5lbF9fb3Blbi10cmlnZ2VyJywgZSA9PiB7XG4gICAgICBjb25zdCBkYXRhVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10ZXJtJyk7XG4gICAgICBjb25zdCB0YXJnZXRTbGlkZUNvbnRhaW5lciA9ICQoYFtkYXRhLXZhbHVlPVwiJHtkYXRhVGFyZ2V0fVwiXWApO1xuICAgICAgaWYgKHRhcmdldFNsaWRlQ29udGFpbmVyLmhhc0NsYXNzKCdpcy12aXNpYmxlJykpIHtcbiAgICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCA0MDApLmZhZGVPdXQoNSk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnMCUnIH0sIDQwMCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgIHRhcmdldFNsaWRlQ29udGFpbmVyLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICQoJyNvdmVybGF5JykuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVTbGlkZUNsb3NlQnV0dG9uOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGUtcGFuZWxfX2Nsb3NlLXRyaWdnZXInLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlT3ZlcmxheUNsb3NlOiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjb3ZlcmxheScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJy0xMDAlJyB9LCAnc2xvdycpLmZhZGVPdXQoNSk7XG4gICAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9KVxuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuc2V0dXBTbGlkZUFuaW1hdGlvbigpO1xuICAgIHRoaXMuaGFuZGxlU2xpZGVEaXNwbGF5KCk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZUNsb3NlQnV0dG9uKCk7XG4gICAgdGhpcy5oYW5kbGVPdmVybGF5Q2xvc2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wYWN0UGFuZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2NvbXBhY3RfcGFuZWwuanMiLCJjb25zdCBNb2JpbGVGaWx0ZXJzID0ge1xuICBvcGVuRmlsdGVyczogKCkgPT4ge1xuICAgICQoJy50b2dnbGUtZmlsdGVycycpLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5maWx0ZXItY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cbiAgICAgIGlmICgkKCcudG9nZ2xlLWZpbHRlcnMnKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuICAgICAgICAkKCcudG9nZ2xlLWZpbHRlcnMnKS5odG1sKCdjbG9zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykuaHRtbCgndHVuZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub3BlbkZpbHRlcnMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2JpbGVGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9tb2JpbGVfZmlsdGVycy5qcyIsImNvbnN0IExpc3RGaWx0ZXIgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YWx1ZU5hbWVzOiBbXG4gICAgICAnbmFtZScsXG4gICAgICAndWlkJyxcbiAgICAgICd2ZXJzaW9uJyxcbiAgICAgICdrZXl3b3JkcycsXG4gICAgICB7IG5hbWU6ICdkYXRlJywgYXR0cjogJ2RhdGUnIH0sXG4gICAgICB7IG5hbWU6ICd0eXBlJywgYXR0cjogJ3R5cGUnIH0sXG4gICAgICB7IG5hbWU6ICdoYXJkd2FyZScsIGF0dHI6ICdoYXJkd2FyZScgfSxcbiAgICAgIHsgbmFtZTogJ2RvY3VtZW50YXRpb24nLCBhdHRyOiAnZG9jdW1lbnRhdGlvbicgfSxcbiAgICAgIHsgbmFtZTogJ3NvZnR3YXJlJywgYXR0cjogJ3NvZnR3YXJlJyB9LFxuICAgICAgeyBuYW1lOiAnbG9jYXRpb24nLCBhdHRyOiAnbG9jYXRpb24nIH1cbiAgICBdLFxuICAgIGZ1enp5U2VhcmNoOiB7XG4gICAgICBzZWFyY2hDbGFzczogJ2Z1enp5LXNlYXJjaCcsXG4gICAgICBsb2NhdGlvbjogMCxcbiAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgIG11bHRpU2VhcmNoOiB0cnVlXG4gICAgfVxuICB9LFxuICBwcm9qZWN0TGlzdDogdW5kZWZpbmVkLFxuICBzZWFyY2hTdHJpbmc6ICcnLFxuICBhbGxGaWx0ZXJzOiAkKCcuZHJvcGRvd24nKSxcbiAgc2VhcmNoUXVlcmllczogeyBkb2N1bWVudGF0aW9uOiAnYWxsJywgc29mdHdhcmU6ICdhbGwnLCBoYXJkd2FyZTogJ2FsbCcgfSxcbiAgdHlwZUNoZWNrZWRWYWx1ZXM6IFtdLFxuICBsb2NhdGlvbjogJ2FsbCcsXG4gIGNyZWF0ZUxpc3Q6ICgpID0+IHtcbiAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0ID0gbmV3IExpc3QoJ3Byb2plY3RfZGF0YScsIExpc3RGaWx0ZXIub3B0aW9ucyk7XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaHJlZi5pbmRleE9mKCdsaXN0JykgPiAtMSkge1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zb3J0KCduYW1lJywgeyBvcmRlcjogJ2FzYycgfSk7XG4gICAgfVxuICB9LFxuICBmaWx0ZXJMaXN0OiAoKSA9PiB7XG4gICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zZWFyY2goTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcpO1xuICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtLnZhbHVlcygpLmhhcmR3YXJlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuZG9jdW1lbnRhdGlvbiAhPT0gbnVsbCAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLnNvZnR3YXJlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkudHlwZSAhPT0gbnVsbCAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLmxvY2F0aW9uICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuaGFyZHdhcmUuaW5kZXhPZihMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMuaGFyZHdhcmUpICE9PSAtMSAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLmRvY3VtZW50YXRpb24uaW5kZXhPZihMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMuZG9jdW1lbnRhdGlvbikgIT09IC0xICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuc29mdHdhcmUuaW5kZXhPZihMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMuc29mdHdhcmUpICE9PSAtMSAmJlxuICAgICAgICBpdGVtLnZhbHVlcygpLmxvY2F0aW9uLmluZGV4T2YoTGlzdEZpbHRlci5sb2NhdGlvbikgIT09IC0xICYmXG4gICAgICAgIExpc3RGaWx0ZXIubWF0Y2hlc0FsbEl0ZW1zKGl0ZW0udmFsdWVzKCkudHlwZSwgTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdHMoKTtcbiAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG4gIH0sXG4gIGZpbHRlckJ5U2VhcmNoOiAoKSA9PiB7XG4gICAgJCgnI3NlYXJjaGZpZWxkJykub24oJ2tleXVwJywgZSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyA9ICQoZS5jdXJyZW50VGFyZ2V0KS52YWwoKTtcbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdCgpO1xuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeURyb3Bkb3duczogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIuYWxsRmlsdGVycy5vbignY2hhbmdlJywgZSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLmFsbEZpbHRlcnMuZWFjaChzZWxlY3Rpb24gPT4ge1xuICAgICAgICAkKHNlbGVjdGlvbikuZWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyU2VsZWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpLmNoaWxkcmVuKCc6c2VsZWN0ZWQnKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzW2ZpbHRlclNlbGVjdGlvbl0gPSBzZWxlY3RlZE9wdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdCgpO1xuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeUxvY2F0aW9uOiAoKSA9PiB7XG4gICAgJCgnLmNvdW50cnktZHJvcGRvd24nKS5vbignY2hhbmdlJywgZSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLmxvY2F0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpLmNoaWxkcmVuKCc6c2VsZWN0ZWQnKS5hdHRyKCdpZCcpO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KCk7XG4gICAgfSlcbiAgfSxcbiAgZmlsdGVyQnlDaGVja2JveGVzOiAoKSA9PiB7XG4gICAgJCgnLmZpbHRlci1jb250YWluZXInKS5vbignY2hhbmdlJywgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKSwgKCkgPT4ge1xuICAgICAgTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcyA9ICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJykubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0pLmdldCgpO1xuXG4gICAgICBpZiAoTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcyA9IFsnYWxsJ107XG4gICAgICB9XG5cbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdCgpO1xuICAgIH0pO1xuICB9LFxuICBtYXRjaGVzQWxsSXRlbXM6IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgbGV0IG1hdGNoZXNBbGw7XG4gICAgbGV0IGxhcmdlckFycmF5O1xuICAgIGxldCBzbWFsbGVyQXJyYXk7XG4gICAgaWYgKGFycjEubGVuZ3RoID4gYXJyMi5sZW5ndGgpIHtcbiAgICAgIGxhcmdlckFycmF5ID0gYXJyMTtcbiAgICAgIHNtYWxsZXJBcnJheSA9IGFycjI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhcmdlckFycmF5ID0gYXJyMjtcbiAgICAgIHNtYWxsZXJBcnJheSA9IGFycjE7XG4gICAgfVxuICAgIG1hdGNoZXNBbGwgPSBzbWFsbGVyQXJyYXkuZXZlcnkoZWxlbSA9PiBsYXJnZXJBcnJheS5pbmRleE9mKGVsZW0pICE9PSAtMSk7XG4gICAgcmV0dXJuIG1hdGNoZXNBbGw7XG4gIH0sXG4gIGZpbHRlckJ5VXJsUGFyYW1zOiAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc9JylbMF07XG4gICAgY29uc3Qgc2VhcmNoUGFyYW0gPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc9JylbMV07XG5cbiAgICBzd2l0Y2ggKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICBjYXNlICc/cSc6XG4gICAgICAgIExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nID0gZGVjb2RlVVJJKHNlYXJjaFBhcmFtKTtcbiAgICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zZWFyY2goTGlzdEZpbHRlci5zZWFyY2hTdHJpbmcpO1xuICAgICAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRRdWVyaWVzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnP3R5cGUnOlxuICAgICAgICAkKGBpbnB1dFt0eXBlPWNoZWNrYm94XVt2YWx1ZT0ke3NlYXJjaFBhcmFtfV1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMucHVzaChzZWFyY2hQYXJhbSk7XG4gICAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcblxuICAgICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZXMoKS50eXBlICE9PSBudWxsICYmIGl0ZW0udmFsdWVzKCkudHlwZS5pbmRleE9mKHNlYXJjaFBhcmFtKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0sXG4gIGNsZWFyQWxsRmlsdGVyczogKCkgPT4ge1xuICAgICQoJy5jbGVhcl9maWx0ZXJzJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyA9ICcnO1xuICAgICAgTGlzdEZpbHRlci5sb2NhdGlvbiA9ICcnO1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zZWFyY2goKTtcbiAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QuZmlsdGVyKCk7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNvcnQoJ25hbWUnLCB7IG9yZGVyOiAnYXNjJyB9KTtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT09ICcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvb3Nod2EvbGlzdC5odG1sJztcbiAgICAgIH1cblxuICAgICAgTGlzdEZpbHRlci5jbGVhckZvcm1JbnB1dHMoKTtcbiAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdHMoKTtcbiAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xlYXJGb3JtSW5wdXRzOiAoKSA9PiB7XG4gICAgJCgnLnNlYXJjaF9faW5wdXQnKS52YWwoJycpO1xuICAgICQoJy5kcm9wZG93bicpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAkKCcuY291bnRyeS1kcm9wZG93bicpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gIH0sXG4gIGRpc3BsYXlSZXN1bHRzOiAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvdW50ID0gJCgnLnByb2plY3QnKS5sZW5ndGg7XG4gICAgJCgnLnJlc3VsdHMtY291bnQnKS5odG1sKGA8cD5EaXNwbGF5aW5nICR7cHJvamVjdENvdW50fSBQcm9qZWN0czwvcD5gKTtcbiAgfSxcbiAgZGlzcGxheVJlc3VsdFF1ZXJpZXM6ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZWFyY2hQYXJhbXMgPSBbXTtcblxuICAgIGlmIChMaXN0RmlsdGVyLnNlYXJjaFN0cmluZyAhPT0gJycpIHtcbiAgICAgIGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKExpc3RGaWx0ZXIuc2VhcmNoU3RyaW5nKTtcbiAgICB9XG5cbiAgICAkKCdpbnB1dFtuYW1lPVwidHlwZVwiXTpjaGVja2VkJykubWFwKCh2YWwsIGl0ZW0pID0+IGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKGl0ZW0uaWQpKTtcblxuICAgICQoJy5kcm9wZG93bicpLm1hcCgodmFsLCBpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ1NlbGVjdCBvbmUnKSB7XG4gICAgICAgIGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGl2ZVNlYXJjaFBhcmFtcztcbiAgICB9KTtcblxuICAgIGlmIChhY3RpdmVTZWFyY2hQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLnNob3coKTtcbiAgICAgIGlmICgkKCcucHJvamVjdCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuaHRtbChgPHA+Tm8gcmVzdWx0cyBmb3I6ICR7YWN0aXZlU2VhcmNoUGFyYW1zLmpvaW4oJzsgJyl9PC9wPmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnJlc3VsdHMtbWVzc2FnZScpLmh0bWwoYDxwPlJlc3VsdHM6ICR7YWN0aXZlU2VhcmNoUGFyYW1zLmpvaW4oJzsgJyl9PC9wPmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuaGlkZSgpO1xuICAgIH1cbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUxpc3QoKTtcbiAgICB0aGlzLmZpbHRlckJ5U2VhcmNoKCk7XG4gICAgdGhpcy5maWx0ZXJCeURyb3Bkb3ducygpO1xuICAgIHRoaXMuZmlsdGVyQnlMb2NhdGlvbigpO1xuICAgIHRoaXMuZmlsdGVyQnlDaGVja2JveGVzKCk7XG4gICAgdGhpcy5maWx0ZXJCeVVybFBhcmFtcygpO1xuICAgIHRoaXMuY2xlYXJBbGxGaWx0ZXJzKCk7XG4gICAgdGhpcy5jbGVhckZvcm1JbnB1dHMoKTtcbiAgICB0aGlzLmRpc3BsYXlSZXN1bHRzKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbGlzdF9maWx0ZXIuanMiLCJjb25zdCBBZGRJY29uID0ge1xuICBjaXRhdGlvbkNvbnRhaW5lcjogJCgnLmNpdGF0aW9ucycpLmZpbmQoJ2EnKSxcbiAgYWRkSWNvbjogKCkgPT4ge1xuICAgIEFkZEljb24uY2l0YXRpb25Db250YWluZXIuYXBwZW5kKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGxhdW5jaFwiPmxhdW5jaDwvaT4nKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkZEljb24oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9hZGRfaWNvbi5qcyIsImNvbnN0IFNlYXJjaFN1Ym1pdCA9IHtcbiAgbGlzdFVybDogJy9vc2h3YS9saXN0Lmh0bWwnLFxuICBzZWFyY2hTdHJpbmc6ICQoJyNzZWFyY2hmaWVsZCcpLFxuICBzdWJtaXRTZWFyY2g6ICgpID0+IHtcbiAgICAkKCcuanMtc2VhcmNoLXN1Ym1pdCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gU2VhcmNoU3VibWl0LnNlYXJjaFN0cmluZy52YWwoKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIGNvbnN0IHNlYXJjaExpc3RVcmwgPSBgJHt1cmx9JHtTZWFyY2hTdWJtaXQubGlzdFVybH0/cT0ke3F1ZXJ5fWA7XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2VhcmNoTGlzdFVybDtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdFNlYXJjaCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlYXJjaFN1Ym1pdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsImNvbnN0IFRhZ0ZpbHRlciA9IHtcbiAgbGlzdFVybDogJy9vc2h3YS9saXN0Lmh0bWwnLFxuICBmaWx0ZXJCeVRhZzogKCkgPT4ge1xuICAgICQoJy5wcm9qZWN0X190eXBlJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZS10YWcnKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIGNvbnN0IHNlYXJjaExpc3RVcmwgPSBgJHt1cmx9JHtUYWdGaWx0ZXIubGlzdFVybH0/dHlwZT0ke3F1ZXJ5fWA7XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2VhcmNoTGlzdFVybDtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlckJ5VGFnKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGFnRmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy90YWdfZmlsdGVyLmpzIiwiY29uc3QgU3BlY3RydW0gPSB7XG4gIHNjaGVtYXRpY0Rlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gIHRhcmdldENpcmNsZXM6ICgpID0+IHtcbiAgICBTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbiA9ICQoJy5zY2hlbWF0aWMtZGVzY3JpcHRpb24nKTtcblxuICAgICQoJy5jaXJjbGUnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRDaXJjbGUgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignY2lyY2xlLWF0dHInKTtcblxuICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgU3BlY3RydW0uc2hvd0RhdGEoY2xpY2tlZENpcmNsZSk7XG4gICAgfSk7XG4gIH0sXG4gIHNob3dEYXRhOiBjaXJjbGVBdHRyID0+IHtcbiAgICBTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbiA9IFtdLnNsaWNlLmNhbGwoU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24pO1xuICAgIFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uLWF0dHInKSA9PT0gY2lyY2xlQXR0cikge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBhY3RpdmF0ZUZpcnN0Q2lyY2xlOiAoKSA9PiB7XG4gICAgY29uc3QgZmlyc3RDaXJjbGUgPSAkKCcuY2lyY2xlJykuZmlyc3QoKTtcbiAgICBmaXJzdENpcmNsZS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICBTcGVjdHJ1bS5zaG93RGF0YShmaXJzdENpcmNsZS5hdHRyKCdjaXJjbGUtYXR0cicpKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnRhcmdldENpcmNsZXMoKTtcbiAgICB0aGlzLmFjdGl2YXRlRmlyc3RDaXJjbGUoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGVjdHJ1bTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc3BlY3RydW0uanMiXSwic291cmNlUm9vdCI6IiJ9
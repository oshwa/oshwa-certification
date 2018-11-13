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
_add_icon2.default.init();
if (window.location.pathname === '/list.html') {
  _list_filter2.default.init();
}
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
    // put top of section in view
    if ($('.page-section--nav.fixed').length) {
      var $sectionTop = $viewTarget.offset().top;
      $(window).scrollTop(Math.floor($sectionTop));
    }
  },
  handleNavClick: function handleNavClick(clickTarget) {
    $('.js-active-section').removeClass('js-active-section');
    InternalNav.getView(clickTarget);
  },

  fixedInternalNav: function fixedInternalNav() {
    var $window = $(window);
    if ($('.page-section__process-nav').length > 0) {
      var $fixedNav = $('.page-section__process-nav');
      var elTop = $fixedNav.offset().top;
      $window.scroll(function () {
        $fixedNav.toggleClass('fixed', $window.scrollTop() > elTop);
      });
    }
  },
  redirectLearningModules: function redirectLearningModules(path) {
    var softwarePath = 'process/software.html';
    var hardwarePath = 'process/hardware.html';
    var documentationPath = 'process/documentation.html';
    var brandingPath = 'process/branding.html';
    var projectsPath = 'list.html';
    var certifyPath = 'https://application.oshwa.org/apply';

    switch (path) {
      case 'software-process':
        window.location.pathname = softwarePath;
        break;
      case 'hardware-process':
        window.location.pathname = hardwarePath;
        break;
      case 'documentation-process':
        window.location.pathname = documentationPath;
        break;
      case 'branding-process':
        window.location.pathname = brandingPath;
        break;
      case 'certified-projects':
        window.location.pathname = projectsPath;
        break;
      case 'certify-a-project':
        window.location.href = certifyPath;
        break;
      default:
        break;
    }
  },
  resetDropdownsOnBack: function resetDropdownsOnBack() {
    if ($('.learning-module__dropdown')) {
      $('.learning-module__dropdown').prop('selectedIndex', 0);
    }
  },
  handleLearningModuleSelect: function handleLearningModuleSelect() {
    // need to reset dropdown on back
    $('.learning-module__dropdown').on('change', function (e) {
      var learningModuleSelection = $('.learning-module__dropdown').children(':selected').attr('value');
      InternalNav.redirectLearningModules(learningModuleSelection);
    });
  },
  init: function init() {
    this.handleInternalMenu();
    this.getView();
    this.fixedInternalNav();
    this.handleLearningModuleSelect();
    this.resetDropdownsOnBack();
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
      $('.filters').toggleClass('activated');

      if ($('.toggle-filters').hasClass('expanded')) {
        $('.mobile-results-message').addClass('expanded');
        $('.js-trigger-menu').html('close');
      } else {
        $('.mobile-results-message').removeClass('expanded');
        $('.js-trigger-menu').html('tune');
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

  allFilters: undefined,
  searchQueries: undefined,
  typeCheckedValues: [],
  location: 'all',
  activeTag: undefined,
  createList: function createList() {
    ListFilter.projectList = new List('project_data', ListFilter.options);
    if (document.location.href.indexOf('list') > -1) {
      ListFilter.projectList.sort('name', { order: 'asc' });
    }
    ListFilter.setSearchQueryDefaults();
  },
  filterList: function filterList(searchQueries) {
    var hardware = searchQueries.hardware,
        software = searchQueries.software,
        location = searchQueries.location,
        searchParams = searchQueries.searchParams;
    var projectTypes = searchQueries.projectTypes;

    if (typeof projectTypes === 'string') {
      projectTypes = projectTypes.split(',');
    }
    ListFilter.projectList.search(searchParams);
    ListFilter.projectList.filter(function (item) {
      if (item.values().hardware !== null && item.values().software !== null && item.values().type !== null && item.values().location !== null && item.values().hardware.indexOf(hardware) !== -1 && item.values().software.indexOf(software) !== -1 && item.values().location.indexOf(location) !== -1 && ListFilter.matchesAllItems(item.values().type, projectTypes)) {
        return true;
      }
    });

    ListFilter.displayResults();
    ListFilter.displayResultQueries();
  },
  filterBySearch: function filterBySearch() {
    $('#searchfield').on('keyup', function (e) {
      ListFilter.searchQueries.searchParams = $(e.currentTarget).val();
      ListFilter.filterList(ListFilter.searchQueries);
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
      ListFilter.filterList(ListFilter.searchQueries);
    });
  },
  filterByLocation: function filterByLocation() {
    $('.country-dropdown').on('change', function (e) {
      ListFilter.location = $(e.currentTarget).children(':selected').attr('id');
      ListFilter.searchQueries.location = ListFilter.location;
      ListFilter.filterList(ListFilter.searchQueries);
    });
  },
  mapCheckBoxes: function mapCheckBoxes() {
    ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked').map(function () {
      return this.value;
    }).get();

    if (ListFilter.typeCheckedValues.length === 0) {
      ListFilter.typeCheckedValues = ['all'];
    }
    ListFilter.searchQueries.projectTypes = ListFilter.typeCheckedValues;
    ListFilter.filterList(ListFilter.searchQueries);
  },
  filterByCheckboxes: function filterByCheckboxes() {
    $('.filter-container').on('change', function () {
      ListFilter.mapCheckBoxes();
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
        ListFilter.addQueryToSearch(decodeURI(searchParam));
        ListFilter.matchSearchQueriesToUI();
        ListFilter.filterList(ListFilter.searchQueries);
        break;
      case '?type':
        $('input[type=checkbox][value=' + searchParam + ']').prop('checked', true);
        ListFilter.activeTag = searchParam;
        ListFilter.matchSearchQueriesToUI();
        ListFilter.mapCheckBoxes();
        break;
      default:
    }
  },
  clearAllFilters: function clearAllFilters() {
    $('.clear_filters').on('click', function (e) {
      e.preventDefault();
      ListFilter.location = '';
      ListFilter.setSearchQueryDefaults();
      ListFilter.projectList.search();
      ListFilter.projectList.filter();
      ListFilter.projectList.sort('name', { order: 'asc' });
      if (window.location.search !== '') {
        window.location.href = window.location.origin + '/list.html';
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
    var projectsLabel = projectCount === 1 ? 'Project' : 'Projects';
    $('.results-count').html('<p>Displaying ' + projectCount + ' ' + projectsLabel + '</p>');
    $('.mobile-results-message').html('<p>See ' + projectCount + ' ' + projectsLabel + '</p>');
  },
  displayResultQueries: function displayResultQueries() {
    var activeSearchParams = [];
    var searchParams = ListFilter.searchQueries.searchParams;

    if (searchParams !== '') {
      activeSearchParams.push(searchParams);
    }

    $('input[type="checkbox"]:checked').each(function (val, item) {
      return activeSearchParams.push(item.id);
    });

    $('.dropdown').map(function (val, item) {
      if (item.value !== 'Select one') {
        activeSearchParams.push(item.value);
      }
      return activeSearchParams;
    });

    $('.country-dropdown').each(function (val, item) {
      if (item.value !== 'Country') {
        activeSearchParams.push(item.value);
      }
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
  matchSearchQueriesToUI: function matchSearchQueriesToUI() {
    // grabs searchQueries values from the UI
    ListFilter.searchQueries.searchParams = $('#searchfield').val();
    ListFilter.searchQueries.location = $('.country-dropdown').children(':selected').attr('id');
    // default project types value
    var projectTypes = ['all'];
    ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked').each(function (val, type) {
      projectTypes.push(type.value);
    });
    ListFilter.searchQueries.projectTypes = projectTypes;
    ListFilter.searchQueries.hardware = $('#hardware').children(':selected').attr('id');
    ListFilter.searchQueries.software = $('#software').children(':selected').attr('id');
  },
  handleSearchBehavior: function handleSearchBehavior() {
    var hasUrlParam = window.location.search;
    if (hasUrlParam) {
      ListFilter.filterByUrlParams();
    } else {
      ListFilter.matchSearchQueriesToUI();
      ListFilter.filterList(ListFilter.searchQueries);
    }
  },
  addQueryToSearch: function addQueryToSearch(term) {
    $('#searchfield').val(term);
  },
  setSearchQueryDefaults: function setSearchQueryDefaults() {
    ListFilter.searchQueries = {
      software: 'all',
      hardware: 'all',
      projectTypes: ['all'],
      location: 'all',
      searchParams: ''
    };
  },
  blurInputOnHover: function blurInputOnHover() {
    // remove focus from input to fix double link clicking
    $('.projects').on('mouseenter', function () {
      $('#searchfield').blur();
    });
  },
  init: function init() {
    this.createList();
    this.filterBySearch();
    this.filterByDropdowns();
    this.filterByLocation();
    this.filterByCheckboxes();
    this.clearAllFilters();
    this.displayResults();
    this.handleSearchBehavior();
    this.blurInputOnHover();
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
  listUrl: '/list.html',
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
  listUrl: '/list.html',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QxYzk0YmI0YzJlODRkNzE2OTIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbmF2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc3RpY2t5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9pbnRlcm5hbF9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9jb21wYWN0X3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvbW9iaWxlX2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9saXN0X2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2FkZF9pY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL3RhZ19maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL19qcy9zcGVjdHJ1bS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2pzL2Nvb2tpZXNfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItY29va2llcy9zcmMvYnJvd3Nlci1jb29raWVzLmpzIl0sIm5hbWVzIjpbImluaXQiLCJtYXJrZG93bkxpbmtzTmV3UGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJBY2NvcmRpb24iLCJoYW5kbGVDbGljayIsIiQiLCJjbGljayIsImFjdGl2ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsIk92ZXJsYXkiLCJvbkNsaWNrT3ZlcmxheSIsIk1vZGFsIiwib3Blbk1vZGFsIiwiZmluZCIsImNsb3NlTW9kYWwiLCJvbiIsImNsaWNrT3ZlcmxheUNsb3NlTW9kYWwiLCJOYXYiLCJvcGVuTWVudSIsInRvZ2dsZUNsYXNzIiwiY2xvc2VNZW51IiwiU2Nyb2xsIiwic21vb3RoU2Nyb2xsaW5nIiwiJHRhcmciLCJoYXNoIiwiaG9zdDEiLCJob3N0bmFtZSIsImhvc3QyIiwicGF0aDEiLCJyZXBsYWNlIiwicGF0aDIiLCJsZW5ndGgiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJoaWRlU2Nyb2xsb25QYXRoIiwicGF0aCIsImNzcyIsIlNlYXJjaCIsImZpeGVkU2VhcmNoVHJpZ2dlciIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiU2xpZGVyIiwiZ2VuZXJhbFNsaWRlciIsInNsaWNrIiwiYXJyb3dzIiwiZHJhZ2dhYmxlIiwic3dpcGVUb1NsaWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlN0aWNreSIsImNsb3NlU3RpY2t5IiwiVXRpbHMiLCJtYXAiLCJpZHgiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiSW50ZXJuYWxOYXYiLCJoYW5kbGVJbnRlcm5hbE1lbnUiLCIkY3VycmVudFRhcmdldCIsIiRhbGxJdGVtcyIsIm9yZGVyIiwiYXR0ciIsImhhbmRsZU5hdkNsaWNrIiwiZ2V0VmlldyIsInRhcmdldCIsInBhZ2VUYXJnZXQiLCIkdmlld1RhcmdldCIsIiRzZWN0aW9uVG9wIiwiTWF0aCIsImZsb29yIiwiY2xpY2tUYXJnZXQiLCJmaXhlZEludGVybmFsTmF2IiwiJHdpbmRvdyIsIiRmaXhlZE5hdiIsImVsVG9wIiwic2Nyb2xsIiwicmVkaXJlY3RMZWFybmluZ01vZHVsZXMiLCJzb2Z0d2FyZVBhdGgiLCJoYXJkd2FyZVBhdGgiLCJkb2N1bWVudGF0aW9uUGF0aCIsImJyYW5kaW5nUGF0aCIsInByb2plY3RzUGF0aCIsImNlcnRpZnlQYXRoIiwiaHJlZiIsInJlc2V0RHJvcGRvd25zT25CYWNrIiwicHJvcCIsImhhbmRsZUxlYXJuaW5nTW9kdWxlU2VsZWN0IiwibGVhcm5pbmdNb2R1bGVTZWxlY3Rpb24iLCJjaGlsZHJlbiIsIkNvbXBhY3RQYW5lbCIsInNsaWRlVGFyZ2V0IiwidW5kZWZpbmVkIiwic2xpZGVDb250YWluZXIiLCJzZXR1cFNsaWRlQW5pbWF0aW9uIiwicmlnaHQiLCJmYWRlT3V0IiwiaGFuZGxlU2xpZGVEaXNwbGF5IiwiZGF0YVRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldFNsaWRlQ29udGFpbmVyIiwiaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbiIsImhhbmRsZU92ZXJsYXlDbG9zZSIsIk1vYmlsZUZpbHRlcnMiLCJvcGVuRmlsdGVycyIsImh0bWwiLCJMaXN0RmlsdGVyIiwib3B0aW9ucyIsInZhbHVlTmFtZXMiLCJuYW1lIiwiZnV6enlTZWFyY2giLCJzZWFyY2hDbGFzcyIsImRpc3RhbmNlIiwidGhyZXNob2xkIiwibXVsdGlTZWFyY2giLCJwcm9qZWN0TGlzdCIsImFsbEZpbHRlcnMiLCJzZWFyY2hRdWVyaWVzIiwidHlwZUNoZWNrZWRWYWx1ZXMiLCJhY3RpdmVUYWciLCJjcmVhdGVMaXN0IiwiTGlzdCIsImRvY3VtZW50IiwiaW5kZXhPZiIsInNvcnQiLCJzZXRTZWFyY2hRdWVyeURlZmF1bHRzIiwiZmlsdGVyTGlzdCIsImhhcmR3YXJlIiwic29mdHdhcmUiLCJzZWFyY2hQYXJhbXMiLCJwcm9qZWN0VHlwZXMiLCJzcGxpdCIsInNlYXJjaCIsImZpbHRlciIsIml0ZW0iLCJ2YWx1ZXMiLCJ0eXBlIiwibWF0Y2hlc0FsbEl0ZW1zIiwiZGlzcGxheVJlc3VsdHMiLCJkaXNwbGF5UmVzdWx0UXVlcmllcyIsImZpbHRlckJ5U2VhcmNoIiwidmFsIiwiZmlsdGVyQnlEcm9wZG93bnMiLCJlYWNoIiwic2VsZWN0aW9uIiwiZmlsdGVyU2VsZWN0aW9uIiwiaWQiLCJzZWxlY3RlZE9wdGlvbiIsImZpbHRlckJ5TG9jYXRpb24iLCJtYXBDaGVja0JveGVzIiwidmFsdWUiLCJnZXQiLCJmaWx0ZXJCeUNoZWNrYm94ZXMiLCJhcnIxIiwiYXJyMiIsIm1hdGNoZXNBbGwiLCJsYXJnZXJBcnJheSIsInNtYWxsZXJBcnJheSIsImV2ZXJ5IiwiZWxlbSIsImZpbHRlckJ5VXJsUGFyYW1zIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hQYXJhbSIsImFkZFF1ZXJ5VG9TZWFyY2giLCJkZWNvZGVVUkkiLCJtYXRjaFNlYXJjaFF1ZXJpZXNUb1VJIiwiY2xlYXJBbGxGaWx0ZXJzIiwib3JpZ2luIiwiY2xlYXJGb3JtSW5wdXRzIiwicHJvamVjdENvdW50IiwicHJvamVjdHNMYWJlbCIsImFjdGl2ZVNlYXJjaFBhcmFtcyIsInB1c2giLCJzaG93Iiwiam9pbiIsImhpZGUiLCJoYW5kbGVTZWFyY2hCZWhhdmlvciIsImhhc1VybFBhcmFtIiwidGVybSIsImJsdXJJbnB1dE9uSG92ZXIiLCJibHVyIiwiQWRkSWNvbiIsImNpdGF0aW9uQ29udGFpbmVyIiwiYWRkSWNvbiIsImFwcGVuZCIsIlNlYXJjaFN1Ym1pdCIsImxpc3RVcmwiLCJzZWFyY2hTdHJpbmciLCJzZWFyY2hMaXN0VXJsIiwic3VibWl0U2VhcmNoIiwicXVlcnkiLCJ1cmwiLCJUYWdGaWx0ZXIiLCJmaWx0ZXJCeVRhZyIsImZpbHRlckJ5Q2F0ZWdvcnkiLCJwYXJlbnRFbGVtZW50IiwiU3BlY3RydW0iLCJzY2hlbWF0aWNEZXNjcmlwdGlvbiIsInRhcmdldENpcmNsZXMiLCJjbGlja2VkQ2lyY2xlIiwic2libGluZ3MiLCJzaG93RGF0YSIsImNhbGwiLCJmb3JFYWNoIiwiY2lyY2xlQXR0ciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFjdGl2YXRlRmlyc3RDaXJjbGUiLCJmaXJzdENpcmNsZSIsImZpcnN0IiwiQ29va2llc1BvcHVwIiwiY29va2llcyIsInJlcXVpcmUiLCJzbGlkZVVwIiwic2V0VGltZW91dCIsImJvdHRvbSIsInNsaWRlRG93biIsImNsaWNrZWRWYWx1ZSIsInNldCIsImV4cGlyZXMiLCJoaWRlUG9wdXBCYXNlZE9uQ29va2llIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQXBCQTtBQXFCQSxvQkFBVUEsSUFBVjtBQUNBLGdCQUFNQSxJQUFOO0FBQ0EsY0FBSUEsSUFBSjtBQUNBLGtCQUFRQSxJQUFSO0FBQ0EsaUJBQU9BLElBQVA7QUFDQSxpQkFBT0EsSUFBUDtBQUNBLGlCQUFPQSxJQUFQO0FBQ0EsaUJBQU9BLElBQVA7QUFDQSxnQkFBTUMsb0JBQU47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QTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2QxYzk0YmI0YzJlODRkNzE2OTIiLCIvLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IFN0aWNreSBmcm9tICcuL3N0aWNreSc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgSW50ZXJuYWxOYXYgZnJvbSAnLi9pbnRlcm5hbF9uYXYnO1xuaW1wb3J0IENvbXBhY3RQYW5lbCBmcm9tICcuL2NvbXBhY3RfcGFuZWwnO1xuaW1wb3J0IE1vYmlsZUZpbHRlcnMgZnJvbSAnLi9tb2JpbGVfZmlsdGVycyc7XG5pbXBvcnQgTGlzdEZpbHRlciBmcm9tICcuL2xpc3RfZmlsdGVyJztcbmltcG9ydCBBZGRJY29uIGZyb20gJy4vYWRkX2ljb24nO1xuaW1wb3J0IFNlYXJjaFN1Ym1pdCBmcm9tICcuL3NlYXJjaF9zdWJtaXQnO1xuaW1wb3J0IFRhZ0ZpbHRlciBmcm9tICcuL3RhZ19maWx0ZXInO1xuaW1wb3J0IFNwZWN0cnVtIGZyb20gJy4vc3BlY3RydW0nO1xuaW1wb3J0IENvb2tpZXNQb3B1cCBmcm9tICcuL2Nvb2tpZXNfcG9wdXAnO1xuXG4vLyBGb290ZXIuaW5pdCgpO1xuQWNjb3JkaW9uLmluaXQoKTtcbk1vZGFsLmluaXQoKTtcbk5hdi5pbml0KCk7XG5PdmVybGF5LmluaXQoKTtcblNjcm9sbC5pbml0KCk7XG5TZWFyY2guaW5pdCgpO1xuU2xpZGVyLmluaXQoKTtcblN0aWNreS5pbml0KCk7XG5VdGlscy5tYXJrZG93bkxpbmtzTmV3UGFnZSgpO1xuSW50ZXJuYWxOYXYuaW5pdCgpO1xuQ29tcGFjdFBhbmVsLmluaXQoKTtcbk1vYmlsZUZpbHRlcnMuaW5pdCgpO1xuQWRkSWNvbi5pbml0KCk7XG5pZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2xpc3QuaHRtbCcpIHtcbiAgTGlzdEZpbHRlci5pbml0KCk7XG59XG5TZWFyY2hTdWJtaXQuaW5pdCgpO1xuVGFnRmlsdGVyLmluaXQoKTtcblNwZWN0cnVtLmluaXQoKTtcbkNvb2tpZXNQb3B1cC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NjcmlwdHMuanMiLCJjb25zdCBBY2NvcmRpb24gPSB7XG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB7XG4gICAgJCgnLmpzLW9wZW4tYWNjb3JkaW9uJykuY2xpY2soZSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmUgPSAkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgYWN0aXZlID8gJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKSA6ICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVDbGljaygpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY29yZGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvYWNjb3JkaW9uLmpzIiwiY29uc3QgT3ZlcmxheSA9IHtcbiAgb25DbGlja092ZXJsYXkoKSB7XG4gICAgJCgnI292ZXJsYXknKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuanMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnLmpzLWFjdGl2ZS1tZW51JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1tZW51Jyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vbkNsaWNrT3ZlcmxheSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL292ZXJsYXkuanMiLCJjb25zdCBNb2RhbCA9IHtcbiAgb3Blbk1vZGFsOiAoKSA9PiB7XG4gICAgJCgnLmpzLW9wZW4tbW9kYWwnKS5jbGljayhlID0+IHtcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAuZmluZCgnLmpzLXRhcmdldC1tb2RhbCcpXG4gICAgICAgIC5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnanMtYm9keS1tb2RhbC1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xvc2VNb2RhbDogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmpzLWNsb3NlLW1vZGFsJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgICQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdqcy1ib2R5LW1vZGFsLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9LFxuICBjbGlja092ZXJsYXlDbG9zZU1vZGFsOiAoKSA9PiB7XG4gICAgJCgnI292ZXJsYXknKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2pzLWJvZHktbW9kYWwtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLmNsaWNrT3ZlcmxheUNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbW9kYWwuanMiLCJjb25zdCBOYXYgPSB7XG4gIG9wZW5NZW51OiAoKSA9PiB7XG4gICAgJCgnLm1lbnUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLmpzLXRhcmdldC1tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1tZW51Jyk7XG4gICAgICAkKCcubWVudS1idXR0b24nKS50b2dnbGVDbGFzcygnYWN0aXZlLW1lbnUtYnV0dG9uJyk7XG4gICAgICAkKCcjb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xvc2VNZW51OiAoKSA9PiB7XG4gICAgJCgnLmNsb3NlLW1lbnUnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LW1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUnKTtcbiAgICAgICQoJy5tZW51LWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtbWVudS1idXR0b24nKTtcbiAgICAgICQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LW1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUnKTtcbiAgICAgICQoJy50b3AtYmFyX19idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlLW1lbnUtYnV0dG9uJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9uYXYuanMiLCJjb25zdCBTY3JvbGwgPSB7XG4gIHNtb290aFNjcm9sbGluZygpIHtcbiAgICAvLyBTbW9vdGggU2Nyb2xsaW5nIEZ1bmN0aW9uXG4gICAgJCgnYVtocmVmKj1cXFxcI106bm90KFtocmVmPVxcXFwjXSknKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGxldCAkdGFyZyA9ICQoZS5jdXJyZW50VGFyZ2V0Lmhhc2gpO1xuICAgICAgY29uc3QgaG9zdDEgPSBlLmN1cnJlbnRUYXJnZXQuaG9zdG5hbWU7XG4gICAgICBjb25zdCBob3N0MiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgIGNvbnN0IHBhdGgxID0gZS5jdXJyZW50VGFyZ2V0LnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICBjb25zdCBwYXRoMiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpO1xuICAgICAgaWYgKCEkdGFyZy5sZW5ndGgpIHtcbiAgICAgICAgJHRhcmcgPSAkKGBbbmFtZT0ke2UuY3VycmVudFRhcmdldC5oYXNoLnNsaWNlKDEpfV1gKTtcbiAgICAgIH1cbiAgICAgIGlmICgkdGFyZy5sZW5ndGggJiYgKGhvc3QxID09PSBob3N0MiB8fCBwYXRoMSA9PT0gcGF0aDIpKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkdGFyZy5vZmZzZXQoKS50b3AgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LFxuICBoaWRlU2Nyb2xsb25QYXRoKHBhdGgpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBwYXRoKSB7XG4gICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxpbmcoKTtcbiAgICB0aGlzLmhpZGVTY3JvbGxvblBhdGgoJy9saXN0Lmh0bWwnKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3Njcm9sbC5qcyIsImNvbnN0IFNlYXJjaCA9IHtcbiAgZml4ZWRTZWFyY2hUcmlnZ2VyKCkge1xuICAgIC8vIFNlYXJjaCBDbGljayBCZWhhdmlvclxuICAgICQoJy5qcy10cmlnZ2VyLXNlYXJjaCcpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuYWRkQ2xhc3MoJ2pzLWFjdGl2ZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5hZGRDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5maXhlZFNlYXJjaFRyaWdnZXIoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NlYXJjaC5qcyIsImNvbnN0IFNsaWRlciA9IHtcbiAgZ2VuZXJhbFNsaWRlcigpIHtcbiAgICAvLyBTbGlkZXJcbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHN3aXBlVG9TbGlkZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmFsU2xpZGVyKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zbGlkZXIuanMiLCJjb25zdCBTdGlja3kgPSB7XG4gIGNsb3NlU3RpY2t5KCkge1xuICAgICQoJy5qcy1jbG9zZS1zdGlja3knKS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcuanMtdGFyZ2V0LXN0aWNreScpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNsb3NlU3RpY2t5KCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RpY2t5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9zdGlja3kuanMiLCJjb25zdCBVdGlscyA9IHtcbiAgbWFya2Rvd25MaW5rc05ld1BhZ2U6ICgpID0+IHtcbiAgICAkKCcubWFya2Rvd24gYScpLm1hcCgoaWR4LCBsaW5rKSA9PiB7XG4gICAgICByZXR1cm4gbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvdXRpbHMuanMiLCJjb25zdCBJbnRlcm5hbE5hdiA9IHtcbiAgaGFuZGxlSW50ZXJuYWxNZW51KCkge1xuICAgICQoJy5pbnRlcm5hbC1tZW51X19pdGVtJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkY3VycmVudFRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0ICRhbGxJdGVtcyA9ICQoJy5pbnRlcm5hbC1tZW51X19pdGVtJyk7XG4gICAgICAkYWxsSXRlbXMucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZS1pdGVtJyk7XG4gICAgICAkY3VycmVudFRhcmdldC5hZGRDbGFzcygnanMtYWN0aXZlLWl0ZW0nKTtcbiAgICAgIGNvbnN0IG9yZGVyID0gJGN1cnJlbnRUYXJnZXQuYXR0cignZGF0YS1vcmRlcicpO1xuICAgICAgSW50ZXJuYWxOYXYuaGFuZGxlTmF2Q2xpY2sob3JkZXIpO1xuICAgIH0pO1xuICB9LFxuICBnZXRWaWV3KHRhcmdldCkge1xuICAgIGNvbnN0IHBhZ2VUYXJnZXQgPSB0YXJnZXQgfHwgJzEnO1xuICAgIGNvbnN0ICR2aWV3VGFyZ2V0ID0gJChgW2RhdGEtbmF2LW9yZGVyPScke3BhZ2VUYXJnZXR9J11gKTtcbiAgICAkdmlld1RhcmdldC5hZGRDbGFzcygnanMtYWN0aXZlLXNlY3Rpb24nKTtcbiAgICAvLyBwdXQgdG9wIG9mIHNlY3Rpb24gaW4gdmlld1xuICAgIGlmICgkKCcucGFnZS1zZWN0aW9uLS1uYXYuZml4ZWQnKS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0ICRzZWN0aW9uVG9wID0gJHZpZXdUYXJnZXQub2Zmc2V0KCkudG9wO1xuICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcChNYXRoLmZsb29yKCRzZWN0aW9uVG9wKSk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVOYXZDbGljayhjbGlja1RhcmdldCkge1xuICAgICQoJy5qcy1hY3RpdmUtc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUtc2VjdGlvbicpO1xuICAgIEludGVybmFsTmF2LmdldFZpZXcoY2xpY2tUYXJnZXQpO1xuICB9LFxuICBmaXhlZEludGVybmFsTmF2OiAoKSA9PiB7XG4gICAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICBpZiAoJCgnLnBhZ2Utc2VjdGlvbl9fcHJvY2Vzcy1uYXYnKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCAkZml4ZWROYXYgPSAkKCcucGFnZS1zZWN0aW9uX19wcm9jZXNzLW5hdicpO1xuICAgICAgY29uc3QgZWxUb3AgPSAkZml4ZWROYXYub2Zmc2V0KCkudG9wO1xuICAgICAgJHdpbmRvdy5zY3JvbGwoKCkgPT4ge1xuICAgICAgICAkZml4ZWROYXYudG9nZ2xlQ2xhc3MoJ2ZpeGVkJywgJHdpbmRvdy5zY3JvbGxUb3AoKSA+IGVsVG9wKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmVkaXJlY3RMZWFybmluZ01vZHVsZXM6IHBhdGggPT4ge1xuICAgIGNvbnN0IHNvZnR3YXJlUGF0aCA9ICdwcm9jZXNzL3NvZnR3YXJlLmh0bWwnO1xuICAgIGNvbnN0IGhhcmR3YXJlUGF0aCA9ICdwcm9jZXNzL2hhcmR3YXJlLmh0bWwnO1xuICAgIGNvbnN0IGRvY3VtZW50YXRpb25QYXRoID0gJ3Byb2Nlc3MvZG9jdW1lbnRhdGlvbi5odG1sJztcbiAgICBjb25zdCBicmFuZGluZ1BhdGggPSAncHJvY2Vzcy9icmFuZGluZy5odG1sJztcbiAgICBjb25zdCBwcm9qZWN0c1BhdGggPSAnbGlzdC5odG1sJztcbiAgICBjb25zdCBjZXJ0aWZ5UGF0aCA9ICdodHRwczovL2FwcGxpY2F0aW9uLm9zaHdhLm9yZy9hcHBseSc7XG5cbiAgICBzd2l0Y2ggKHBhdGgpIHtcbiAgICAgIGNhc2UgJ3NvZnR3YXJlLXByb2Nlc3MnOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBzb2Z0d2FyZVBhdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGFyZHdhcmUtcHJvY2Vzcyc6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IGhhcmR3YXJlUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2N1bWVudGF0aW9uLXByb2Nlc3MnOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBkb2N1bWVudGF0aW9uUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdicmFuZGluZy1wcm9jZXNzJzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gYnJhbmRpbmdQYXRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlcnRpZmllZC1wcm9qZWN0cyc6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IHByb2plY3RzUGF0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZXJ0aWZ5LWEtcHJvamVjdCc6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2VydGlmeVBhdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuICByZXNldERyb3Bkb3duc09uQmFjazogKCkgPT4ge1xuICAgIGlmICgkKCcubGVhcm5pbmctbW9kdWxlX19kcm9wZG93bicpKSB7XG4gICAgICAkKCcubGVhcm5pbmctbW9kdWxlX19kcm9wZG93bicpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUxlYXJuaW5nTW9kdWxlU2VsZWN0OiAoKSA9PiB7XG4gICAgLy8gbmVlZCB0byByZXNldCBkcm9wZG93biBvbiBiYWNrXG4gICAgJCgnLmxlYXJuaW5nLW1vZHVsZV9fZHJvcGRvd24nKS5vbignY2hhbmdlJywgZSA9PiB7XG4gICAgICBjb25zdCBsZWFybmluZ01vZHVsZVNlbGVjdGlvbiA9ICQoJy5sZWFybmluZy1tb2R1bGVfX2Ryb3Bkb3duJylcbiAgICAgICAgLmNoaWxkcmVuKCc6c2VsZWN0ZWQnKVxuICAgICAgICAuYXR0cigndmFsdWUnKTtcbiAgICAgIEludGVybmFsTmF2LnJlZGlyZWN0TGVhcm5pbmdNb2R1bGVzKGxlYXJuaW5nTW9kdWxlU2VsZWN0aW9uKTtcbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZUludGVybmFsTWVudSgpO1xuICAgIHRoaXMuZ2V0VmlldygpO1xuICAgIHRoaXMuZml4ZWRJbnRlcm5hbE5hdigpO1xuICAgIHRoaXMuaGFuZGxlTGVhcm5pbmdNb2R1bGVTZWxlY3QoKTtcbiAgICB0aGlzLnJlc2V0RHJvcGRvd25zT25CYWNrKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJuYWxOYXY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2ludGVybmFsX25hdi5qcyIsImNvbnN0IENvbXBhY3RQYW5lbCA9IHtcbiAgc2xpZGVUYXJnZXQ6IHVuZGVmaW5lZCxcbiAgc2xpZGVDb250YWluZXI6IHVuZGVmaW5lZCxcbiAgc2V0dXBTbGlkZUFuaW1hdGlvbjogKCkgPT4ge1xuICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldCA9ICQoJy5zbGlkZS1wYW5lbF9fY29udGFpbmVyJyk7XG4gICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyID0gJCgnLnNsaWRlLXBhbmVsJyk7XG5cbiAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnLTEwMCUnIH0sICdzbG93JykuZmFkZU91dCg1KTtcbiAgICBDb21wYWN0UGFuZWwuc2xpZGVDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgfSxcbiAgaGFuZGxlU2xpZGVEaXNwbGF5OiAoKSA9PiB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc2xpZGUtcGFuZWxfX29wZW4tdHJpZ2dlcicsIGUgPT4ge1xuICAgICAgY29uc3QgZGF0YVRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVybScpO1xuICAgICAgY29uc3QgdGFyZ2V0U2xpZGVDb250YWluZXIgPSAkKGBbZGF0YS12YWx1ZT1cIiR7ZGF0YVRhcmdldH1cIl1gKTtcbiAgICAgIGlmICh0YXJnZXRTbGlkZUNvbnRhaW5lci5oYXNDbGFzcygnaXMtdmlzaWJsZScpKSB7XG4gICAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgNDAwKS5mYWRlT3V0KDUpO1xuICAgICAgICB0YXJnZXRTbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlVGFyZ2V0LmFuaW1hdGUoeyByaWdodDogJzAlJyB9LCA0MDApLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB0YXJnZXRTbGlkZUNvbnRhaW5lci5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgICAkKCcjb3ZlcmxheScpLmFkZENsYXNzKCdqcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlU2xpZGVDbG9zZUJ1dHRvbjogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnNsaWRlLXBhbmVsX19jbG9zZS10cmlnZ2VyJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBDb21wYWN0UGFuZWwuc2xpZGVUYXJnZXQuYW5pbWF0ZSh7IHJpZ2h0OiAnLTEwMCUnIH0sICdzbG93JykuZmFkZU91dCg1KTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZUNvbnRhaW5lci5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICAgJCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZU92ZXJsYXlDbG9zZTogKCkgPT4ge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI292ZXJsYXknLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbXBhY3RQYW5lbC5zbGlkZVRhcmdldC5hbmltYXRlKHsgcmlnaHQ6ICctMTAwJScgfSwgJ3Nsb3cnKS5mYWRlT3V0KDUpO1xuICAgICAgQ29tcGFjdFBhbmVsLnNsaWRlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXR1cFNsaWRlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZURpc3BsYXkoKTtcbiAgICB0aGlzLmhhbmRsZVNsaWRlQ2xvc2VCdXR0b24oKTtcbiAgICB0aGlzLmhhbmRsZU92ZXJsYXlDbG9zZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhY3RQYW5lbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvY29tcGFjdF9wYW5lbC5qcyIsImNvbnN0IE1vYmlsZUZpbHRlcnMgPSB7XG4gIG9wZW5GaWx0ZXJzOiAoKSA9PiB7XG4gICAgJCgnLnRvZ2dsZS1maWx0ZXJzJykuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnLmZpbHRlci1jb250YWluZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcudG9nZ2xlLWZpbHRlcnMnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICQoJy5maWx0ZXJzJykudG9nZ2xlQ2xhc3MoJ2FjdGl2YXRlZCcpO1xuXG4gICAgICBpZiAoJCgnLnRvZ2dsZS1maWx0ZXJzJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgJCgnLm1vYmlsZS1yZXN1bHRzLW1lc3NhZ2UnKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgICAgJCgnLmpzLXRyaWdnZXItbWVudScpLmh0bWwoJ2Nsb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcubW9iaWxlLXJlc3VsdHMtbWVzc2FnZScpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuICAgICAgICAkKCcuanMtdHJpZ2dlci1tZW51JykuaHRtbCgndHVuZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMub3BlbkZpbHRlcnMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2JpbGVGaWx0ZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9tb2JpbGVfZmlsdGVycy5qcyIsImNvbnN0IExpc3RGaWx0ZXIgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YWx1ZU5hbWVzOiBbXG4gICAgICAnbmFtZScsXG4gICAgICAndWlkJyxcbiAgICAgICd2ZXJzaW9uJyxcbiAgICAgICdrZXl3b3JkcycsXG4gICAgICAncmVzcG9uc2libGUtcGFydHknLFxuICAgICAgeyBuYW1lOiAnZGF0ZScsIGF0dHI6ICdkYXRlJyB9LFxuICAgICAgeyBuYW1lOiAndHlwZScsIGF0dHI6ICd0eXBlJyB9LFxuICAgICAgeyBuYW1lOiAnaGFyZHdhcmUnLCBhdHRyOiAnaGFyZHdhcmUnIH0sXG4gICAgICB7IG5hbWU6ICdkb2N1bWVudGF0aW9uJywgYXR0cjogJ2RvY3VtZW50YXRpb24nIH0sXG4gICAgICB7IG5hbWU6ICdzb2Z0d2FyZScsIGF0dHI6ICdzb2Z0d2FyZScgfSxcbiAgICAgIHsgbmFtZTogJ2xvY2F0aW9uJywgYXR0cjogJ2xvY2F0aW9uJyB9XG4gICAgXSxcbiAgICBmdXp6eVNlYXJjaDoge1xuICAgICAgc2VhcmNoQ2xhc3M6ICdmdXp6eS1zZWFyY2gnLFxuICAgICAgbG9jYXRpb246IDAsXG4gICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgdGhyZXNob2xkOiAwLjIsXG4gICAgICBtdWx0aVNlYXJjaDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgcHJvamVjdExpc3Q6IHVuZGVmaW5lZCxcblxuICBhbGxGaWx0ZXJzOiB1bmRlZmluZWQsXG4gIHNlYXJjaFF1ZXJpZXM6IHVuZGVmaW5lZCxcbiAgdHlwZUNoZWNrZWRWYWx1ZXM6IFtdLFxuICBsb2NhdGlvbjogJ2FsbCcsXG4gIGFjdGl2ZVRhZzogdW5kZWZpbmVkLFxuICBjcmVhdGVMaXN0OiAoKSA9PiB7XG4gICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdCA9IG5ldyBMaXN0KCdwcm9qZWN0X2RhdGEnLCBMaXN0RmlsdGVyLm9wdGlvbnMpO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2xpc3QnKSA+IC0xKSB7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNvcnQoJ25hbWUnLCB7IG9yZGVyOiAnYXNjJyB9KTtcbiAgICB9XG4gICAgTGlzdEZpbHRlci5zZXRTZWFyY2hRdWVyeURlZmF1bHRzKCk7XG4gIH0sXG4gIGZpbHRlckxpc3Q6IHNlYXJjaFF1ZXJpZXMgPT4ge1xuICAgIGNvbnN0IHsgaGFyZHdhcmUsIHNvZnR3YXJlLCBsb2NhdGlvbiwgc2VhcmNoUGFyYW1zIH0gPSBzZWFyY2hRdWVyaWVzO1xuICAgIGxldCB7IHByb2plY3RUeXBlcyB9ID0gc2VhcmNoUXVlcmllcztcbiAgICBpZiAodHlwZW9mIHByb2plY3RUeXBlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHByb2plY3RUeXBlcyA9IHByb2plY3RUeXBlcy5zcGxpdCgnLCcpO1xuICAgIH1cbiAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LnNlYXJjaChzZWFyY2hQYXJhbXMpO1xuICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtLnZhbHVlcygpLmhhcmR3YXJlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkuc29mdHdhcmUgIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS50eXBlICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0udmFsdWVzKCkubG9jYXRpb24gIT09IG51bGwgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5oYXJkd2FyZS5pbmRleE9mKGhhcmR3YXJlKSAhPT0gLTEgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5zb2Z0d2FyZS5pbmRleE9mKHNvZnR3YXJlKSAhPT0gLTEgJiZcbiAgICAgICAgaXRlbS52YWx1ZXMoKS5sb2NhdGlvbi5pbmRleE9mKGxvY2F0aW9uKSAhPT0gLTEgJiZcbiAgICAgICAgTGlzdEZpbHRlci5tYXRjaGVzQWxsSXRlbXMoaXRlbS52YWx1ZXMoKS50eXBlLCBwcm9qZWN0VHlwZXMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBMaXN0RmlsdGVyLmRpc3BsYXlSZXN1bHRzKCk7XG4gICAgTGlzdEZpbHRlci5kaXNwbGF5UmVzdWx0UXVlcmllcygpO1xuICB9LFxuICBmaWx0ZXJCeVNlYXJjaDogKCkgPT4ge1xuICAgICQoJyNzZWFyY2hmaWVsZCcpLm9uKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzLnNlYXJjaFBhcmFtcyA9ICQoZS5jdXJyZW50VGFyZ2V0KS52YWwoKTtcbiAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdChMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMpO1xuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeURyb3Bkb3duczogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIuYWxsRmlsdGVycyA9ICQoJy5kcm9wZG93bicpO1xuICAgIExpc3RGaWx0ZXIuYWxsRmlsdGVycy5vbignY2hhbmdlJywgZSA9PiB7XG4gICAgICBMaXN0RmlsdGVyLmFsbEZpbHRlcnMuZWFjaChzZWxlY3Rpb24gPT4ge1xuICAgICAgICAkKHNlbGVjdGlvbikuZWFjaCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyU2VsZWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJzpzZWxlY3RlZCcpXG4gICAgICAgICAgICAuYXR0cignaWQnKTtcbiAgICAgICAgICBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXNbZmlsdGVyU2VsZWN0aW9uXSA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcyk7XG4gICAgfSk7XG4gIH0sXG4gIGZpbHRlckJ5TG9jYXRpb246ICgpID0+IHtcbiAgICAkKCcuY291bnRyeS1kcm9wZG93bicpLm9uKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIExpc3RGaWx0ZXIubG9jYXRpb24gPSAkKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgLmNoaWxkcmVuKCc6c2VsZWN0ZWQnKVxuICAgICAgICAuYXR0cignaWQnKTtcbiAgICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5sb2NhdGlvbiA9IExpc3RGaWx0ZXIubG9jYXRpb247XG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzKTtcbiAgICB9KTtcbiAgfSxcbiAgbWFwQ2hlY2tCb3hlczogKCkgPT4ge1xuICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpXG4gICAgICAubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0pXG4gICAgICAuZ2V0KCk7XG5cbiAgICBpZiAoTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIExpc3RGaWx0ZXIudHlwZUNoZWNrZWRWYWx1ZXMgPSBbJ2FsbCddO1xuICAgIH1cbiAgICBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMucHJvamVjdFR5cGVzID0gTGlzdEZpbHRlci50eXBlQ2hlY2tlZFZhbHVlcztcbiAgICBMaXN0RmlsdGVyLmZpbHRlckxpc3QoTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzKTtcbiAgfSxcbiAgZmlsdGVyQnlDaGVja2JveGVzOiAoKSA9PiB7XG4gICAgJCgnLmZpbHRlci1jb250YWluZXInKS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgTGlzdEZpbHRlci5tYXBDaGVja0JveGVzKCk7XG4gICAgfSk7XG4gIH0sXG4gIG1hdGNoZXNBbGxJdGVtczogKGFycjEsIGFycjIpID0+IHtcbiAgICBsZXQgbWF0Y2hlc0FsbDtcbiAgICBsZXQgbGFyZ2VyQXJyYXk7XG4gICAgbGV0IHNtYWxsZXJBcnJheTtcbiAgICBpZiAoYXJyMS5sZW5ndGggPiBhcnIyLmxlbmd0aCkge1xuICAgICAgbGFyZ2VyQXJyYXkgPSBhcnIxO1xuICAgICAgc21hbGxlckFycmF5ID0gYXJyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFyZ2VyQXJyYXkgPSBhcnIyO1xuICAgICAgc21hbGxlckFycmF5ID0gYXJyMTtcbiAgICB9XG4gICAgbWF0Y2hlc0FsbCA9IHNtYWxsZXJBcnJheS5ldmVyeShlbGVtID0+IGxhcmdlckFycmF5LmluZGV4T2YoZWxlbSkgIT09IC0xKTtcbiAgICByZXR1cm4gbWF0Y2hlc0FsbDtcbiAgfSxcbiAgZmlsdGVyQnlVcmxQYXJhbXM6ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz0nKVswXTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz0nKVsxXTtcbiAgICBzd2l0Y2ggKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICBjYXNlICc/cSc6XG4gICAgICAgIExpc3RGaWx0ZXIuYWRkUXVlcnlUb1NlYXJjaChkZWNvZGVVUkkoc2VhcmNoUGFyYW0pKTtcbiAgICAgICAgTGlzdEZpbHRlci5tYXRjaFNlYXJjaFF1ZXJpZXNUb1VJKCk7XG4gICAgICAgIExpc3RGaWx0ZXIuZmlsdGVyTGlzdChMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz90eXBlJzpcbiAgICAgICAgJChgaW5wdXRbdHlwZT1jaGVja2JveF1bdmFsdWU9JHtzZWFyY2hQYXJhbX1dYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICBMaXN0RmlsdGVyLmFjdGl2ZVRhZyA9IHNlYXJjaFBhcmFtO1xuICAgICAgICBMaXN0RmlsdGVyLm1hdGNoU2VhcmNoUXVlcmllc1RvVUkoKTtcbiAgICAgICAgTGlzdEZpbHRlci5tYXBDaGVja0JveGVzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0sXG4gIGNsZWFyQWxsRmlsdGVyczogKCkgPT4ge1xuICAgICQoJy5jbGVhcl9maWx0ZXJzJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBMaXN0RmlsdGVyLmxvY2F0aW9uID0gJyc7XG4gICAgICBMaXN0RmlsdGVyLnNldFNlYXJjaFF1ZXJ5RGVmYXVsdHMoKTtcbiAgICAgIExpc3RGaWx0ZXIucHJvamVjdExpc3Quc2VhcmNoKCk7XG4gICAgICBMaXN0RmlsdGVyLnByb2plY3RMaXN0LmZpbHRlcigpO1xuICAgICAgTGlzdEZpbHRlci5wcm9qZWN0TGlzdC5zb3J0KCduYW1lJywgeyBvcmRlcjogJ2FzYycgfSk7XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCAhPT0gJycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9saXN0Lmh0bWwnO1xuICAgICAgfVxuICAgICAgTGlzdEZpbHRlci5jbGVhckZvcm1JbnB1dHMoKTtcbiAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdHMoKTtcbiAgICAgIExpc3RGaWx0ZXIuZGlzcGxheVJlc3VsdFF1ZXJpZXMoKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xlYXJGb3JtSW5wdXRzOiAoKSA9PiB7XG4gICAgJCgnLnNlYXJjaF9faW5wdXQnKS52YWwoJycpO1xuICAgICQoJy5kcm9wZG93bicpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAkKCcuY291bnRyeS1kcm9wZG93bicpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gIH0sXG4gIGRpc3BsYXlSZXN1bHRzOiAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvdW50ID0gJCgnLnByb2plY3QnKS5sZW5ndGg7XG4gICAgY29uc3QgcHJvamVjdHNMYWJlbCA9IHByb2plY3RDb3VudCA9PT0gMSA/IGBQcm9qZWN0YCA6IGBQcm9qZWN0c2A7XG4gICAgJCgnLnJlc3VsdHMtY291bnQnKS5odG1sKGA8cD5EaXNwbGF5aW5nICR7cHJvamVjdENvdW50fSAke3Byb2plY3RzTGFiZWx9PC9wPmApO1xuICAgICQoJy5tb2JpbGUtcmVzdWx0cy1tZXNzYWdlJykuaHRtbChgPHA+U2VlICR7cHJvamVjdENvdW50fSAke3Byb2plY3RzTGFiZWx9PC9wPmApO1xuICB9LFxuICBkaXNwbGF5UmVzdWx0UXVlcmllczogKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVNlYXJjaFBhcmFtcyA9IFtdO1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXM7XG4gICAgaWYgKHNlYXJjaFBhcmFtcyAhPT0gJycpIHtcbiAgICAgIGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKHNlYXJjaFBhcmFtcyk7XG4gICAgfVxuXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5lYWNoKCh2YWwsIGl0ZW0pID0+IGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKGl0ZW0uaWQpKTtcblxuICAgICQoJy5kcm9wZG93bicpLm1hcCgodmFsLCBpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ1NlbGVjdCBvbmUnKSB7XG4gICAgICAgIGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGl2ZVNlYXJjaFBhcmFtcztcbiAgICB9KTtcblxuICAgICQoJy5jb3VudHJ5LWRyb3Bkb3duJykuZWFjaCgodmFsLCBpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS52YWx1ZSAhPT0gJ0NvdW50cnknKSB7XG4gICAgICAgIGFjdGl2ZVNlYXJjaFBhcmFtcy5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFjdGl2ZVNlYXJjaFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuc2hvdygpO1xuICAgICAgaWYgKCQoJy5wcm9qZWN0JykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5odG1sKGA8cD5ObyByZXN1bHRzIGZvcjogJHthY3RpdmVTZWFyY2hQYXJhbXMuam9pbignOyAnKX08L3A+YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCcucmVzdWx0cy1tZXNzYWdlJykuaHRtbChgPHA+UmVzdWx0czogJHthY3RpdmVTZWFyY2hQYXJhbXMuam9pbignOyAnKX08L3A+YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5yZXN1bHRzLW1lc3NhZ2UnKS5oaWRlKCk7XG4gICAgfVxuICB9LFxuICBtYXRjaFNlYXJjaFF1ZXJpZXNUb1VJOiAoKSA9PiB7XG4gICAgLy8gZ3JhYnMgc2VhcmNoUXVlcmllcyB2YWx1ZXMgZnJvbSB0aGUgVUlcbiAgICBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMuc2VhcmNoUGFyYW1zID0gJCgnI3NlYXJjaGZpZWxkJykudmFsKCk7XG4gICAgTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzLmxvY2F0aW9uID0gJCgnLmNvdW50cnktZHJvcGRvd24nKVxuICAgICAgLmNoaWxkcmVuKCc6c2VsZWN0ZWQnKVxuICAgICAgLmF0dHIoJ2lkJyk7XG4gICAgLy8gZGVmYXVsdCBwcm9qZWN0IHR5cGVzIHZhbHVlXG4gICAgY29uc3QgcHJvamVjdFR5cGVzID0gWydhbGwnXTtcbiAgICBMaXN0RmlsdGVyLnR5cGVDaGVja2VkVmFsdWVzID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5lYWNoKCh2YWwsIHR5cGUpID0+IHtcbiAgICAgIHByb2plY3RUeXBlcy5wdXNoKHR5cGUudmFsdWUpO1xuICAgIH0pO1xuICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5wcm9qZWN0VHlwZXMgPSBwcm9qZWN0VHlwZXM7XG4gICAgTGlzdEZpbHRlci5zZWFyY2hRdWVyaWVzLmhhcmR3YXJlID0gJCgnI2hhcmR3YXJlJylcbiAgICAgIC5jaGlsZHJlbignOnNlbGVjdGVkJylcbiAgICAgIC5hdHRyKCdpZCcpO1xuICAgIExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcy5zb2Z0d2FyZSA9ICQoJyNzb2Z0d2FyZScpXG4gICAgICAuY2hpbGRyZW4oJzpzZWxlY3RlZCcpXG4gICAgICAuYXR0cignaWQnKTtcbiAgfSxcbiAgaGFuZGxlU2VhcmNoQmVoYXZpb3I6ICgpID0+IHtcbiAgICBjb25zdCBoYXNVcmxQYXJhbSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgaWYgKGhhc1VybFBhcmFtKSB7XG4gICAgICBMaXN0RmlsdGVyLmZpbHRlckJ5VXJsUGFyYW1zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIExpc3RGaWx0ZXIubWF0Y2hTZWFyY2hRdWVyaWVzVG9VSSgpO1xuICAgICAgTGlzdEZpbHRlci5maWx0ZXJMaXN0KExpc3RGaWx0ZXIuc2VhcmNoUXVlcmllcyk7XG4gICAgfVxuICB9LFxuICBhZGRRdWVyeVRvU2VhcmNoOiB0ZXJtID0+IHtcbiAgICAkKCcjc2VhcmNoZmllbGQnKS52YWwodGVybSk7XG4gIH0sXG4gIHNldFNlYXJjaFF1ZXJ5RGVmYXVsdHM6ICgpID0+IHtcbiAgICBMaXN0RmlsdGVyLnNlYXJjaFF1ZXJpZXMgPSB7XG4gICAgICBzb2Z0d2FyZTogJ2FsbCcsXG4gICAgICBoYXJkd2FyZTogJ2FsbCcsXG4gICAgICBwcm9qZWN0VHlwZXM6IFsnYWxsJ10sXG4gICAgICBsb2NhdGlvbjogJ2FsbCcsXG4gICAgICBzZWFyY2hQYXJhbXM6ICcnXG4gICAgfTtcbiAgfSxcbiAgYmx1cklucHV0T25Ib3ZlcjogKCkgPT4ge1xuICAgIC8vIHJlbW92ZSBmb2N1cyBmcm9tIGlucHV0IHRvIGZpeCBkb3VibGUgbGluayBjbGlja2luZ1xuICAgICQoJy5wcm9qZWN0cycpLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgJCgnI3NlYXJjaGZpZWxkJykuYmx1cigpO1xuICAgIH0pO1xuICB9LFxuICBpbml0KCkge1xuICAgIHRoaXMuY3JlYXRlTGlzdCgpO1xuICAgIHRoaXMuZmlsdGVyQnlTZWFyY2goKTtcbiAgICB0aGlzLmZpbHRlckJ5RHJvcGRvd25zKCk7XG4gICAgdGhpcy5maWx0ZXJCeUxvY2F0aW9uKCk7XG4gICAgdGhpcy5maWx0ZXJCeUNoZWNrYm94ZXMoKTtcbiAgICB0aGlzLmNsZWFyQWxsRmlsdGVycygpO1xuICAgIHRoaXMuZGlzcGxheVJlc3VsdHMoKTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaEJlaGF2aW9yKCk7XG4gICAgdGhpcy5ibHVySW5wdXRPbkhvdmVyKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdEZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvbGlzdF9maWx0ZXIuanMiLCJjb25zdCBBZGRJY29uID0ge1xuICBjaXRhdGlvbkNvbnRhaW5lcjogJCgnLmNpdGF0aW9ucycpLmZpbmQoJ2EnKSxcbiAgYWRkSWNvbjogKCkgPT4ge1xuICAgIEFkZEljb24uY2l0YXRpb25Db250YWluZXIuYXBwZW5kKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGxhdW5jaFwiPmxhdW5jaDwvaT4nKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkZEljb24oKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL19qcy9hZGRfaWNvbi5qcyIsImNvbnN0IFNlYXJjaFN1Ym1pdCA9IHtcbiAgbGlzdFVybDogJy9saXN0Lmh0bWwnLFxuICBzZWFyY2hTdHJpbmc6IHVuZGVmaW5lZCxcbiAgc2VhcmNoTGlzdFVybDogdW5kZWZpbmVkLFxuICBzdWJtaXRTZWFyY2g6ICgpID0+IHtcbiAgICBTZWFyY2hTdWJtaXQuc2VhcmNoU3RyaW5nID0gJCgnI3NlYXJjaGZpZWxkJyk7XG5cbiAgICAkKCcuanMtc2VhcmNoLXN1Ym1pdCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gU2VhcmNoU3VibWl0LnNlYXJjaFN0cmluZy52YWwoKTtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIFNlYXJjaFN1Ym1pdC5zZWFyY2hMaXN0VXJsID0gYCR7dXJsfSR7U2VhcmNoU3VibWl0Lmxpc3RVcmx9P3E9JHtxdWVyeX1gO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYgIT09ICdhYm91dDpibGFuaycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBTZWFyY2hTdWJtaXQuc2VhcmNoTGlzdFVybDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdFNlYXJjaCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlYXJjaFN1Ym1pdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvc2VhcmNoX3N1Ym1pdC5qcyIsImNvbnN0IFRhZ0ZpbHRlciA9IHtcbiAgbGlzdFVybDogJy9saXN0Lmh0bWwnLFxuICBzZWFyY2hMaXN0VXJsOiB1bmRlZmluZWQsXG4gIGZpbHRlckJ5VGFnOiAoKSA9PiB7XG4gICAgJCgnLnByb2plY3RfX3R5cGUnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0eXBlLXRhZycpO1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgVGFnRmlsdGVyLnNlYXJjaExpc3RVcmwgPSBgJHt1cmx9JHtUYWdGaWx0ZXIubGlzdFVybH0/dHlwZT0ke3F1ZXJ5fWA7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gJ2Fib3V0OmJsYW5rJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFRhZ0ZpbHRlci5zZWFyY2hMaXN0VXJsO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBmaWx0ZXJCeUNhdGVnb3J5OiAoKSA9PiB7XG4gICAgJCgnLmNvbnRhaW5lci1vdmVybGF5Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47XG4gICAgICBUYWdGaWx0ZXIuc2VhcmNoTGlzdFVybCA9IGAke3VybH0ke1RhZ0ZpbHRlci5saXN0VXJsfT90eXBlPSR7cXVlcnl9YDtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSAnYWJvdXQ6YmxhbmsnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gVGFnRmlsdGVyLnNlYXJjaExpc3RVcmw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJCeVRhZygpO1xuICAgIHRoaXMuZmlsdGVyQnlDYXRlZ29yeSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhZ0ZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9fanMvdGFnX2ZpbHRlci5qcyIsImNvbnN0IFNwZWN0cnVtID0ge1xuICBzY2hlbWF0aWNEZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICB0YXJnZXRDaXJjbGVzOiAoKSA9PiB7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24gPSAkKCcuc2NoZW1hdGljLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAkKCcuY2lyY2xlJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBjbGlja2VkQ2lyY2xlID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2NpcmNsZS1hdHRyJyk7XG5cbiAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIFNwZWN0cnVtLnNob3dEYXRhKGNsaWNrZWRDaXJjbGUpO1xuICAgIH0pO1xuICB9LFxuICBzaG93RGF0YTogY2lyY2xlQXR0ciA9PiB7XG4gICAgU3BlY3RydW0uc2NoZW1hdGljRGVzY3JpcHRpb24gPSBbXS5zbGljZS5jYWxsKFNwZWN0cnVtLnNjaGVtYXRpY0Rlc2NyaXB0aW9uKTtcbiAgICBTcGVjdHJ1bS5zY2hlbWF0aWNEZXNjcmlwdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbi1hdHRyJykgPT09IGNpcmNsZUF0dHIpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgYWN0aXZhdGVGaXJzdENpcmNsZTogKCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2lyY2xlID0gJCgnLmNpcmNsZScpLmZpcnN0KCk7XG4gICAgZmlyc3RDaXJjbGUuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgU3BlY3RydW0uc2hvd0RhdGEoZmlyc3RDaXJjbGUuYXR0cignY2lyY2xlLWF0dHInKSk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy50YXJnZXRDaXJjbGVzKCk7XG4gICAgdGhpcy5hY3RpdmF0ZUZpcnN0Q2lyY2xlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3BlY3RydW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL3NwZWN0cnVtLmpzIiwiY29uc3QgQ29va2llc1BvcHVwID0ge1xuICBjb29raWVzOiByZXF1aXJlKCdicm93c2VyLWNvb2tpZXMnKSxcbiAgc2xpZGVVcDogKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnLmNvb2tpZXMtcG9wdXAnKVxuICAgICAgICAuYW5pbWF0ZSh7IGJvdHRvbTogJzAnIH0sIDQwMClcbiAgICAgICAgLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgIH0sIDgwMCk7XG4gIH0sXG4gIHNsaWRlRG93bjogKCkgPT4ge1xuICAgICQoJy5wb3B1cC1idXR0b24nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRWYWx1ZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Nvb2tpZS12YWx1ZScpO1xuICAgICAgaWYgKGNsaWNrZWRWYWx1ZSA9PT0gJ2FncmVlJykge1xuICAgICAgICBDb29raWVzUG9wdXAuY29va2llcy5zZXQoJ3VzZXJfY29va2llX2FncmVlbWVudCcsICdhZ3JlZScsIHsgZXhwaXJlczogMzY1IH0pO1xuICAgICAgfSBlbHNlIGlmIChjbGlja2VkVmFsdWUgPT09ICdkaXNhZ3JlZScpIHtcbiAgICAgICAgQ29va2llc1BvcHVwLmNvb2tpZXMuc2V0KCd1c2VyX2Nvb2tpZV9hZ3JlZW1lbnQnLCAnZGlzYWdyZWUnLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICAgIH1cbiAgICAgICQoJy5jb29raWVzLXBvcHVwJykuYW5pbWF0ZSh7IGJvdHRvbTogJy0yMjBweCcgfSwgJ3Nsb3cnKTtcbiAgICB9KTtcbiAgfSxcbiAgaGlkZVBvcHVwQmFzZWRPbkNvb2tpZTogKCkgPT4ge1xuICAgIGlmIChDb29raWVzUG9wdXAuY29va2llcy5nZXQoJ3VzZXJfY29va2llX2FncmVlbWVudCcpKSB7XG4gICAgICAkKCcuY29va2llcy1wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zbGlkZVVwKCk7XG4gICAgdGhpcy5zbGlkZURvd24oKTtcbiAgICB0aGlzLmhpZGVQb3B1cEJhc2VkT25Db29raWUoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVzUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvX2pzL2Nvb2tpZXNfcG9wdXAuanMiLCJleHBvcnRzLmRlZmF1bHRzID0ge307XHJcblxyXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgLy8gUmV0cmlldmUgb3B0aW9ucyBhbmQgZGVmYXVsdHNcclxuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XHJcbiAgdmFyIGRlZmF1bHRzID0gZXhwb3J0cy5kZWZhdWx0cztcclxuXHJcbiAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBmb3IgdW5zcGVjaWZpZWQgb3B0aW9uc1xyXG4gIHZhciBleHBpcmVzICA9IG9wdHMuZXhwaXJlcyAgfHwgZGVmYXVsdHMuZXhwaXJlcztcclxuICB2YXIgZG9tYWluICAgPSBvcHRzLmRvbWFpbiAgIHx8IGRlZmF1bHRzLmRvbWFpbjtcclxuICB2YXIgcGF0aCAgICAgPSBvcHRzLnBhdGggICAgICE9PSB1bmRlZmluZWQgPyBvcHRzLnBhdGggICAgIDogKGRlZmF1bHRzLnBhdGggIT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzLnBhdGggOiAnLycpO1xyXG4gIHZhciBzZWN1cmUgICA9IG9wdHMuc2VjdXJlICAgIT09IHVuZGVmaW5lZCA/IG9wdHMuc2VjdXJlICAgOiBkZWZhdWx0cy5zZWN1cmU7XHJcbiAgdmFyIGh0dHBvbmx5ID0gb3B0cy5odHRwb25seSAhPT0gdW5kZWZpbmVkID8gb3B0cy5odHRwb25seSA6IGRlZmF1bHRzLmh0dHBvbmx5O1xyXG4gIHZhciBzYW1lc2l0ZSA9IG9wdHMuc2FtZXNpdGUgIT09IHVuZGVmaW5lZCA/IG9wdHMuc2FtZXNpdGUgOiBkZWZhdWx0cy5zYW1lc2l0ZTtcclxuXHJcbiAgLy8gRGV0ZXJtaW5lIGNvb2tpZSBleHBpcmF0aW9uIGRhdGVcclxuICAvLyBJZiBzdWNjZXNmdWwgdGhlIHJlc3VsdCB3aWxsIGJlIGEgdmFsaWQgRGF0ZSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYW4gaW52YWxpZCBEYXRlIG9yIGZhbHNlKGlzaClcclxuICB2YXIgZXhwRGF0ZSA9IGV4cGlyZXMgPyBuZXcgRGF0ZShcclxuICAgICAgLy8gaW4gY2FzZSBleHBpcmVzIGlzIGFuIGludGVnZXIsIGl0IHNob3VsZCBzcGVjaWZ5IHRoZSBudW1iZXIgb2YgZGF5cyB0aWxsIHRoZSBjb29raWUgZXhwaXJlc1xyXG4gICAgICB0eXBlb2YgZXhwaXJlcyA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIChleHBpcmVzICogODY0ZTUpIDpcclxuICAgICAgLy8gZWxzZSBleHBpcmVzIHNob3VsZCBiZSBlaXRoZXIgYSBEYXRlIG9iamVjdCBvciBpbiBhIGZvcm1hdCByZWNvZ25pemVkIGJ5IERhdGUucGFyc2UoKVxyXG4gICAgICBleHBpcmVzXHJcbiAgKSA6IDA7XHJcblxyXG4gIC8vIFNldCBjb29raWVcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lLnJlcGxhY2UoL1teKyMkJl5gfF0vZywgZW5jb2RlVVJJQ29tcG9uZW50KSAgICAgICAgICAgICAgICAvLyBFbmNvZGUgY29va2llIG5hbWVcclxuICAucmVwbGFjZSgnKCcsICclMjgnKVxyXG4gIC5yZXBsYWNlKCcpJywgJyUyOScpICtcclxuICAnPScgKyB2YWx1ZS5yZXBsYWNlKC9bXisjJCYvOjwtXFxbXFxdLX1dL2csIGVuY29kZVVSSUNvbXBvbmVudCkgKyAgICAgICAgICAgICAgICAgIC8vIEVuY29kZSBjb29raWUgdmFsdWUgKFJGQzYyNjUpXHJcbiAgKGV4cERhdGUgJiYgZXhwRGF0ZS5nZXRUaW1lKCkgPj0gMCA/ICc7ZXhwaXJlcz0nICsgZXhwRGF0ZS50b1VUQ1N0cmluZygpIDogJycpICsgLy8gQWRkIGV4cGlyYXRpb24gZGF0ZVxyXG4gIChkb21haW4gICA/ICc7ZG9tYWluPScgKyBkb21haW4gICAgIDogJycpICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBkb21haW5cclxuICAocGF0aCAgICAgPyAnO3BhdGg9JyAgICsgcGF0aCAgICAgICA6ICcnKSArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgcGF0aFxyXG4gIChzZWN1cmUgICA/ICc7c2VjdXJlJyAgICAgICAgICAgICAgIDogJycpICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZWN1cmUgb3B0aW9uXHJcbiAgKGh0dHBvbmx5ID8gJztodHRwb25seScgICAgICAgICAgICAgOiAnJykgKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGh0dHBvbmx5IG9wdGlvblxyXG4gIChzYW1lc2l0ZSA/ICc7c2FtZXNpdGU9JyArIHNhbWVzaXRlIDogJycpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzYW1lc2l0ZSBvcHRpb25cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgXHJcbiAgLy8gSXRlcmF0ZSBhbGwgY29va2llc1xyXG4gIHdoaWxlKGNvb2tpZXMubGVuZ3RoKSB7XHJcbiAgICB2YXIgY29va2llID0gY29va2llcy5wb3AoKTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgc2VwYXJhdG9yIGluZGV4IChcIm5hbWU9dmFsdWVcIilcclxuICAgIHZhciBzZXBhcmF0b3JJbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XHJcblxyXG4gICAgLy8gSUU8MTEgZW1pdHMgdGhlIGVxdWFsIHNpZ24gd2hlbiB0aGUgY29va2llIHZhbHVlIGlzIGVtcHR5XHJcbiAgICBzZXBhcmF0b3JJbmRleCA9IHNlcGFyYXRvckluZGV4IDwgMCA/IGNvb2tpZS5sZW5ndGggOiBzZXBhcmF0b3JJbmRleDtcclxuXHJcbiAgICB2YXIgY29va2llX25hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KS5yZXBsYWNlKC9eXFxzKy8sICcnKSk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNvb2tpZSB2YWx1ZSBpZiB0aGUgbmFtZSBtYXRjaGVzXHJcbiAgICBpZiAoY29va2llX25hbWUgPT09IG5hbWUpIHtcclxuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyAxKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gYG51bGxgIGFzIHRoZSBjb29raWUgd2FzIG5vdCBmb3VuZFxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0cy5lcmFzZSA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMpIHtcclxuICBleHBvcnRzLnNldChuYW1lLCAnJywge1xyXG4gICAgZXhwaXJlczogIC0xLFxyXG4gICAgZG9tYWluOiAgIG9wdGlvbnMgJiYgb3B0aW9ucy5kb21haW4sXHJcbiAgICBwYXRoOiAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnBhdGgsXHJcbiAgICBzZWN1cmU6ICAgMCxcclxuICAgIGh0dHBvbmx5OiAwfVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnRzLmFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBhbGwgPSB7fTtcclxuICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICAvLyBJdGVyYXRlIGFsbCBjb29raWVzXHJcbiAgd2hpbGUoY29va2llcy5sZW5ndGgpIHtcclxuICAgIHZhciBjb29raWUgPSBjb29raWVzLnBvcCgpO1xyXG5cclxuICAgIC8vIERldGVybWluZSBzZXBhcmF0b3IgaW5kZXggKFwibmFtZT12YWx1ZVwiKVxyXG4gICAgdmFyIHNlcGFyYXRvckluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcclxuXHJcbiAgICAvLyBJRTwxMSBlbWl0cyB0aGUgZXF1YWwgc2lnbiB3aGVuIHRoZSBjb29raWUgdmFsdWUgaXMgZW1wdHlcclxuICAgIHNlcGFyYXRvckluZGV4ID0gc2VwYXJhdG9ySW5kZXggPCAwID8gY29va2llLmxlbmd0aCA6IHNlcGFyYXRvckluZGV4O1xyXG5cclxuICAgIC8vIGFkZCB0aGUgY29va2llIG5hbWUgYW5kIHZhbHVlIHRvIHRoZSBgYWxsYCBvYmplY3RcclxuICAgIHZhciBjb29raWVfbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLnJlcGxhY2UoL15cXHMrLywgJycpKTtcclxuICAgIGFsbFtjb29raWVfbmFtZV0gPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFsbDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1jb29raWVzL3NyYy9icm93c2VyLWNvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
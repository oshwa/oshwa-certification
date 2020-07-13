const ListFilter = {
  options: {
    valueNames: [
      'name',
      'uid',
      'version',
      'keywords',
      'responsible-party',
      { name: 'date', attr: 'date' },
      { name: 'type', attr: 'type' },
      { name: 'hardware', attr: 'hardware' },
      { name: 'documentation', attr: 'documentation' },
      { name: 'software', attr: 'software' },
      { name: 'location', attr: 'location' }
    ],
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
  createList: () => {
    ListFilter.projectList = new List('project_data', ListFilter.options);
    if (document.location.href.indexOf('list') > -1) {
      ListFilter.projectList.sort('name', { order: 'asc' });
    }
    ListFilter.setSearchQueryDefaults();
  },
  filterList: searchQueries => {
    const { hardware, software, location, searchParams } = searchQueries;
    let { projectTypes } = searchQueries;
    if (typeof projectTypes === 'string') {
      projectTypes = projectTypes.split(',');
    }
    ListFilter.projectList.search(searchParams);
    ListFilter.projectList.filter(item => {
      if (
        item.values().hardware !== null &&
        item.values().software !== null &&
        item.values().type !== null &&
        item.values().location !== null &&
        item.values().hardware.indexOf(hardware) !== -1 &&
        item.values().software.indexOf(software) !== -1 &&
        item.values().location.indexOf(location) !== -1 &&
        ListFilter.matchesAllItems(item.values().type, projectTypes)
      ) {
        return true;
      }
    });

    ListFilter.displayResults();
    ListFilter.displayResultQueries();
  },
  filterBySearch: () => {
    $('#searchfield').on('keyup', e => {
      ListFilter.searchQueries.searchParams = $(e.currentTarget).val();
      ListFilter.filterList(ListFilter.searchQueries);
      sessionStorage.setItem('searchQueries', JSON.stringify(ListFilter.searchQueries));
    });
  },
  filterByDropdowns: () => {
    ListFilter.allFilters = $('.dropdown');
    ListFilter.allFilters.on('change', e => {
      ListFilter.allFilters.each(selection => {
        $(selection).each(() => {
          const filterSelection = e.currentTarget.id;
          const selectedOption = $(e.currentTarget)
            .children(':selected')
            .attr('id');
          ListFilter.searchQueries[filterSelection] = selectedOption;
        });
      });
      ListFilter.filterList(ListFilter.searchQueries);
      sessionStorage.setItem('searchQueries', JSON.stringify(ListFilter.searchQueries));
    });
  },
  mapCheckBoxes: () => {
    ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked')
      .map(function() {
        return this.value;
      })
      .get();

    if (ListFilter.typeCheckedValues.length === 0) {
      ListFilter.typeCheckedValues = ['all'];
    }
    ListFilter.searchQueries.projectTypes = ListFilter.typeCheckedValues;
    ListFilter.filterList(ListFilter.searchQueries);
    sessionStorage.setItem('searchQueries', JSON.stringify(ListFilter.searchQueries));
  },
  filterByCheckboxes: () => {
    $('.filter-container').on('change', () => {
      ListFilter.mapCheckBoxes();
    });
  },
  matchesAllItems: (arr1, arr2) => {
    let matchesAll;
    let largerArray;
    let smallerArray;
    if (arr1.length > arr2.length) {
      largerArray = arr1;
      smallerArray = arr2;
    } else {
      largerArray = arr2;
      smallerArray = arr1;
    }
    matchesAll = smallerArray.every(elem => largerArray.indexOf(elem) !== -1);
    return matchesAll;
  },
  filterByUrlParams: () => {
    const searchQuery = window.location.search.split('=')[0];
    const searchParam = window.location.search.split('=')[1];
    switch (searchQuery) {
      case '?q':
        ListFilter.addQueryToSearch(decodeURI(searchParam));
        ListFilter.matchSearchQueriesToUI();
        ListFilter.filterList(ListFilter.searchQueries);
        break;
      case '?type':
        $(`input[type=checkbox][value=${searchParam}]`).prop('checked', true);
        ListFilter.activeTag = searchParam;
        ListFilter.matchSearchQueriesToUI();
        ListFilter.mapCheckBoxes();
        break;
      default:
    }
  },
  clearAllFilters: () => {
    $('.clear_filters').on('click', e => {
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
      sessionStorage.setItem('searchQueries', JSON.stringify(ListFilter.searchQueries));
    });
  },
  clearFormInputs: () => {
    $('.search__input').val('');
    $('.dropdown').prop('selectedIndex', 0);
    $('.country-dropdown').prop('selectedIndex', 0);
    $('input[type="checkbox"]:checked').prop('checked', false);
  },
  displayResults: () => {
    const projectCount = $('.project').length;
    const projectsLabel = projectCount === 1 ? `Project` : `Projects`;
    $('.results-count').html(`<p>Displaying ${projectCount} ${projectsLabel}</p>`);
    $('.mobile-results-message').html(`<p>See ${projectCount} ${projectsLabel}</p>`);
  },
  displayResultQueries: () => {
    const activeSearchParams = [];
    const { searchParams } = ListFilter.searchQueries;
    if (searchParams !== '') {
      activeSearchParams.push(searchParams);
    }

    $('input[type="checkbox"]:checked').each((val, item) => activeSearchParams.push(item.id));

    $('.dropdown').map((val, item) => {
      if (item.value !== 'Select one' && item.value !== 'Country') {
        activeSearchParams.push(item.value);
      }
      return activeSearchParams;
    });

    if (activeSearchParams.length > 0) {
      $('.results-message').show();
      if ($('.project').length === 0) {
        $('.results-message').html(`<p>No results for: ${activeSearchParams.join('; ')}</p>`);
      } else {
        $('.results-message').html(`<p>Results: ${activeSearchParams.join('; ')}</p>`);
      }
    } else {
      $('.results-message').hide();
    }
  },
  matchSearchQueriesToUI: () => {
    // grabs searchQueries values from the UI
    ListFilter.searchQueries.searchParams = $('#searchfield').val() || ListFilter.searchQueries.searchParams;
    ListFilter.searchQueries.location = $('.country-dropdown')
      .children(':selected')
      .attr('id');
    // default project types value
    const projectTypes = ['all'];
    ListFilter.typeCheckedValues = $('input[type="checkbox"]:checked').each((val, type) => {
      projectTypes.push(type.value);
    });
    ListFilter.searchQueries.projectTypes = projectTypes;
    ListFilter.searchQueries.hardware = $('#hardware')
      .children(':selected')
      .attr('id');
    ListFilter.searchQueries.software = $('#software')
      .children(':selected')
      .attr('id');
  },
  handleSearchBehavior: () => {
    const hasUrlParam = window.location.search;
    if (hasUrlParam) {
      ListFilter.filterByUrlParams();
    } else {
      ListFilter.matchSearchQueriesToUI();
      ListFilter.filterList(ListFilter.searchQueries);
    }
  },
  addQueryToSearch: term => {
    $('#searchfield').val(term);
  },
  setSearchQueryDefaults: () => {
    ListFilter.searchQueries = {
      software: 'all',
      hardware: 'all',
      projectTypes: ['all'],
      location: 'all',
      searchParams: ''
    };
  },
  blurInputOnHover: () => {
    // remove focus from input to fix double link clicking
    $('.projects').on('mouseenter', () => {
      $('#searchfield').blur();
    });
  },
  filterByLocalStorage: () => {
    const urlSearchParam = window.location.search.split('=')[0];

    if ((sessionStorage.searchQueries && !urlSearchParam) || urlSearchParam === '?search') {
      const storage = JSON.parse(sessionStorage.searchQueries);
      ListFilter.searchQueries = storage;

      for (let key in ListFilter.searchQueries) {
        let value = ListFilter.searchQueries[key];

        if (value !== 'all') {
          document.querySelectorAll('.dropdown').forEach(select => {
            if (select.id === key) {
              select.childNodes.forEach(option => {
                if (option.id === value) {
                  option.selected = true;
                }
              });
            }
          });
        }

        if (key === 'projectTypes') {
          value.forEach(topic => {
            document.querySelectorAll('.form-type').forEach(item => {
              if (item.getAttribute('data-value') === topic) {
                item.checked = true;
              }
            });
          });
        }

        if (key === 'searchParams') {
          document.querySelector('#searchfield').value = value;
        }
      }
      ListFilter.displayResultQueries();
    }
  },
  init() {
    this.createList();
    this.filterByLocalStorage();
    this.filterBySearch();
    this.filterByDropdowns();
    this.filterByCheckboxes();
    this.clearAllFilters();
    this.displayResults();
    this.handleSearchBehavior();
    this.blurInputOnHover();
  }
};

module.exports = ListFilter;

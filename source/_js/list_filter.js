const ListFilter = {
  options: {
    valueNames: [
      'project__name',
      'project__uid',
      'project__version',
      'project__date',
      { name: 'project__type', attr: 'type' },
      { name: 'hardware', attr: 'hardware'},
      { name: 'documentation', attr: 'documentation'},
      { name: 'software', attr: 'software'}
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
  searchString: '',
  allFilters: $('.dropdown'),
  searchQueries: { documentation: 'all', software: 'all', hardware: 'all' },
  createList: () => {
    ListFilter.projectList = new List('project_data', ListFilter.options);

    if (window.location.href.includes('list')) {
      ListFilter.projectList.sort('project__name', { order: 'asc' });
    }
  },
  filterList: () => {
    ListFilter.projectList.filter( item => {
      if (
        item.values().hardware !== null &&
        item.values().documentation !== null &&
        item.values().software !== null &&
        item.values().hardware.indexOf(ListFilter.searchQueries.hardware) !== -1 &&
        item.values().documentation.indexOf(ListFilter.searchQueries.documentation) !== -1 &&
        item.values().software.indexOf(ListFilter.searchQueries.software) !== -1
      ) {
        return true;
      }
    });
  },
  filterBySearch: () => {
    $('#searchfield').on('keyup', e => {
      ListFilter.searchString = $(e.currentTarget).val();
      ListFilter.projectList.search(ListFilter.searchString);
    });
  },
  filterByDropdowns: () => {
    ListFilter.allFilters.on('change', e => {
      ListFilter.allFilters.each((selection) => {
        $(selection).each(() => {
          const filterSelection = e.currentTarget.id;
          const selectedOption = $(e.currentTarget).children(':selected').attr('id');

          ListFilter.searchQueries[filterSelection] = selectedOption;
        });
      });
      ListFilter.filterList();
    });
  },
  // filterByCheckboxes: () => {
  //   $('body').on('change', $('input[type="checkbox"]:checked'), () => {
  //     console.log(ListFilter.allCheckboxes)
  //     // ListFilter.allCheckboxes.push($('input[type="checkbox"]:checked').val())
  //   });
  // },
  init() {
    this.createList();
    this.filterBySearch();
    this.filterByDropdowns();
    // this.filterByCheckboxes();
  }
};

module.exports = ListFilter;

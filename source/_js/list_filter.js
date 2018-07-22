const ListFilter = {
  options: {
    valueNames: [
      'project__name',
      'project__uid',
      'project__version',
      { name: 'project__type', attr: 'data-target' },
      'project__date',
      'project__hardware_license',
      'project__documentation_license',
      'project__software_license'
      // { name: 'project__hardware_license', attr: 'data-target'},
      // { name: 'project__documentation_license', attr: 'data-target'},
      // { name: 'project__software_license', attr: 'data-target'}
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
  createList: () => {
    ListFilter.projectList = new List('project_data', ListFilter.options);

    if (window.location.href.includes('list')) {
      ListFilter.projectList.sort('project__name', { order: 'asc' });
    }
  },
  filterBySearch: () => {
    $('#searchfield').on('keyup', e => {
      ListFilter.searchString = $(e.currentTarget).val();
      ListFilter.projectList.search(ListFilter.searchString);
    });
  },
  filterByDropdowns: () => {
    $('.dropdown').on('change', e => {
      const id = e.currentTarget.id;
      const value = $(e.currentTarget).val();

      id ? ListFilter.projectList.search(value) : false;
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

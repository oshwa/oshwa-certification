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
    ],
    fuzzySearch: {
      searchClass: 'fuzzy-search',
      location: 0,
      distance: 100,
      threshold: 0.2,
      multiSearch: true
    }
  },
  // projectList: new List('project_data', ListFilter.options),
  createList: () => {
    const projectList = new List('project_data', ListFilter.options);
    if (window.location.href.includes('list')) {
      projectList.sort('project__name', { order: 'asc' });
    }
  },
  filterByCheckboxes: () => {
    $('body').on('change', $('input[type="checkbox"]:checked'), () => {

    });
  },
  // filterByDropdowns: () => {
  //
  // },
  // filterBySearch: () => {
  //
  // },
  init() {
    this.createList();
    this.filterByCheckboxes();
    // this.filterByDropdowns();
    // this.filterBySearch();
  }
};

module.exports = ListFilter;

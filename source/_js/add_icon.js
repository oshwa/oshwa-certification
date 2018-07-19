const AddIcon = {
  citationContainer: $('.citations').find('a'),
  addIcon: () => {
    AddIcon.citationContainer.append('<i class="material-icons launch">launch</i>');
  },
  init() {
    this.addIcon();
  }
};

module.exports = AddIcon;

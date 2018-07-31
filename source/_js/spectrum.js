const Spectrum = {
  clickedCircle: undefined,
  schematicDescription: document.querySelectorAll('.schematic-description'),
  createCircles: () => {
    $('.circle').on('click', e => {
      Spectrum.clickedCircle = $(e.currentTarget).attr('circle-attr');

      if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
      } else {
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).siblings().removeClass('active');
      }

      Spectrum.showData();
    });
  },
  showData: () => {
    Spectrum.schematicDescription.forEach(item => {
      if (item.classList.contains(Spectrum.clickedCircle)) {
        item.classList.toggle('display');
      } else {
        item.classList.remove('display');
      }
    });
  },
  init() {
    this.createCircles();
  }
};

module.exports = Spectrum;

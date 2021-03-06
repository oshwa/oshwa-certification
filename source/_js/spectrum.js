const Spectrum = {
  schematicDescription: undefined,
  targetCircles: () => {
    Spectrum.schematicDescription = $('.schematic-description');

    $('.circle').on('click', e => {
      const clickedCircle = $(e.currentTarget).attr('circle-attr');

      if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
      } else {
        $(e.currentTarget).addClass('active');
        $(e.currentTarget).siblings().removeClass('active');
      }

      Spectrum.showData(clickedCircle);
    });
  },
  showData: circleAttr => {
    Spectrum.schematicDescription = [].slice.call(Spectrum.schematicDescription);
    Spectrum.schematicDescription.forEach(item => {
      if (item.getAttribute('position-attr') === circleAttr) {
        item.classList.toggle('display');
      } else {
        item.classList.remove('display');
      }
    });
  },
  activateFirstCircle: () => {
    const firstCircle = $('.circle').first();
    firstCircle.first().addClass('active');
    Spectrum.showData(firstCircle.attr('circle-attr'));
  },
  init() {
    this.targetCircles();
    this.activateFirstCircle();
  }
};

module.exports = Spectrum;

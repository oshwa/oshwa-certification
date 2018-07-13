const Accordion = {
  handleClick: () => {
    $('.js-open-accordion').click(e => {
      const active = $(e.currentTarget).hasClass('js-active');
      active ? $(e.currentTarget).removeClass('js-active') : $(e.currentTarget).addClass('js-active');
    });
  },
  init() {
    this.handleClick();
  }
};

module.exports = Accordion;

const CompactPanel = {
  slideTarget: undefined,
  slideContainer: undefined,
  setupSlideAnimation: () => {
    CompactPanel.slideTarget = $('.slide-panel__container');
    CompactPanel.slideContainer = $('.slide-panel');

    CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
    CompactPanel.slideContainer.removeClass('is-visible');
  },
  handleSlideDisplay: () => {
    $('body').on('click', '.slide-panel__open-trigger', e => {
      const dataTarget = e.currentTarget.getAttribute('data-term');
      const targetSlideContainer = $(`[data-value="${dataTarget}"]`);
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
  handleSlideCloseButton: () => {
    $('body').on('click', '.slide-panel__close-trigger', e => {
      e.preventDefault();
      CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
      CompactPanel.slideContainer.removeClass('is-visible');
      $('#overlay').removeClass('js-active');
    });
  },
  handleOverlayClose: () => {
    $('body').on('click', '#overlay', e => {
      e.preventDefault();
      CompactPanel.slideTarget.animate({ right: '-100%' }, 'slow').fadeOut(5);
      CompactPanel.slideContainer.removeClass('is-visible');
    });
  },
  init() {
    this.setupSlideAnimation();
    this.handleSlideDisplay();
    this.handleSlideCloseButton();
    this.handleOverlayClose();
  }
};

module.exports = CompactPanel;

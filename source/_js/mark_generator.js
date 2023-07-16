/**
 * Generates OSHW Certification Mark images on project pages.
 */
const MarkGenerator = {
  stackedTemplateURL: '/images/mark-stack-template.svg',
  wideTemplateURL: '/images/mark-wide-template.svg',

  /**
   * Attach to DOM and generate images.
   */
  async init() {
    const elm = document.getElementById('certification-mark-generator');

    // No generator on this page, so no need to do anything.
    if (!elm) {
      return;
    }

    const projectId = elm.dataset.projectId;

    const stackedVariantContainer = elm.querySelector("[data-variant='stacked']");
    const wideVariantContainer = elm.querySelector("[data-variant='wide']");

    return await Promise.all([
      this.generateAndDisplay(this.stackedTemplateURL, stackedVariantContainer, projectId),
      this.generateAndDisplay(this.wideTemplateURL, wideVariantContainer, projectId),
    ]);
  },

  /**
   * Generates and displays a certification mark.
   *
   * @param {URL | string} src - The location of the SVG template to use.
   * @param {HTMLElement} dst - The container to place the generated image into.
   * @param {string} projectId - The 10 character project UID to fill into the template.
   */
  async generateAndDisplay(src, dst, projectId) {
    const variant = dst.dataset.variant;

    // Load the Mark SVG into a parsed Document so that we can fill
    // in the project ID before showing the image.
    const svg = await this.loadTemplateSVG(src);

    const projectIdElm = svg.querySelector('text');
    projectIdElm.textContent = projectId;

    // Add the generated images to the destination element
    const img = await this.SVGXMLDocumentToImageElement(svg);
    dst.prepend(img);

    // Hook into the download links
    const svgLink = dst.querySelector("a[data-format='svg']");
    svgLink.href = img.src;
    svgLink.download = `certification-mark-${projectId}-${variant}.svg`;

    // PNG is a little special - the SVG element needs to be converted into
    // a PNG so a little trickery has to happen.
    const pngLink = dst.querySelector("a[data-format='png']");
    pngLink.addEventListener('click', (e) => {
      e.preventDefault();
      const data_url = this.ImageElementToPNG(img, 4000);
      this.downloadDataURLAsFile(data_url, `certification-mark-${projectId}-${variant}.png`);
    });
  },

  /**
   * Load and parse an SVG file.
   * @param {URL | string} src
   * @returns {XMLDocument}
   */
  async loadTemplateSVG(src) {
    const text = await (await fetch(src)).text();
    const parser = new DOMParser();
    return parser.parseFromString(text, 'image/svg+xml');
  },

  /**
   * Creates an <img> element given an SVG.
   *
   * While you could just append the SVG directly into the tree, doing it this
   * way allows for right-click save and for ready conversion into PNG.
   *
   * @param {XMLDocument} svg_doc
   * @returns {HTMLImageElement}
   */
  async SVGXMLDocumentToImageElement(svg_doc) {
    // Convert the SVG's Document into a data url and then create an <img>
    // from that.
    const blob = this.SVGXMLDocumentToBlob(svg_doc);
    const data_url = URL.createObjectURL(blob);
    const img = await this.createImageElement(data_url);

    return img;
  },

  /**
   * Serializes the given SVG to a string and stuffs it in a Blob.
   *
   * @param {XMLDocument} svg_doc
   * @returns {Blob}
   */
  SVGXMLDocumentToBlob(svg_doc) {
    const serializer = new XMLSerializer();
    const text = serializer.serializeToString(svg_doc);
    return new Blob([text], {
      type: 'image/svg+xml'
    });
  },

  /* Creates an <img> element with the given source, returning a promise that
       resolves when the image has loaded. */
  /**
   * Creates an <img> element using the given source.
   *
   * @param {string} src
   * @returns {Promise<HTMLImageElement>} a promise that resolves once the image is loaded
   */
  async createImageElement(src) {
    const elm = document.createElement('img');
    const load = new Promise((resolve) => {
      elm.addEventListener('load', () => {
        resolve(elm);
      });
    });

    elm.src = src;

    return await load;
  },

  /**
   * Converts an <img> into a PNG, even if that <img> is an SVG, by way of Canvas2D.
   *
   * @param {HTMLImageElement} img
   * @param {number} resize_width - the width of the generated PNG. The height is determined by this width and the image's aspect ratio.
   * @returns {string} The PNG image encoded into a data URL
   */
  ImageElementToPNG(img, resize_width) {
    const canvas = document.createElement('canvas');

    const aspect = img.height / img.width;

    canvas.width = resize_width;
    canvas.height = Math.round(resize_width * aspect);

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/png');
  },

  /**
   * Asks the browser to download the given data URL to a file.
   *
   * @param {string} url
   * @param {string} name
   */
  downloadDataURLAsFile(url, name) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    anchor.target = '_blank';
    anchor.click();
  }
};

module.exports = MarkGenerator;

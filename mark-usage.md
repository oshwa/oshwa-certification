<!-- TODO: This should be loaded into Contentful and **NOT** committed to the repository. -->

The *Open Source Hardware Association Certification Mark* can be by projects certified through the OSHWA [self-certification program](/process.html).

![OSHW Certification Mark in use](/images/mark-in-use.jpg)

This mark is designed to work in a variety of sizes and mediums, since we want you to be able to use it wherever you'd like to celebrate your certification- from circuit boards to billboards and everything in between. You can start using this mark after your project has been certified and you've received a UID. This page covers the mark's usage guidelines and artwork.


## Anatomy

![Mark anatomy](/images/mark-anatomy.svg)

The mark consists of two parts: the OSHW logo and the project's unique identifier (UID). The UID is assigned once your project's certification application is approved and has a two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) followed by a six digit number.

![Mark variants](/images/mark-variants.svg)

You can use the mark in a "stacked" or "wide" layout depending on the context. The logo is **required** but the project UID is optional, although highly encouraged. You can also leave out leading zeros if you'd like, for example, you can shorten `US000001` to `US1`.


## Color

![Mark colors](/images/mark-color.svg)

When using the logo in color, use *graphite* and *coral*:

| graphite                   | coral                      |
|----------------------------|----------------------------|
| `#333333`                | `#FF4444`                |
| `rgba(51, 51, 51, 1)`    | `rgba(255, 68, 68, 1)`   |
| `hsl(0deg, 0%, 20%)`       | `hsl(0deg, 100%, 64%)`     |
| `hsv(0deg, 0%, 20%)`       | `hsv(0°, 73%, 100%)`       |
| `cymk(0%, 0%, 0%, 80%)`    | `cymk(0%, 73%, 73%, 0%)`   |
{: .mark-color-table }

When color isn't possible or preferable, you can use the mark in black, white, or gray.

![Mark in monochrome](/images/mark-monochrome.svg)


## Plaintext

For plaintext situations, you can represent the mark as `[OSHW]`, similar to how the copyright symbol, ©, can be represented as `(c)`. For example:

```
[OSHW] US000001 | Certified open source hardware | oshwa.org/cert
```

## Design files

Each project in the [certification directory](/list.html) includes ready-to-use mark images in `SVG` and `PNG` format, however, if you'd like to use the design source files directly they're available in the [oshwa/certification-mark](https://github.com/oshwa/certification-mark) repository. This repository also includes files for common EDA programs, such as KiCAD and EAGLE.


## Attribution

The mark was based on [ideas submitted by the OSHWA community](http://www.oshwa.org/2016/03/17/open-hardware-certification-mark-call-for-ideas/) and primarily on the design submitted by Matt Maier. Thanks to everyone who provided input!

The typeface is [Deja Vu Sans Mono](https://dejavu-fonts.github.io/) which is [freely and permissively licensed](https://dejavu-fonts.github.io/License.html). The mark was designed in [Inkscape](https://inkscape.org), an open source vector graphics editor.


## License agreement

The terms covering the use of the mark are part of the [license agreement](https://certification.oshwa.org/license-agreement.html) governing the overall certification application.

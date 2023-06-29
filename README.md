## Next.js 13.4.8 + App Router + SVG Favicon Issue

This is a minimal test case to demonstrate the SVG favorites icon issue in Next.js with App Router, following [the metadata documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons).

In this test case, the following output is generated in the `<head>` section of the page:

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"/>
<link rel="icon" href="/icon.svg?2e107c23de4929db" type="image/svg+xml" sizes="32x32"/>
```

However, this does not conform to [best practices](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) nor to [the HTML spec](https://html.spec.whatwg.org/#rel-icon).

- The HTML specification suggests using `sizes="any"` for SVG icons.
- Best practices suggest omitting the "sizes" attribute for SVG icons.

However, Next.js — as seen above — specifies the "sizes" attribute with the value chosen from the `viewBox` from the SVG image. (This issue presents no matter if the "height" and "width" attributes are specified for the SVG image.)

This causes an issue with Chromium-based browsers, which will not choose the SVG icon over the favorites icon if "sizes" is specified with pixel values for the SVG icon. If either `sizes="any"` or no "sizes" attribute is specified, these browsers will use the SVG icon.

This issue appears regardless of whether or not standalone is specified and whether or not Next.js is running in dev mode or built as a standalone app.

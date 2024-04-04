---
title: "Hugo Winston theme"
date: 2018-12-29T10:26:40+10:00
categories: ["Github", "Opensource", "Projects"]
description: "One of my opensource projects, a minimal blog theme for Hugo."
icon: "images/icons/icons8-merge-git-50.png"
external_link: false
button: 
  url: "https://github.com/zerostaticthemes/hugo-winston-theme"
  text: "View On Github"
  external: true
---

I built this theme which is a unique and modern website design created for authors and writers. As the author of this theme, I aimed to provide a clean and minimalistic look that highlights the content, making it the center of attention. 

### Project structure

```bash
.
├── assets
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── _author.scss
│       ├── _breakpoints.scss
│       ├── _content.scss
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _intro.scss
│       ├── _main-menu-mobile.scss
│       ├── _main-menu.scss
│       ├── _normalize.scss
│       ├── _pagination.scss
│       ├── _summary.scss
│       └── style.scss
├── layouts
│   ├── _default
│   │   ├── baseof.html
│   │   ├── list.html
│   │   ├── single.html
│   │   └── summary.html
│   ├── partials
│   │   ├── author-large.html
│   │   ├── author.html
│   │   ├── footer.html
│   │   ├── google-analytics.html
│   │   ├── header.html
│   │   ├── menu-main-mobile.html
│   │   ├── paginator.html
│   ├── posts
│   │   ├── list.html
│   │   └── single.html
│   ├── tags
│   │   └── list.html
│   └── index.html
├── README.md
└── theme.toml
```

## Example

```js
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".header").addClass("header-scrolled");
  } else {
    $(".header").removeClass("header-scrolled");
  }
});
```

## Markdown Flavours

There are several different versions of markdown

### CommonMark

From 2012, a group of people including Jeff Atwood and John MacFarlane launched what Atwood characterized as a standardization effort. A community website now aims to "document various tools and resources available to document authors and developers, as well as implementors of the various markdown implementations".

### GitHub Flavored Markdown (GFM)

In 2017, GitHub released a formal specification of their GitHub Flavored Markdown (GFM) that is based on CommonMark. It follows the CommonMark specification exactly except for tables, strikethrough, autolinks and task lists, which the GitHub spec has added as extensions. GitHub also changed the parser used on their sites accordingly, which required that some documents be changed. For instance, GFM now requires that the hash symbol that creates a heading be separated from the heading text by a space character.he user to create their own.

![Photo of laptop](/images/photos/content-1.webp)

### Markdown Extra

Markdown Extra is a lightweight markup language based on Markdown implemented in PHP (originally), Python and Ruby. It adds features not available with plain Markdown syntax. Markdown Extra is supported in some content management systems such as, for example, Drupal.

Markdown Extra adds the following features to Markdown:

- markdown markup inside HTML blocks
- elements with id/class attribute
- "fenced code blocks" that span multiple lines of code
- tables
- definition lists
- footnotes
- abbreviations

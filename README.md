![iamsteve.me banner](/public/static/images/twitter-card.png)

# iamsteve.me design & code blog
A design and code blog using Next.js. The codebase started from the excellent [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Development
First, run the development server:

```bash
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Post

### Frontmatter
Here's an example of a post's frontmatter:

```
---
title: "Visual design tips you can apply immediately"
date: "2017-07-04T11:51:00+00:00"
lastmod: "2019-10-04T07:24:49+00:00"
summary: "Add a little extra polish to any of your designs with these tips."
metadesc: "When designing there are things you can rely upon regardless of the situation. These are things which add extra polish, and are generally hidden to the untrained eye."
theme: "#fff7e0"
tags: ["Design"]
categories: ["Design"]
images: ["/static/images/blog/visual-design-tips-featured-image.png"]
large: "/static/images/blog/visual-design-tips-featured-image.png"
medium: "/static/images/blog/visual-design-tips-featured-image-medium.png"
ogImage: "/assets/og/cover.jpg"
status: "open"
id: 164
fileroot: "visual-design-tips-you-can-apply-immediately"
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled frontmatter.

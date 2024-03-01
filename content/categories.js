const categories = [
  {
    title: 'Design',
    slug: '/category/design',
    slugAsParams: 'design',
    description:
      'From speedy quick tips and resources, to typography and colour techniques. As well as UX and visual design magic',
    parent: false,
    theme: 'rio',
    icon: 'pen',
    exclude: false,
  },
  {
    title: 'Quick tip',
    slug: '/category/quick-tip',
    slugAsParams: 'quick-tip',
    description:
      'Short posts covering a technique or feature to help you figure something out and get back to designing',
    parent: 'design',
    theme: 'dandelion',
    icon: 'bolt',
    exclude: false,
  },
  {
    title: 'Typography',
    slug: '/category/typography',
    slugAsParams: 'typography',
    description:
      'The latest type trends, alternatives to popular typefaces and typography techniques',
    parent: 'design',
    theme: 'neutral-02',
    icon: 'type',
    exclude: false,
  },
  {
    title: 'Colour',
    slug: '/category/colour',
    slugAsParams: 'colour',
    description:
      'A fundamental skill within design, it’s a balance through brand, emotion, accessibility and usabilility',
    parent: 'design',
    theme: 'cornflour',
    icon: 'palette',
    exclude: false,
  },
  {
    title: 'Resources',
    slug: '/category/resources',
    slugAsParams: 'resources',
    description: 'Collections of links, inspiration and more',
    parent: 'design',
    theme: 'fern',
    icon: 'settings',
    exclude: false,
  },
  {
    title: 'UX design',
    slug: '/category/ux-design',
    slugAsParams: 'ux-design',
    description: 'Broadly covering all things that affect a users experience',
    parent: 'design',
    theme: 'grass',
    icon: 'cursor',
    exclude: false,
  },
  {
    title: 'Prototyping',
    slug: '/category/prototyping',
    slugAsParams: 'prototyping',
    description: 'Prototyping posts',
    parent: 'design',
    theme: 'neutral-02',
    icon: 'play',
    exclude: true,
  },
  {
    title: 'Visual design',
    slug: '/category/visual-design',
    slugAsParams: 'visual-design',
    description:
      'Looking at how we design the interfaces we use and a look at the how and why behind visual techniques',
    parent: 'design',
    theme: 'lavender',
    icon: 'vector-square',
    exclude: false,
  },
  {
    title: 'Code',
    slug: '/category/code',
    slugAsParams: 'code',
    description:
      'Exploring CSS and JavaScript with modern techniques. Through building designs I use this to share what I learn',
    parent: false,
    theme: 'dandelion',
    icon: 'code',
    exclude: false,
  },
  {
    title: 'Animation',
    slug: '/category/animation',
    slugAsParams: 'animation',
    description:
      'The technical side of animation, from simple CSS transitions through to using libraries like Framer Motion',
    parent: 'code',
    theme: 'magenta',
    icon: 'play',
    exclude: false,
  },
  {
    title: 'CSS',
    slug: '/category/css',
    slugAsParams: 'css',
    description:
      'All things CSS. Looking at specific properties and techniques, to building components and atomic CSS like tailwind',
    parent: 'code',
    theme: 'grass',
    icon: 'css',
    exclude: false,
  },
  {
    title: 'Patterns',
    slug: '/category/patterns',
    slugAsParams: 'patterns',
    description:
      'Quick and easy reusable techniques that you can apply to your projects.',
    parent: 'code',
    theme: 'fern',
    icon: 'puzzle',
    exclude: false,
  },
  {
    title: 'JavaScript',
    slug: '/category/javascript',
    slugAsParams: 'javascript',
    description:
      'Adding an extra layer of interactivity to build upon foundations of our markup',
    parent: 'code',
    theme: 'magenta',
    icon: 'note',
    exclude: false,
  },
  {
    title: 'Website',
    slug: '/category/website',
    slugAsParams: 'website',
    description:
      'Posts specific to this website, such as design updates and changes',
    parent: false,
    theme: 'cornflour',
    icon: 'folder',
    exclude: true,
  },
  {
    title: 'Terminal',
    slug: '/category/terminal',
    slugAsParams: 'terminal',
    description: 'Terminal posts',
    parent: false,
    theme: 'cornflour',
    icon: 'code',
    exclude: true,
  },
  {
    title: 'Everything',
    slug: '/blog',
    slugAsParams: 'blog',
    description: 'All posts',
    parent: false,
    theme: 'cornflour',
    icon: 'folder',
    exclude: true,
  },
]

export default categories

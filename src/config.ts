const defaultsLayoutOpts = {
  isDraggable: true,
  isResizable: false,
  static: false,
};

export const lgLayout = [
  {
    i: "item1",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    minW: 1,
    minH: 1,
    type: "SocialCardComponent",
    ...defaultsLayoutOpts,
  },
  {
    i: "item2",
    x: 1,
    y: 0,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
    ...defaultsLayoutOpts,
  },
  {
    i: "item3",
    x: 2,
    y: 0,
    w: 2,
    h: 0.5,
    minW: 2,
    minH: 0.5,
    type: "TextComponent",
    text: "Hello World",
    ...defaultsLayoutOpts,
  },
  {
    i: "item4",
    x: 3,
    y: 0,
    w: 2,
    h: 0.5,
    minW: 2,
    minH: 0.5,
    type: "TipTap",
    ...defaultsLayoutOpts,
  },
  {
    i: "item5",
    x: 0,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "SocialCardComponent",
    ...defaultsLayoutOpts,
  },
  {
    i: "item6",
    x: 1,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
    ...defaultsLayoutOpts,
  },
  {
    i: "item7",
    x: 2,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "TextComponent",
    text: "Hello World",
    ...defaultsLayoutOpts,
  },
  {
    i: "item8",
    x: 3,
    y: 1,
    w: 2,
    h: 2,
    minW: 2,
    minH: 0.5,
    type: "TipTap",
    ...defaultsLayoutOpts,
  },
];

export const mdLayout = [
  {
    i: "item1",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    minW: 1,
    minH: 1,
    type: "SocialCardComponent",
    ...defaultsLayoutOpts,
  },
  {
    i: "item2",
    x: 3,
    y: 0,
    w: 1,
    h: 2,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
    ...defaultsLayoutOpts,
  },
  {
    i: "item3",
    x: 2,
    y: 1,
    w: 2,
    h: 0.5,
    minW: 2,
    minH: 0.5,
    type: "TextComponent",
    text: "Hello World",
    ...defaultsLayoutOpts,
  },
  {
    i: "item4",
    x: 1,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "TipTap",
    ...defaultsLayoutOpts,
  },
];

export const smLayout = [
  {
    i: "item1",
    x: 2,
    y: 0,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "SocialCardComponent",
    ...defaultsLayoutOpts,
  },
  {
    i: "item2",
    x: 3,
    y: 0,
    w: 1,
    h: 2,
    minW: 1,
    minH: 1,
    type: "ImageComponent",
    src: "https://source.unsplash.com/random",
    ...defaultsLayoutOpts,
  },
  {
    i: "item3",
    x: 0,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "TextComponent",
    text: "Hello World",
    ...defaultsLayoutOpts,
  },
  {
    i: "item4",
    x: 1,
    y: 1,
    w: 1,
    h: 1,
    minW: 1,
    minH: 1,
    type: "TipTap",
    ...defaultsLayoutOpts,
  },
];

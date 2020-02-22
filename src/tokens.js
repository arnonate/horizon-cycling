const size = 20;
const rhythm = size * 1.5;

export const Tokens = {
  color: {
    blue: "#252B34",
    mute: "#F0F0F0",
    gray: "#E0E0E0",
    gold: "#9C9787",
    white: "#FFFFFF"
  },
  font: {
    family: {
      inter: {
        src: "https://rsms.me/inter/inter.css",
        body: '"Inter", sans-serif',
        var: '"Inter var", sans-serif'
      },
      droid: {
        src: "https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap",
        slab: '"Roboto Slab", sans-serif'
      }
    },
    size: {
      base: `${size}px`,
      sm: `${size * 0.75}px`,
      lg: `${size * 1.5}px`,
      xl: `${size * 2}px`
    },
    lineHeight: {
      base: `${rhythm}px`,
      lg: `${rhythm * 2}px`,
      xl: `${rhythm * 3}px`
    },
    weight: {
      normal: "300",
      bold: "700"
    }
  },
  gutter: `${rhythm / 2}px`,
  rhythm: `${rhythm}px`,
  wrap: {
    narrow: "800px",
    wide: "1200px"
  }
};

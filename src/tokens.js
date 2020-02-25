const size = 2;
const rhythm = 3;

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
      base: `${size}rem`,
      sm: `${size * 0.75}rem`,
      lg: `${size * 1.5}rem`,
      xl: `${size * 2}rem`
    },
    lineHeight: {
      base: `${rhythm}rem`,
      lg: `${rhythm * 2}rem`,
      xl: `${rhythm * 3}rem`
    },
    weight: {
      normal: "300",
      bold: "700"
    }
  },
  gutter: `${rhythm}rem`,
  rhythm: `${rhythm}rem`,
  wrap: {
    narrow: "800px",
    wide: "1200px"
  },
  border: {
    size: `3px`
  },
  opacity: `0.5`,
  transition: {
    timing: `200ms`,
    type: `linear`
  },
  break: `890px`
};

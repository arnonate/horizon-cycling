const size = 20;
const rhythm = size * 1.5;

export const Tokens = {
  color: {
    blue: "#252B34",
    gray: "#F0F0F0",
    gold: "#9C9787",
    white: "#FFFFFF"
  },
  font: {
    family: {
      src: "https://rsms.me/inter/inter.css",
      body: '"Inter", sans-serif',
      var: '"Inter var", sans-serif'
    },
    size: {
      base: `${size}px`,
      sml: `${size / 2}px`,
      lg: `${rhythm}px`,
      xlg: `${size * 2}px`
    },
    lineHeight: {
      base: `${rhythm}px`,
      lg: `${rhythm * 2}px`,
      xlg: `${rhythm * 3}px`
    },
    weight: {
      normal: "300",
      bold: "700"
    }
  },
  gutter: `${rhythm}px`,
  rhythm: `${rhythm}px`
};

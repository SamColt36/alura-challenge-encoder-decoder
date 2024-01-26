/** @type {import(tailwindcss).Config} */
export const content = ["**/*.html"];
export const theme = {
  extend: {
    screens: {
      xl: { min: "1024px" },
      // => @media and (min-width: 1024px) and (max-width: 1279px)
      lg: { min: "768px", max: "1023px" },
      // => @media and (min-width: 768px) and (max-width: 1023px)
      md: { min: "426px", max: "767px" },
      // => @media and (min-width: 426px) and (max-width: 767px)
      sm: { min: "300px", max: "425px" },
      // => @media and (min-width: 300px) and (max-width: 425px)
    },
    colors: {
      "color-primary": "#0A3871",
      "color-background": "#F3F5FC",
      "color-auxiliary-text": "#343A40"
    }
  }
};
export const plugins = [];

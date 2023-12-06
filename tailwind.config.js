
const config = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridRow: {
        'span-2': 'span 2 / span 2',
      },
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },

      borderWidth: {
        6: "6px",
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "tranlateY(-2px)" },
          to: { opacity: "1", transform: "tranlateY(0)" },
        },
      },

      animation: {
        slideDownAndFade: "slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;

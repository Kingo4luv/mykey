module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  theme: {
    extend: {
        colors: {
          grey: "#5D5B5B",
          "client-grey": "#FAFAFA",
          "icon-grey": "#999999",
          "border-grey": "#EDEDED",
          "dark-blue": "#007499",
          "slightly-dark-blue": "#0086B3",
          "slightly-slight-dark-blue": "#0099CC",
          "blue": "#00ACE6",
          "slightly-light-blue": "#00BFFF", 
          "light-blue": "#66D9FF",
          "light-shade-blue": "#E6F9FF",
          "black": "#292929",
          "form-text-grey": "#A8A8A8",
          "icon-black": "#7B7B7B",
          "stroke-grey": "#E4E4E4",
          "yellow": "#FDDF59",
          "skin-tone": "#A26744",
          "hair": "#101010",
          "icon-yellow": "#FFF59B",
          "card-blue": "#029CCF",
          "footer-black": "#191919",
          "toggle-green": "#AADE87",
          "mobile-nav-blue": '#029CCF',
          research: "#0ACE5C",
          customer: "#2460FB",
          inside: "#F59019"

        },
        boxShadow: {
          "button-shadow": "0px 0px 8px #CAF1FF",
          "box-shadow": "0px 0px 20px rgba(137, 137, 137, 0.25)",
          "drop-down-shadow": "0px 0px 20px rgba(201, 201, 201, 0.25)",
          "card-shadow": "0px 0px 20px rgba(215, 215, 215, 0.25)",
          "menu-drop-down-shadow": "0px 8px 20px rgba(215, 215, 215, 0.25)",
          "menu-shadow": "0px 0px 20px rgba(137, 137, 137, 0.25)",

        },
        skew: {
          '15': '25deg',
          '-15': '-25deg',
          '20': '20deg',
        },
        height: {
          90: "22rem",
          92: "23rem",
          100: "30rem",
          104: "34rem",
          108: "38rem",
          112: "42rem",
          116: "46rem",
          120: "50rem",
          124: "54rem",
          128: "60rem",
        },
        width: {
          90: "22rem",
          92: "23rem",
          100: "30rem",
          104: "34rem",
          108: "38rem",
          112: "42rem",
          116: "46rem",
          120: "50rem",
          124: "54rem",
          128: "60rem",
        },

        fontSize: {
          "main-head": ['3.75rem', '4.7rem'],
          "head": ['3rem', '3.75rem'],
          "headline-3": ['3rem', '3.3rem'],
          "headline-4": ['2.13rem', '2.85rem'],
          "headline-5": ['2rem', '2.37rem'],
          "headline-6": ['1.25rem', '1.875rem'],
          "headline-7": ['1.15rem', '1.875rem'],
          "head-text": ['1rem', '1.68rem'],
          "subtitle-1": ['1.25rem', '2.1rem'],
          "subtitle-2": ['1rem', '1.625rem'],
          "subtitle-3": ['0.875rem', '1.5rem']
        },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
  
};

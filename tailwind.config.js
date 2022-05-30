module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(bg-|text-)/,
      variants: ["hover", "focus", "active", "visited", "dark"],
    },
  ],
  plugins: [],
};

// !!! DANGER STOP AND READ !!!
// -- safelist
// This is just for experimentation
// safelisting like this generates all of tailwind css
// in the output file and will blow up your load times
// ^^^^DANGER STOP AND READ^^^^
// safelist: [
//   {
//     pattern: /.*/,
//     variants: [
//       "hover",
//       "focus",
//       "focus-within",
//       "focus-visible",
//       "active",
//       "visited",
//       "target",
//       "first",
//       "last",
//       "only",
//       "odd",
//       "even",
//       "first-of-type",
//       "last-of-type",
//       "only-of-type",
//       "empty",
//       "disabled",
//       "checked",
//       "indeterminate",
//       "default",
//       "required",
//       "valid",
//       "invalid",
//       "in-range",
//       "out-of-range",
//       "placeholder-shown",
//       "autofill",
//       "read-only",
//       "open",
//       "before",
//       "after",
//       "first-letter",
//       "first-line",
//       "marker",
//       "selection",
//       "file",
//       "placeholder",
//       "sm",
//       "md",
//       "lg",
//       "xl",
//       "2xl",
//       "dark",
//       "portrait",
//       "landscape",
//       "motion-safe",
//       "motion-reduce",
//       "print",
//       "rtl",
//       "ltr",
//     ],
//   },
// ],

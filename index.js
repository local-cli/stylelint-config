module.exports = {
  extends: ["stylelint-prettier/recommended"],
  rules: {
    "declaration-no-important": [true, { severity: "warning" }],
    "selector-class-pattern": /^[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9]$/,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep"],
      },
    ],
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: [/.*/],
        ignoreFunctions: [/.*/],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["box-orient", "line-clamp"],
      },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["box"],
      },
    ],
  },
};

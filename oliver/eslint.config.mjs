import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Downloaded reference artifacts (original site source), not app code.
    "docs/**",
  ]),
  {
    rules: {
      // Faithful clone uses plain <img> to match the original site's DOM; the
      // ported CSS targets img tags and next/image would alter structure.
      // Image optimization is out of scope for the emulation phase.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;

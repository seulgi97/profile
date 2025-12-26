import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: "#faf5ff" },
            100: { value: "#f3e8ff" },
            200: { value: "#e9d5ff" },
            300: { value: "#d8b4fe" },
            400: { value: "#c084fc" },
            500: { value: "#a855f7" },
            600: { value: "#9333ea" },
            700: { value: "#7c3aed" },
            800: { value: "#6b21a8" },
            900: { value: "#581c87" },
          },
          white: { value: "#ffffff" },
          gray: {
            50: { value: "#fafafa" },
            100: { value: "#f4f4f5" },
            200: { value: "#e4e4e7" },
            300: { value: "#d4d4d8" },
            400: { value: "#a1a1aa" },
            500: { value: "#71717a" },
            600: { value: "#52525b" },
            700: { value: "#3f3f46" },
            800: { value: "#27272a" },
            900: { value: "#18181b" },
          },
        },
        fonts: {
          body: { value: "var(--font-pretendard), system-ui, sans-serif" },
          heading: { value: "var(--font-pretendard), system-ui, sans-serif" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: "{colors.white}" },
            subtle: { value: "{colors.gray.50}" },
            muted: { value: "{colors.gray.100}" },
          },
          text: {
            DEFAULT: { value: "{colors.gray.900}" },
            muted: { value: "{colors.gray.600}" },
            subtle: { value: "{colors.gray.400}" },
          },
          accent: {
            DEFAULT: { value: "{colors.primary.600}" },
            hover: { value: "{colors.primary.700}" },
            subtle: { value: "{colors.primary.100}" },
          },
        },
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: "react",
});

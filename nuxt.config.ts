

import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Book-Store",
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
    ],

  },


  buildModules: ["@nuxtjs/svg"],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
});

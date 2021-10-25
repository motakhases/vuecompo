<template>
  <div class="w-full mx-auto max-w-[1024px] bg-secondary rounded-md p-xl mt-2xl relative">
    <PageHeading
      :sticky="true"
      title="عنوان"
      desc="توضیحات صفحه"
      has-button
      :btn="{ label: 'تست'}"
      @btnClick="testMethod()"
    />
    <h1 class="font-bold text-ls-md mb-sm">
      @zarinpal/web-components
    </h1>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
    <p>
      This package providing a new design system for <a href="https://zarinpal.com/">ZarinPal</a> that contains a foundation and many components based on
      the new design system. although this package developing for ZarinPal, it will use for other ZarinPal products in
      the future. In order to increase development speed and consistency on the style guide, we decided to use
      TailwindCSS. So this package uses <a href="https://tailwindcss.com/">TailwindCSS</a>, <a href="https://www.typescriptlang.org/">Typescript</a>
      and <a href="https://vuejs.org/">Vuejs</a>.
    </p>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import PageHeading from './components/PageHeading/index.vue';

export default Vue.extend({
  name: 'App',
  components: { PageHeading },
  methods: {
    testMethod() {
      console.log('hiii');
    },
  },
});
</script>

<template>
  <div>
    <Modal
      v-if="showModal"
      title="تست عنوان"
      @close="showModal = false"
    >
      <div slot="body">
        <p>salam</p>
        <p>salam</p>
        <p>salam</p>
        <p>salam</p>
      </div>
      <div slot="footer">
        <button> footer </button>
      </div>
    </Modal>
    <NotificationCenter
      v-if="true"
      :announcements="announcements"
    />
    <div class="w-full mx-auto max-w-[1024px] bg-secondary rounded-md p-xl mt-2xl mb-2xl relative">
      <PageHeading
        :sticky="true"
        title="عنوان"
        desc="توضیحات صفحه"
        has-button
        :btn="{ text: 'تست'}"
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
      <Pagination />
    </div>
  </div>
</template>

<script lang="js">
import moment from 'moment-jalaali';
import Vue from 'vue';
import PageHeading from './components/PageHeading/index.vue';
import Pagination from './components/Pagination/index.vue';
import Modal from './components/Modal/index.vue';
import NotificationCenter from './components/NotificationCenter/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    PageHeading, Modal, NotificationCenter, Pagination,
  },
  data() {
    return {
      showModal: false,
      announcements: [
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: '',
          date: moment().format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: 'https://www.w3schools.com/css/lights600x400.jpg',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(1, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(2, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(3, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(4, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(5, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(6, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(7, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(8, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(9, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().subtract(10, 'days').format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
        },
      ],
    };
  },
  methods: {
    testMethod() {
      console.log('hiii');
    },
  },
});
</script>

<template>
  <div dir="rtl">
    <NavigationBar
      :terminals="terminals"
      :above-links="alinks"
      :below-links="blinks"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    NavigationBar,
  },

  data() {
    return {
      terminals: [
        {
          domain: 'zarin.express\\/mrtestian',
          name: '\u0645\u0633\u062a\u0631 \u062a\u0633\u062a\u06cc\u0627\u0646',
          status: 'ACTIVE',
        }, {
          domain: 'zarinp.al\\/armanshojaei',
          name: '\u0622\u0631\u0645\u0627\u0646 \u0634\u062c\u0627\u0639\u06cc',
          status: 'ACTIVE',
        },
      ],
      alinks: [
        {
          title: 'نمای کلی',
          link: '/',
          icon: 'QuestionCircle',
          active: true,
        },
        {
          title: 'پیشخوان',
          link: '/',
          icon: 'QuestionCircle',
        },
        {
          title: 'تراکنش‌ها',
          link: '/',
          icon: 'QuestionCircle',
        },
        {
          title: 'تسویه حساب',
          link: '/',
          icon: 'QuestionCircle',
        },
        {
          title: 'محصولات',
          link: '/',
          icon: 'QuestionCircle',
        },
      ],
      blinks: [
        {
          title: 'حساب‌های بانکی',
          link: '/',
          icon: 'QuestionCircle',
        },
      ],
    };
  },
});
</script>

<style>
body {
  @apply bg-background
}
</style>

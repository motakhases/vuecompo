<template>
  <div dir="rtl">
    <TopBar>
      <template v-slot:right-side>
        <Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        />
        <div class="zpl-topbar-logo">
          <Logo
            size="medium"
            name="zarinpal"
            type="logo"
            language="fa"
          />
        </div>
      </template>
      <template v-slot:left-side>
        <Icon
          name="questionCircle"
          class="zpl-topbar-menu"
        />
        <Notification :badge="badge" />
        <UserProfile username="نام کاربر" />
      </template>
    </TopBar>
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
import TopBar from '@/components/TopBar/index.vue';
import Logo from '@/components/Logo/index.vue';
import Icon from '@/components/Icon/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import UserProfile from '@/components/TopBar/UserProfile/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Logo,
    Icon,
    TopBar,
    Notification,
    UserProfile,
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

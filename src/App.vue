<template>
  <div dir="rtl">
    <!-- Topbar -->
    <TopBar
      :terminals="terminals"
      @showNotifs="$refs.notificationCenter.toggle()"
      @toggleMenu="$refs.navigationBar.toggle()"
    />

    <!-- Main -->
    <div class="flex w-full">
      <NavigationBar
        ref="navigationBar"
        :terminals="terminals"
        :above-links="sidebarLinks"
        :below-links="belowLinks"
        :active-terminal="activeTerminal"
      />

      <NotificationCenter
        ref="notificationCenter"
        :announcements="[]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Components
 * --------------------------------
 */
import TopBar from '@/components/TopBar/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import NotificationCenter from '@/components/NotificationCenter/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TopBar,
    NavigationBar,
    NotificationCenter,
  },

  data() {
    return {
      activeTerminal: {},
      terminals: [
        {
          domain: '...',
          id: '1',
          logo: '...',
          name: 'ترمینال تستی',
          link: '...',
          route: '...',
        },
      ],
      sidebarLinks: [
        {
          title: 'پیشخوان',
          link: '/',
          icon: 'GridLayout',
          active: true,
        },
        {
          title: 'تراکنش‌ها',
          link: '/',
          icon: 'DrpItemCheck',
        },
        {
          title: 'تسویه حساب',
          link: '/',
          icon: 'CreditCheckout',
        },
        {
          title: 'محصولات',
          link: '/',
          icon: 'Box',
        },
      ],
      belowLinks: [
        {
          title: 'حساب‌های بانکی',
          link: '/',
          icon: 'PaymentCard',
        },
        {
          title: 'تیکت‌ها',
          link: '/',
          icon: 'ChatMessage',
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

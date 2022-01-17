<template>
  <div dir="rtl">
    <TopBar>
      <template v-slot:right-side>
        <Button
          icon="menuBurger"
          type="tertiary"
        />
        <!-- <Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        /> -->
        <div class="zpl-topbar-logo">
          <Logo
            size="medium"
            name="zarinpal"
            type="logo"
            language="fa"
          />
        </div>
        <div class="zpl-topbar-terminal-btn">
          <Button
            after-icon="AngleDown"
            type="tertiary"
            text="عنوان درگاه"
          />
        </div>
      </template>
      <template v-slot:left-side>
        <div class="zpl-topbar-question-btn">
          <Button
            icon="questionCircle"
            type="tertiary"
          />
        </div>
        <Notification
          badge="99"
          @click.native="displayNotifications"
        />
        <UserProfile username="نام کاربر" />
      </template>
    </TopBar>
    <NavigationBar
      :toggle="false"
      :terminals="terminals"
      :above-links="alinks"
      :below-links="blinks"
    />
    <NotificationCenter
      :announcements="data"
      :is-open="showNotifs"
      :toggle="displayNotifications"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import moment from 'moment-jalaali';
import NotificationCenter from '@/components/NotificationCenter/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import Logo from '@/components/Logo/index.vue';
import UserProfile from '@/components/TopBar/UserProfile/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NotificationCenter,
    TopBar,
    NavigationBar,
    Logo,
    UserProfile,
    Notification,
    Button,
  },
  data() {
    return {
      // sidebar
      terminals: [
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        }, {
          domain: 'zarinp.al/xandar',
          name: 'زاندار',
          status: 'deactive',
        },
      ],
      alinks: [
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
      blinks: [
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
      // notification center
      showNotifs: false,
      data: [
        {
          title: 'عنوان',
          message: 'توضیحات',
          date: moment().format('YYYY-M-D'),
          link: 'https://next.zarinpal.com/panel/dashboard',
          image: '',
          icon: 'QuestionCircle',
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
    displayNotifications() {
      this.showNotifs = !this.showNotifs;
    },
  },

});
</script>

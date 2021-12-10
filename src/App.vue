<template>
  <div>
    <Avatar
      size="medium"
      img="https://www.digikala.com/static/files/fd4840b2.svg"
    />
    <AvatarProgressBar
      size="large"
      type="silver"
      :percent="10"
    />
    <BankCards
      username="شایسته ملک پور"
      bank-name="بانک سامان"
      logo="saman"
      amount="5120000"
      iban="IR870560085577703153460001"
      rrn="892938820001277640002746"
      :default-account="false"
    />
    <Button
      text="me"
      fill
    />
    <!-- <TopBar>
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
        <Notification badge="2" />
        <UserProfile username="نام کاربر" />
      </template>
    </TopBar>
    <Icon name="terminal" /> -->
  </div>
</template>

<script lang="js">
import moment from 'moment-jalaali';
import Vue from 'vue';
import TopBar from '@/components/TopBar/index.vue';
import Logo from '@/components/Logo/index.vue';
import Icon from '@/components/Icon/index.vue';
import UserProfile from '@/components/TopBar/UserProfile/index.vue';
import Notification from '@/components/TopBar/Notification/index.vue';
import Avatar from '@/components/Avatar/index.vue';
import AvatarProgressBar from '@/components/AvatarProgressBar/index.vue';
import BankCards from '@/components/BankCards/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    // TopBar, Logo, Icon, UserProfile, Notification,
    Avatar,
    AvatarProgressBar,
    BankCards,
    Button,
  },
  data() {
    return {
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

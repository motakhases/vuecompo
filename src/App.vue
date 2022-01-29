<template>
  <div
    dir="rtl"
    class="bg-[#F5F5F5] h-[2000px]"
  >
    <TopBar
      :terminals="terminals"
      @showNotifs="displayNotifications"
    />
    <!-- <NavigationBar
      :toggle="false"
      :terminals="terminals"
      :above-links="alinks"
      :below-links="blinks"
    /> -->
    <PageHeading
      :return-b-t-n="true"
      :sticky="true"
      title="عنوان"
      desc="توضیحات"
      :has-button="true"
      :statuses="[{text:'غیر فعال', type:'negative'},{text:'فعال', type:'positive'}]"
    >
      <template v-slot:buttons>
        <Button
          text="تست"
          class="mr-md"
        />
      </template>
    </PageHeading>
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
import PageHeading from '@/components/PageHeading/index.vue';
// import NavigationBar from '@/components/NavigationBar/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NotificationCenter,
    TopBar,
    PageHeading,
    Button,
    // NavigationBar,
  },
  data() {
    return {
      // sidebar
      btn: {
        text: 'تست',
        type: 'primary',
        size: 'medium',
        disabled: false,
        loading: false,
        afterIcon: '',
        beforeIcon: '',
      },
      terminals: [
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
          domain: 'zarin.express/zardu',
          name: 'زاردو',
          status: 'ACTIVE',
        },
        {
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

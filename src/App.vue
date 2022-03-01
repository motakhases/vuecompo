<template>
  <div
    dir="rtl"
    class="bg-background"
  >
    <TopBar
      :terminals="terminals"
      @showNotifs="$refs.notificationCenter.toggle()"
      @toggleMenu="$refs.navigationBar.toggle()"
    />
    <div class="flex">
      <NavigationBar
        ref="navigationBar"
        :terminals="terminals"
        :above-links="alinks"
        :below-links="blinks"
        :active-terminal="{
          domain: 'sa1601.ir',
          id: '10',
          name: '1601',
        }"
      />

      <NotificationCenter
        ref="notific
a         tionCe
n         ter"
        :announcements="data"
      />
      <div class="w-full">
        {{ filters.status }}

        <PageHeading
          sticky
          title="ع
           نوان"
          desc="توضیحات"
          :has-button="true"
        >
          <template v-slot:buttons>
            <Button text="تست" />
            <Button text="تست دو" />
          </template>
        </PageHeading>
        <div class="container">
          status   {{ status }}
          <button @click="toggleModal">
            open
          </button>
          <Filters
            :is-open="modal"
            :toggle="toggleModal"
            :filter="filter"
            :clear-query="clearQuery"
          >
            <FilterAccordion
              v-model="status"
              text="وضعیت"
              name="secondCheckBox"
              val="status"
            >
              <Radio
                v-model="filters.status"
                name="r"
                val="active"
                text="موفق"
              />
              <Radio
                v-model="filters.status"
                name="r"
                val="inactive"
                text="ناموفق"
              />
            </FilterAccordion>
            <FilterAccordion
              v-model="status"
              text="تاریخ"
              name="secondCheckBox"
              val="date"
            >
              <FilterDate
                v-model="filters.date"
                :date="range"
              />
            </FilterAccordion>
            <!-- <FilterAccordion
              v-model="price"
              text="مبلغ"
              name="thirdCheckBox"
              val="سومین گزینه"
            >
              <FilterAmount
                v-model="priceValue"
                :amount-filter="priceFilterType"
                @updateAmount="updateAmountt"
              />
            </FilterAccordion> -->
          </Filters>      {{ range }} rnge
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import moment from 'moment-jalaali';

// Components
import Button from '@/components/Button/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import PageHeading from '@/components/PageHeading/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import NotificationCenter from '@/components/NotificationCenter/index.vue';
import Filters from '@/components/Filters/index.vue';
import Radio from '@/components/Radio/index.vue';
import FilterAccordion from '@/components/Filters/FilterAccordion/index.vue';
import FilterDate from '@/components/Filters/FilterDate/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    NavigationBar,
    PageHeading,
    NotificationCenter,
    Button,
    Filters,
    Radio,
    FilterAccordion,
    FilterDate,
  },
  data() {
    return {
      toggleMenu: false,
      filters: {
        status: '',
        date: '',
      },
      range: '',
      status: [],
      date: [],
      modal: false,
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
      terminals: [
        {
          id: '283934', domain: 'afra.com', route: { name: 'f' }, name: 'افرامارکت', status: 'ACTIVE',
        },
        {
          id: '56882', domain: 'azadmn.com', route: { name: 'f' }, name: 'حذف لوگو', status: 'REJECTED',
        },
        {
          id: '55077', domain: 'zarinp.al/azadehmn', route: { name: 'f' }, name: 'سیده آزاده میرنظامی', status: 'PENDING',
        },
        {
          id: '52054', domain: 'testfirefox.ir', route: { name: 'f' }, name: 'تست اصلی',
        },
        {
          id: '52052', domain: 'testf.ir', route: { name: 'f' }, name: 'تست اصلی مرورگر',
        },
        {
          id: '52049', domain: 'ptestzarin.com', route: { name: 'f' }, name: 'تست مرورگر',
        },
        {
          id: '52040', domain: 'pzarinpal.com', route: { name: 'f' }, name: 'ایحاد درکاه',
        },
        {
          id: '49385', domain: 'irna.ir', route: { name: 'f' }, name: 'خبرگزاری جمهوری اسلامی',
        },
        {
          id: '49384', domain: 'itna.ir', route: { name: 'f' }, name: 'ايتنا - سایت خبری تحلیلی فناوری اطلاعات و ارتباطات',
        },
        {
          id: '49383', domain: 'azad.com', route: { name: 'f' }, name: 'تست طولانی بودن کاراکتر درگاه پرداخت در پنل کاربری زرین پال',
        },
        {
          id: '16424', domain: 'testblacljulist.com', route: { name: 'f' }, name: 'azadehmirnezami',
        },
        {
          id: '16423', domain: 'azada.com', route: { name: 'f' }, name: 'aZcom',
        },
        {
          id: '10808', domain: 'azad.com', route: { name: 'f' }, name: 'تست نهایی اپلود',
        },
        {
          id: '10800', domain: 'azaz.com', route: { name: 'f' }, name: 'تست عکس',
        },
        {
          id: '10564', domain: 'azad.com', route: { name: 'f' }, name: 'منتذالربیقبالتات',
        },
        {
          id: '10558', domain: 'azad.com', route: { name: 'f' }, name: 'نهتالبیالتانتمن',
        },
        {
          id: '10259', domain: 'azadehmnmn.ir', route: { name: 'f' }, name: 'تست تست',
        },
        {
          id: '10062', domain: 'test.ir', route: { name: 'f' }, name: 'تست شماره 5',
        },
        {
          id: '10', domain: 'sa1601.ir', route: { name: 'f' }, name: 'اس ای 1601',
        }],
      alinks: [
        {
          title: 'پیشخوان',
          link: { path: '/' },
          icon: 'GridLayout',
          active: true,
        },
        {
          title: 'تراکنش‌ها',
          link: { name: 'panel-terminal-session', params: { terminal: '22324' } },
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
    };
  },
  mounted() {
    this.fillStatus();
    // this.status = Object.keys(this.$route.query);
    // console.log(Object.keys(this.$route.query));
  },

  methods: {
    displayNotifications() {
      console.log('a');
    },
    filter() {
      const { date } = this.filters;
      // console.log(date.length);
      // if (date) {
      //   if (Array.isArray(date)) {
      //     this.filters = { ...this.filters, created_from_date: date[0], created_to_date: date[1] };
      //     console.log('arr', this.filters);
      //     this.$router.push({ query: this.filters });
      //   } else {
      //     // this.$router.push({ query: { created_from_date: date, created_to_date: date } });
      //   }
      // } else {
      //   // this.$router.push({ query: this.filters });
      // }
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      this.toggleModal();
      console.log(this.status);
      const res = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const item in this.filters) {
        if (this.status.includes(item)) { res[item] = this.filters[item]; }
      } console.log(res);
      this.$router.replace({ path: this.$route.path, query: res });
    },

    toggleModal() {
      this.modal = !this.modal;
    },
    fillStatus() {
      console.log(this.$route.query, this.status);
      this.filters = this.$route.query;
      this.status = Object.keys(this.$route.query);
    },
    clearQuery() {
      this.modal = false;
      this.filters = {};
      this.$router.replace({ query: {} });
    },
  },
});
</script>

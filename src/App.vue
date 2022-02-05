<template>
  <div
    dir="rtl"
    class="bg-[#F5F5F5] h-[2000px]"
  >
    <TopBar
      :terminals="terminals"
      @showNotifs="displayNotifications"
    />
    <div class="flex">
      <NavigationBar
        :toggle="false"
        :terminals="terminals"
        :above-links="alinks"
        :below-links="blinks"
        :active-terminal="{
          domain: 'sa1601.ir',
          id: '10',
          name: '1601',
        }"
      />
      <div class="w-full">
        <div
          v-for="i in 900"
          :key="i"
        >
          .
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import TopBar from '@/components/TopBar/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    NavigationBar,
  },
  data() {
    return {
      terminals: [
        {
          id: '283934', domain: 'afra.com', name: 'افرامارکت', status: 'ACTIVE',
        },
        {
          id: '56882', domain: 'azadmn.com', name: 'حذف لوگو', status: 'REJECT',
        },
        { id: '55077', domain: 'zarinp.al/azadehmn', name: 'سیده آزاده میرنظامی' },
        { id: '52054', domain: 'testfirefox.ir', name: 'تست اصلی' },
        { id: '52052', domain: 'testf.ir', name: 'تست اصلی مرورگر' },
        { id: '52049', domain: 'ptestzarin.com', name: 'تست مرورگر' },
        { id: '52040', domain: 'pzarinpal.com', name: 'ایحاد درکاه' },
        { id: '49385', domain: 'irna.ir', name: 'خبرگزاری جمهوری اسلامی' },
        { id: '49384', domain: 'itna.ir', name: 'ايتنا - سایت خبری تحلیلی فناوری اطلاعات و ارتباطات' },
        { id: '49383', domain: 'azad.com', name: 'تست طولانی بودن کاراکتر درگاه پرداخت در پنل کاربری زرین پال' },
        { id: '16424', domain: 'testblacljulist.com', name: 'azadehmirnezami' },
        { id: '16423', domain: 'azada.com', name: 'aZcom' },
        { id: '10808', domain: 'azad.com', name: 'تست نهایی اپلود' },
        { id: '10800', domain: 'azaz.com', name: 'تست عکس' },
        { id: '10564', domain: 'azad.com', name: 'منتذالربیقبالتات' },
        { id: '10558', domain: 'azad.com', name: 'نهتالبیالتانتمن' },
        { id: '10259', domain: 'azadehmnmn.ir', name: 'تست تست' },
        { id: '10062', domain: 'test.ir', name: 'تست شماره 5' },
        { id: '10', domain: 'sa1601.ir', name: 'اس ای 1601' }],
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
  methods: {
    displayNotifications() {
      console.log('a');
    },
  },
});
</script>

<template>
  <div
    dir="rtl"
    class="bg-[#F5F5F5]"
  >
    <TopBar
      :terminals="terminals"
      @showNotifs="displayNotifications"
      @toggleMenu="toggleMenu = !toggleMenu"
    />
    <div class="flex">
      <NavigationBar
        :toggle="toggleMenu"
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
        <PageHeading
          sticky
          title="عنوان"
          desc="توضیحات"
          :has-button="true"
        >
          <template v-slot:buttons>
            <Button
              text="تست"
            />
            <Button
              text="تست دو"
            />
          </template>
        </PageHeading>
        <div class="container">
          <div
            v-for="i in 900"
            :key="i"
          >
            .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import PageHeading from '@/components/PageHeading/index.vue';
import Button from '@/components/Button/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
    NavigationBar,
    PageHeading,
    Button,
  },
  data() {
    return {
      toggleMenu: false,
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
  methods: {
    displayNotifications() {
      console.log('a');
    },
  },
});
</script>

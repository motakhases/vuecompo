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

      <div class="p-3xl">
        <Button
          type="primary"
          size="medium"
          text="کلیک کن"
          @click.native="() => modal = !modal"
        />

        <Modal title="title" :is-open="modal" :toggle="() => modal = !modal">
          <div slot="body">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
            قرار گیرد.
          </div>
          <div slot="leftFooter">
            <Button
              type="primary"
              size="medium"
              text="ButtonText"
              class="float-left"
            />
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Components
 * --------------------------------
 */
import Button from '@/components/Button/index.vue';
import TopBar from '@/components/TopBar/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import NotificationCenter from '@/components/NotificationCenter/index.vue';
import Modal from '@/components/Modal/index.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TopBar,
    NavigationBar,
    NotificationCenter,
    Button,
    Modal,
  },

  data() {
    return {
      filters: {
        status: '',
      },
      activeAccordion: [],
      modal: false,
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

  methods: {

    /**
       * clear
       * ------------------------------------------
       */
    clearQuery() {
      // clear filter list and query and close the modal
      this.modal = false;
      this.filters = {
        status: '',
      };
      this.$router.replace({ query: {} });
    },
  },
});
</script>

<style>
body {
  @apply bg-background
}
</style>

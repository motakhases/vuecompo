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
          id: '297226',
          owner_id: null,
          mcc_id: '26',
          notify_set_reconcile: false,
          can_payout: false,
          permissions: ['SESSION', 'PRODUCT', 'PRODUCT_EDIT', 'RECONCILE', 'TERMINAL_EDIT', 'COUPON'],
          is_default: false,
          fee_type: 'MERCHANT',
          reconcile_priority: 'DAILY',
          preferred_bank_account_id: '219280',
          active_psp: [{ psp: 'WPep', system_status: 'ACTIVE' }],
          reconcile_status: { last_session_id: null, amount: null },
          domain: 'zarin.express\\/mrtestian',
          psp_priority: [],
          zarin_gate: [{
            psp: 'WPep', merchant_id: null, status: 'Active', terminal_id: null, error: null,
          }],
          today_session: { count: 0, amount: 0 },
          yesterday_session: { count: 0, amount: 0 },
          server_ip: null,
          support_phone: '09385586943',
          key: '1a931b83-bf32-440a-8b51-7655defc1dee',
          flag: 'NORMAL',
          name: '\u0645\u0633\u062a\u0631 \u062a\u0633\u062a\u06cc\u0627\u0646',
          description: null,
          status: 'ACTIVE',
          logo: 'https:\\/\\/logoland.zarinpal.com\\/ed1a2005266f4c34cc28c692c78eb994',
          created_at: '2021-12-10T18:08:30+03:30',
          updated_at: '2021-12-15T13:20:07+03:30',
          deleted_at: null,
        }, {
          id: '177111',
          owner_id: null,
          mcc_id: '42',
          notify_set_reconcile: false,
          can_payout: false,
          permissions: ['SESSION', 'PRODUCT', 'PRODUCT_EDIT', 'RECONCILE', 'TERMINAL_EDIT', 'COUPON'],
          is_default: false,
          fee_type: 'MERCHANT',
          reconcile_priority: 'DAILY',
          preferred_bank_account_id: null,
          active_psp: [{ psp: 'WPep', system_status: 'ACTIVE' }],
          reconcile_status: { last_session_id: null, amount: null },
          domain: 'zarinp.al\\/armanshojaei',
          psp_priority: [],
          zarin_gate: [{
            psp: 'WPep', merchant_id: null, status: 'Active', terminal_id: null, error: null,
          }, {
            psp: 'Pna', merchant_id: null, status: 'InProgressShaparakError', terminal_id: null, error: ['["MANDATORY_FIELD-TaxPayerCode-Shop"]'],
          }, {
            psp: 'Mca', merchant_id: null, status: 'InProgressShaparakError', terminal_id: null, error: ['["MANDATORY_FIELD-TaxPayerCode-Shop"]'],
          }, {
            psp: 'Pep', merchant_id: null, status: 'InProgressShaparakError', terminal_id: null, error: ['["MANDATORY_FIELD-TaxPayerCode-Shop"]'],
          }, {
            psp: 'Ikc', merchant_id: null, status: 'InProgressShaparakError', terminal_id: null, error: ['["MANDATORY_FIELD-TaxPayerCode-Shop"]'],
          }],
          today_session: { count: 0, amount: 0 },
          yesterday_session: { count: 0, amount: 0 },
          server_ip: null,
          support_phone: '09385586943',
          key: 'acb0ab40-6c30-47a6-a508-1014846cba73',
          flag: 'PERSONAL_LINK',
          name: '\u0622\u0631\u0645\u0627\u0646 \u0634\u062c\u0627\u0639\u06cc',
          description: '\u0644\u06cc\u0646\u06a9 \u0634\u062e\u0635\u06cc',
          status: 'ACTIVE',
          logo: 'https:\\/\\/logoland.zarinpal.com\\/eb0839c84a89dfed1b06a0a7d0cd744e',
          created_at: '2020-09-08T17:29:18+04:30',
          updated_at: '2021-12-02T21:15:12+03:30',
          deleted_at: null,
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

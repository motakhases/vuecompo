<template>
  <div>
    <Modal
      v-if="showModal"
      title="تست عنوان"
      @close="showModal = false"
    >
      <div slot="body">
        <p>salam</p>
        <p>salam</p>
        <p>salam</p>
        <p>salam</p>
      </div>
      <div slot="footer">
        <button> footer </button>
      </div>
    </Modal>
    <NotificationCenter
      v-if="true"
      :announcements="announcements"
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
    <Thumbnail icon="terminal" />
    <Button text="me" />
    <ButtonGroup>
      <Button text="me" />
      <Button
        text="me"
        type="tertiary"
      />
    </ButtonGroup>
    <Dropdown
      v-model="value"
      label="یک
      لیبل
      تستی"
      value=""
      helper-hint="یک
      توضیح
      کوتاه"
      success-hint="عملیات
      موفقیت
      آمیز
      بود"
      :options="options"
    />
    <Icon
      name="terminal"
      class="w-xl h-xl"
    />
    <Label
      text="لیبل"
      size="small"
      type="positive"
    />
    <Link
      href="href"
      text="صنعت چاپ"
    />
    <Logo
      name="zarinpal"
      type="logo"
    />
    <NavBadge text="text" />
    <NavigationBar>
      <SwitchTerminalPopover>
        <template v-slot:terminal>
          <SwitchTerminal
            title="عنوان درگاه"
            link="zarinp.al/getway"
            icon="terminal"
          />
        </template>
        <template v-slot:menu>
          <Overview
            link="overview"
            active
          >
            نمای کلی
          </Overview>
          <SwitchTerminalItem
            title="عنوان درگاه"
            link="zarinp.al/getway"
            icon="terminal"
            active
            state="active"
            state-text="وضعیت"
          />
          <SwitchTerminalItem
            title="عنوان درگاه"
            link="zarinp.al/getway"
            icon="terminal"
            state="inactive"
            state-text="وضعیت"
          />
          <Create link="/home">
            ایجاد درگاه جدید
          </Create>
        </template>
      </SwitchTerminalPopover>
      <template v-slot:logo>
        <Logo
          name="zarinpal"
          type="logo"
          language="fa"
          size="medium"
        />
      </template>
      <template v-slot:firstList>
        <NavItem
          active
          link="/"
          title="لیبل"
          icon="questionCircle"
          badge="12"
        />
        <NavItem
          link="/"
          title="لیبل"
          icon="questionCircle"
          badge="12"
        />
      </template>
      <template v-slot:secondList>
        <NavItem
          link="/"
          title="لیبل"
          icon="questionCircle"
        />
        <NavItem
          link="/"
          title="لیبل"
          icon="questionCircle"
        />
      </template>
    </NavigationBar>
    <NotificationBadge text="41" />
    <SegmentedButton :items="items" />
    <StoreStatus text="me" />
    <TextBox v-model="value" />
    <TextField
      :value="value"
      @value="value = $event"
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
import PageHeading from './components/PageHeading/index.vue';
import Pagination from './components/Pagination/index.vue';
import Modal from './components/Modal/index.vue';
import NotificationCenter from './components/NotificationCenter/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    PageHeading, Modal, NotificationCenter, Pagination,
  },
  data() {
    return {
      showModal: false,
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

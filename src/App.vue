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
import Vue from 'vue';
// import TopBar from '@/components/TopBar/index.vue';
import SegmentedButton from '@/components/SegmentedButton/index.vue';
import Logo from '@/components/Logo/index.vue';
import Icon from '@/components/Icon/index.vue';
// import UserProfile from '@/components/TopBar/UserProfile/index.vue';
// import Notification from '@/components/TopBar/Notification/index.vue';
import Avatar from '@/components/Avatar/index.vue';
import AvatarProgressBar from '@/components/AvatarProgressBar/index.vue';
import BankCards from '@/components/BankCards/index.vue';
import Button from '@/components/Button/index.vue';
import ButtonGroup from '@/components/ButtonGroup/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import Label from '@/components/Label/index.vue';
import Link from '@/components/Link/index.vue';
import NavBadge from '@/components/NavBadge/index.vue';
import StoreStatus from '@/components/StoreStatus/index.vue';
import NavigationBar from '@/components/NavigationBar/index.vue';
import NavItem from '@/components/NavigationBar/NavItem/index.vue';
import SwitchTerminalPopover from '@/components/NavigationBar/SwitchTerminalPopover/index.vue';
import SwitchTerminalItem from '@/components/NavigationBar/SwitchTerminalItem/index.vue';
import Overview from '@/components/NavigationBar/Overview/index.vue';
import Thumbnail from '@/components/Thumbnail/index.vue';
import Create from '@/components/NavigationBar/Create/index.vue';
import SwitchTerminal from '@/components/NavigationBar/SwitchTerminal/index.vue';
import NotificationBadge from '@/components/NotificationBadge/index.vue';
import TextBox from '@/components/TextBox/index.vue';
import TextField from '@/components/TextField/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    // TopBar, Logo, Icon, UserProfile, Notification,
    Avatar,
    AvatarProgressBar,
    BankCards,
    Button,
    ButtonGroup,
    Dropdown,
    Icon,
    Label,
    Link,
    Logo,
    NavBadge,
    NavigationBar,
    NavItem,
    SwitchTerminalPopover,
    Overview,
    SwitchTerminalItem,
    SwitchTerminal,
    Create,
    NotificationBadge,
    SegmentedButton,
    StoreStatus,
    TextBox,
    TextField,
    Thumbnail,
  },
  data() {
    return {
      options: [
        { id: 1, name: 'Barney' },
        { id: 2, name: 'Homer' },
        { id: 3, name: 'Apu' },
        { id: 4, name: 'Bart' },
        { id: 5, name: 'Flanders' },
      ],
      value: '',
      items: [
        {
          id: 1,
          text: 'دکمه 1',
          click: () => console.log('clicked'),
          active: true,
        },
        {
          id: 2,
          text: 'دکمه 2',
          click: () => console.log('clicked'),
          active: false,
        },
        {
          id: 3,
          text: 'دکمه 3',
          click: () => console.log('clicked'),
          active: false,
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

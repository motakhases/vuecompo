import TopBar from "./index.vue";
import Logo from "@/components/Logo/index.vue";
import Icon from "@/components/Icon/index.vue";
import Notification from "./Notification/index.vue";
import Button from "@/components/Button/index.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher/index.vue";
import { TitleTooltip } from '@/types';
const Template = (_, { argTypes }) => ({
  components: { TopBar, Logo, Icon, Notification, Button, ThemeSwitcher },
  props: Object.keys(argTypes),
  data() {
    return {
      titleTooltip : TitleTooltip = {
        ticket : 'عنوان تیکت',
        notification : 'عنوان نوتیف',
        userProfile : 'عنوان یوزر',
      },
      list: [
        {
          title: "حساب ‌کاربری",
          icon: "UserCircle",
          color: "",
          action: () => console.log("click"),
        },
        {
          title: "همکاری در فروش",
          icon: "AttachLink",
          color: "",
          action: () => console.log("click"),
        },
        {
          title: "ظاهر پنل کاربری",
          icon: "MoonStar",
          color: "",
          action: () => this.toggle(),
        },
        {
          title: "راهنما استفاده",
          icon: "QuestionCircle",
          color: "",
          action: () => console.log("click"),
        },
        {
          title: "خروج",
          icon: "ExitLogOut",
          color: "",
          action: () => console.log("click"),
        },
      ],
      modal: false,
    };
  },
  methods: {
    toggle() {
      this.modal = !this.modal;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl h-[630px]">
    <TopBar
      :terminals="terminals"
      :profileList="list"
      username="نام و نام‌خانوادگی"
      userPhone="09382372496"
      userPremium
      @showNotifs="()=>{}"
      ticketingBadge="5"
      notificationBadge="2"
      :titleTooltip="titleTooltip"
      hasMenu
    />
    <h1 class="mt-sm font-bold dark:text-surface"> تاپ بار با لوگو در وسط</h1>

    <TopBar centerLogo :titleTooltip="titleTooltip" />
    <ThemeSwitcher :open="modal" :toggleModal="toggle" />
  </div>
  `,
});

const topBar = Template.bind({});

topBar.args = {
  terminals: [
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
    },
    {
      domain: "zarinp.al/xandar",
      name: "زاندار",
      status: "deactive",
    },
  ],
};

export default topBar;

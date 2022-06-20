import NavigationBar from "./index.vue";
import TopBar from "../TopBar/index.vue";

const Template = (_, { argTypes }) => ({
  components: {
    NavigationBar,
    TopBar,
  },

  props: Object.keys(argTypes),

  data: () => ({
    activeTerminal: {},
    terminals: [
      {
        domain: "zarin.express/zardu",
        name: "زاردو",
        status: "ACTIVE",
        id: "1",
        logo: "...",
        link: "...",
        route: "...",
      },
      {
        domain: "zarin.express/zardu",
        name: "hgffghfh",
        status: "ACTIVE",
        id: "2",
        logo: "...",
        link: "...",
        route: "...",
      },
    ],
    sidebarLinks: [
      {
        title: "پیشخوان",
        link: "/",
        icon: "GridLayout",
        active: true,
        badge: "25",
      },
      {
        title: "تراکنش‌ها",
        link: "/",
        icon: "DrpItemCheck",
        badge:'2'
      },
      {
        title: "تسویه حساب",
        link: "/",
        icon: "CreditCheckout",
        subMenu: [
          {
            title: "پیشخوان",
            link: "/",
            active: true,
          },
          {
            title: "تراکنش‌ها",
            link: "/",
          },
        ],
      },
      {
        title: "محصولات",
        link: "/",
        icon: "Box",
        subMenu: [
          {
            title: "پیشخوان",
            link: "/",
            active: true,
            badge:'10'
          },
          {
            title: "تراکنش‌ها",
            link: "/",
          },
        ],
      },
      {
        divider:true
      },
      {
        title: "حساب‌های بانکی",
        link: "/",
        icon: "PaymentCard",
      },
      {
        title: "تیکت‌ها",
        link: "/",
        icon: "ChatMessage",
      },
    ],
  }),

  template: `
    <div dir="rtl">
      <div class="relative zpl-nav-bar-storybook bg-background dark:bg-background-dark border border-[#eee] h-[768px]" dir="rtl">
        <TopBar
          :terminals="terminals"
          @showNotifs="$refs.notificationCenter.toggle()"
          @toggleMenu="$refs.navigationBar.toggle()"
        />  
        <NavigationBar
          ref="navigationBar"
          :terminals="terminals"
          :nav-items="sidebarLinks"
          :active-terminal="activeTerminal"
        />
      </div>
    </div>
  `,
});

const navigationBar = Template.bind({});

export default navigationBar;

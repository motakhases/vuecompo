import NavigationBar from "./index.vue";
import TopBar from "../TopBar/index.vue";

const Template = (_, { argTypes }) => ({
  components: {
    NavigationBar,
    TopBar,
  },

  props: Object.keys(argTypes),

  data: () => ({
    activeTerminal: {
      domain: "zarin.express/zardu",
      name: "زاردو",
      status: "ACTIVE",
      id: "1",
      logo: "https://logoland.zarinpal.com/4fe2915301d8b2b79715a170588bcb37",
      link: "...",
      route: "...",
      active: true,
      pinned: true
    },
    terminals: [
      {
        domain: "zarin.express/zardu",
        name: "زاردو",
        status: "ACTIVE",
        id: "1",
        logo: "https://logoland.zarinpal.com/4fe2915301d8b2b79715a170588bcb37",
        link: "...",
        route: "...",
        active: true,
        pinned: true
      },
      {
        domain: "zarin.express/zardu",
        name: "hgffghfh",
        status: "ACTIVE",
        id: "2",
        logo: "https://logoland.zarinpal.com/4fe2915301d8b2b79715a170588bcb37",
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
        premiumBadge: true,
      },
      {
        title: "تراکنش‌ها",
        link: "/",
        icon: "DrpItemCheck",
        badge:'2'
      },
      {
        title: "تسویه حساب",
        icon: "CreditCheckout",
        subMenu: [
          {
            title: "پیشخوان",
            link: "/",
            active: true,
            premiumBadge:true
          },
          {
            title: "تراکنش‌ها",
            link: "/",
          },
        ],
      },
      {
        title: "محصولات",
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

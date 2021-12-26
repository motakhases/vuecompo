import NavigationBar from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/NavigationBar", module)
  .addDecorator(StoryRouter())
  .add("default", () => NavigationBar);

const Template = (_, { argTypes }) => ({
  components: {
    NavigationBar,
  },
  props: Object.keys(argTypes),
  data: () => ({
    terminals: [
      {
        domain: 'zarin.express/zardu',
        name: 'زاردو',
        status: 'ACTIVE',
      }, {
        domain: 'zarinp.al/xandar',
        name: 'زاندار',
        status: 'deactive',
      },
    ],
    alinks: [
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
  }),
  template: `
    <div class="grid grid-cols-3 gap-xl" dir="rtl">
      <div class="col-span-2">
        <h1 class="mb-md font-bold dark:text-surface"> حالت معمولی </h1>
        <div class="relative zpl-nav-bar-storybook bg-background dark:bg-background-dark border border-[#eee] h-[768px]" dir="rtl">
          <NavigationBar
            :terminals="terminals"
            :above-links="alinks"
            :below-links="blinks"
          />
        </div>
      </div>

      <div class="col-span-1">
        <h1 class="mb-md font-bold dark:text-surface"> حالت بسته </h1>
        <div class="relative zpl-nav-bar-storybook bg-background dark:bg-background-dark border border-[#eee] h-[768px]" dir="rtl">
          <NavigationBar
            toggle
            :terminals="terminals"
            :above-links="alinks"
            :below-links="blinks"
          />
        </div>
      </div>
    </div>
  `,
});

const navigationBar = Template.bind({});

export default navigationBar
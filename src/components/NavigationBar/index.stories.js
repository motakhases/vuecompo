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
  template: `
    <div class="relative zpl-nav-bar-storybook bg-background dark:bg-background-dark border border-[#eee] h-[768px]" dir="rtl">
      <NavigationBar
        :toggle="toggle"
        :terminals="terminals"
        :above-links="alinks"
        :below-links="blinks"
      />
    </div>
  `,
});

const navigationBar = Template.bind({});

navigationBar.argTypes = {};

navigationBar.args = {
  toggle: false,
  terminals: [
    {
      domain: 'zarin.express/mrtestian',
      name: '\u0645\u0633\u062a\u0631 \u062a\u0633\u062a\u06cc\u0627\u0646',
      status: 'ACTIVE',
    }, {
      domain: 'zarinp.al/armanshojaei',
      name: '\u0622\u0631\u0645\u0627\u0646 \u0634\u062c\u0627\u0639\u06cc',
      status: 'ACTIVE',
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

export default navigationBar
import Tabs from "./index.vue";
import Tab from "./Tab/index.vue";

export default {
  component: Tabs,
  title: "Components/Tabs",
};

const Template = (_, { argTypes }) => ({
  components: { Tabs, Tab },
  props: Object.keys(argTypes),
  data() {
    return {
      tabs: [
        {
          title: "حساب‌های بانکی",
          content: "تب اول",
          warn: true,
        },
        {
          title: "درگاه‌های فعال",
          content: "تب دوم",
          warn: true
        },
        {
          title: "نشست‌های اخیر",
          content: "تب سوم",
          warn: true
        },
      ],
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> تب </h1>
    <Tabs>
      <tab
        v-for="(tab, index) in tabs"
        :key="index"
        :title="tab.title"
        :warn="tab.warn"
      >
        {{ tab.content }}
      </tab>
    </Tabs>

  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {
// };

// Default.args = {
//   fillContainer:false,
//   tabs: [
//     {
//       title: 'حساب‌های بانکی',
//       content: 'تب اول'
//     },
//     {
//       title: 'درگاه‌های فعال',
//       content: 'تب دوم'
//     },
//     {
//       title: 'نشست‌های اخیر',
//       content: 'تب سوم'
//     },
//   ]
// };

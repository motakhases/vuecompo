import Tabs from './index.vue';
import Tab from './Tab/index.vue';

export default {
  component: Tabs,
  title: 'Components/Tabs',
};

const Template = (_, { argTypes }) => ({
  components: { Tabs, Tab },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-background-dark p-sm rounded-md">
    <Tabs dir="rtl" :fill-container="fillContainer">
      <tab
        v-for="(tab, index) in tabs"
        :key="index"
        :title="tab.title"
      >
        {{ tab.content }}
      </tab>
    </Tabs>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  fillContainer:false,
  tabs: [
    {
      title: 'حساب‌های بانکی',
      content: 'تب اول'
    },
    {
      title: 'درگاه‌های فعال',
      content: 'تب دوم'
    },
    {
      title: 'نشست‌های اخیر',
      content: 'تب سوم'
    },
  ]
};

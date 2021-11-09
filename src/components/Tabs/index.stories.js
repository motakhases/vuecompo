import Component from './index.vue';
import Tab from './Tab/index.vue';

export default {
  component: Component,
  title: 'Components/Tabs',
};

const Template = (_, { argTypes }) => ({
  components: { Component, Tab },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
    <Component dir="rtl" :fill-container="fillContainer">
      <tab
        v-for="(tab, index) in tabs"
        :key="index"
        :title="tab.title"
      >
        {{ tab.content }}
      </tab>
    </Component>
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

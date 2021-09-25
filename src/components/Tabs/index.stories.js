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
    <Tabs dir="rtl" :fill-container="fillContainer">
      <tab :title="label">Hello From Tab 1</tab>
      <tab :title="secondLabel">Hello From Tab 2</tab>
      <tab :title="thirdLabel" :warn="true">Hello From Tab 3</tab>
    </Tabs>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  fillContainer:false,
  label:'۱لیبل تب',
  secondLabel:'۲لیبل تب',
  thirdLabel:'۳لیبل تب',
};

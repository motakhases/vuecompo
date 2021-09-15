import Component from './index.vue';

export default {
  component: Component,
  title: 'Components/SegmentedButton',
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
  },
  props: Object.keys(argTypes),
  template: `
    <Component :segments="segments" :fill="fill"></Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  segments: [
    {
      title: 'btn1',
      id: '0',
    },
    {
      title: 'btn2',
      id: '1',
    },
    {
      title: 'btn3',
      id: '2',
    },
  ],
  fill: false,
};

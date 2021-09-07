import Component from './index.vue';
import Button from '../Button/index.vue';

export default {
  component: Component,
  title: 'Components/ButtonGroup',
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <Component>
      <Button type="primary">
        Primary
      </Button>
      <Button type="secondary">
        Secondary
      </Button>
    </Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  segmented: false,
};

import Icon from './index.vue';

export default {
  component: Icon,
  title: 'Components/Icon',
};

const Template = (_, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  template: `
    <Icon :name="name" :class="classes" />
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  name: {
    options: [
      "chevronUp",
      "angleDown",
      "checkmarkCircle",
      "filledArrowDown",
      "filledArrowUp",
      "tickLarge",
      "warning",
      "menuBurger",
      "profile",
      "questionCircle",
      "notification",
      "angleLeft",
      "chartSquare",
      "plus",
      "terminal"
    ],
    control: { type: "select" },
  },
};

Default.args = {
  name: 'menuBurger',
  classes: 'w-[24px] h-[24px]'
};

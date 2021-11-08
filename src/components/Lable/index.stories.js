import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Lable",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :type="type" :size="size">
      {{ text }}
    </Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium"],
    control: { type: "radio" },
  },
  type: {
    options: ["positive", "negative", "neutral", "outlined"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "لیبل",
  size: "small",
  type: "positive",
};

import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Thumbnail",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :icon="icon" :img="img" alt="alt" />
  `,
});

export const Default = Template.bind({});


Default.args = {
  icon: "terminal",
  alt: "",
  img: "",
};

import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Avatar",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Component :size="size" :img="img" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
};

Default.args = {
  img: "https://www.digikala.com/static/files/fd4840b2.svg",
  size: "large",
};

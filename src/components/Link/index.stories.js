import Component from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/Link", module)
  .addDecorator(StoryRouter())
  .add("default", () => Component);

export default {
  component: Component,
  title: "Components/Link",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
		<Component :to="to" :href="href">
      {{ text }}
    </Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "لینک",
  to: "",
  href: "/href",
  rel: "",
  replace: false,
  exact: false,
  append: false,
};

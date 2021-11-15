import Link from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/Link", module)
  .addDecorator(StoryRouter())
  .add("default", () => Link);

export default {
  component: Link,
  title: "Components/Link",
};

const Template = (_, { argTypes }) => ({
  components: { Link },
  props: Object.keys(argTypes),
  template: `
		<Link
      :to="to"
      :href="href"
      :exact="exact"
    >
      {{ text }}
    </Link>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "لینک",
  to: "",
  href: "#",
  exact: false,
};

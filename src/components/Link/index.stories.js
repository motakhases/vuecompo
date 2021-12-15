import Link from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/Link", module)
  .addDecorator(StoryRouter())
  .add("default", () => Link);

const Template = (_, { argTypes }) => ({
  components: { Link },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark dark:text-text-dark p-sm rounded-md" dir="rtl">
    <Link
      :to="to"
      :href="href"
      :exact="exact"
      :target="target"
			:text="text"
    />
  </div>
  `,
});

const link = Template.bind({});

link.argTypes = {
	target: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: "select" },
  }
};

link.args = {
  text: "صنعت چاپ",
  to: "/home",
  target: "_blank",
  href: "",
  exact: false,
};

export default link

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
  <div class="dark:bg-surface-dark dark:text-text-dark p-sm rounded-md" dir="rtl">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از 
    <Link
      :to="to"
      :href="href"
      :exact="exact"
    >
      {{ text }}
    </Link>
    و با استفاده از طراحان گرافیک است.
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "صنعت چاپ",
  to: "",
  href: "https://fa.wikipedia.org/wiki/%DA%86%D8%A7%D9%BE",
  exact: false,
};

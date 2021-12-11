import TaskItem from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/UserProfileCard/TaskItem", module)
  .addDecorator(StoryRouter())
  .add("default", () => TaskItem);
export default {
  component: TaskItem,
  title: "Components/UserProfileCard/TaskItem",
};

const Template = (_, { argTypes }) => ({
  components: {
    TaskItem,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl w-full">
		<TaskItem v-bind="$props" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  complete: true,
  before: true,
  disabled: false,
  link: "#link",
  text: "عنوان تسک",
};

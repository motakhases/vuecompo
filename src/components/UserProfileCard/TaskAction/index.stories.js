import TaskAction from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/UserProfileCard/TaskAction", module)
  .addDecorator(StoryRouter())
  .add("default", () => TaskAction);

export default {
  component: TaskAction,
  title: "Components/UserProfileCard/TaskAction",
};

const Template = (_, { argTypes }) => ({
  components: {
    TaskAction,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<TaskAction :disabled="disabled" :link="link">
task
		</TaskAction>


  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  disabled: true,
  link: "#link",
};

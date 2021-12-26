import TasksStack from "./index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

// storiesOf("Components/UserProfileCard/TasksStack", module)
//   .addDecorator(StoryRouter())
//   .add("default", () => TasksStack);
// export default {
//   component: TasksStack,
//   title: "Components/UserProfileCard/TasksStack",
// };

const Template = (_, { argTypes }) => ({
  components: {
    TasksStack,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl w-full">
		<TasksStack v-bind="$props" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      id: 1,
      complete: true,
      before: true,
      disabled: false,
      link: "#link",
      text: "عنوان تسک",
    },
    {
      id: 2,
      complete: true,
      before: true,
      disabled: false,
      link: "#link",
      text: "عنوان تسک",
    },
    {
      id: 3,
      complete: false,
      before: true,
      disabled: false,
      link: "#link",
      text: "عنوان تسک",
    },
  ],
};

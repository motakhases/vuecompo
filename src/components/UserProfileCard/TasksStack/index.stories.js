import TasksStack from "./index.vue";
import TaskItem from "../TaskItem/index.vue";
import CheckMark from "../CheckMark/index.vue";
import TaskAction from "../TaskAction/index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/UserProfileCard/TasksStack", module)
  .addDecorator(StoryRouter())
  .add("default", () => TasksStack);
export default {
  component: TasksStack,
  title: "Components/UserProfileCard/TasksStack",
};

const Template = (_, { argTypes }) => ({
  components: {
    TasksStack,
    TaskItem,
    CheckMark,
    TaskAction,
  },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl w-full">
		<TasksStack>
			<TaskItem>
				<CheckMark :complete="complete" :before="before" />
				<TaskAction :disabled="disabled" :link="link">
					{{text}}
				</TaskAction>
			</TaskItem>
			<TaskItem>
				<CheckMark :before="before" />
				<TaskAction :link="link">
					{{text}}
				</TaskAction>
			</TaskItem>
		</TasksStack>
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

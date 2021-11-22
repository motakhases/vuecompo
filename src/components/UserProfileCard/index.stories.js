import UserProfileCard from "./index.vue";
import CheckMark from "./CheckMark/index.vue";
import TaskAction from "./TaskAction/index.vue";
import ZarinID from "./ZarinID/index.vue";
import UserLevel from "./UserLevel/index.vue";
import TasksStack from "./TasksStack/index.vue";
import TaskItem from "./TaskItem/index.vue";
import Label from "@/components/Label/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import AvatarProgressBar from "@/components/AvatarProgressBar/index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/UserProfileCard", module)
  .addDecorator(StoryRouter())
  .add("default", () => UserProfileCard);

export default {
  component: UserProfileCard,
  title: "Components/UserProfileCard",
};

const Template = (_, { argTypes }) => ({
  components: {
    UserProfileCard,
    CheckMark,
    TaskAction,
    TasksStack,
    TaskItem,
    ZarinID,
    UserLevel,
    Label,
    Avatar,
    AvatarProgressBar,
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark-soft p-sm rounded-md">
		<UserProfileCard>
			<template v-slot:header>
				<AvatarProgressBar type="gold" percent=25>
					<Avatar />
				</AvatarProgressBar>
				<ZarinID level="gold"> ZP.123456 </ZarinID>
			</template>
			<template v-slot:fullname> نام و نام خانوادگی </template>
			<template v-slot:userLevel>
				<UserLevel title="عنوان سطح عضویت">
					<Label type="outlined" size="medium"> حقوقی </Label>
					<Label type="positive" size="medium"> VIP </Label>
					<Label type="negative" size="medium"> توقیف شده </Label>
				</UserLevel>
			</template>
			<TasksStack>
				<TaskItem>
					<CheckMark complete />
					<TaskAction link="#link"> عنوان تسک </TaskAction>
				</TaskItem>
				<TaskItem>
					<CheckMark complete before />
					<TaskAction link="#link"> عنوان تسک </TaskAction>
				</TaskItem>
				<TaskItem>
					<CheckMark before />
					<TaskAction link="#link"> عنوان تسک </TaskAction>
				</TaskItem>
			</TasksStack>
		</UserProfileCard>
	</div>
  `,
});

export const Default = Template.bind({});

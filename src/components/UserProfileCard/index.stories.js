import UserProfileCard from "./index.vue";
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
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark-soft p-sm rounded-md rtl">
		<UserProfileCard  v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  avatarSize: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  avatarType: {
    options: ["beginner", "silver", "gold"],
    control: { type: "radio" },
  },
  zarinIdType: {
    options: ["blue", "silver", "gold"],
    control: { type: "radio" },
  },
};

Default.args = {
  avatarType: "beginner",
  avatarSize: "medium",
  avatarPercent: 10,
  avatarImg: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160",
  zarinId: "ZP.123456",
  zarinIdType: "blue",
  fullname: "نام و نام خانوادگی",
  levelText: "عنوان سطح عضویت",
  labelList: [
    { id: 1, size: "small", type: "positive", text: "VIP" },
    { id: 2, size: "small", type: "negative", text: "توقیف شده" },
  ],
  taskItems: [
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

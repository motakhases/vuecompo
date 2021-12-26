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
  data() {
    return {
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160",
      tasks: [
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
      labels: [
        { id: 1, size: "medium", type: "outlined", text: "حقوقی" },
        { id: 2, size: "medium", type: "positive", text: "VIP" },
        { id: 3, size: "medium", type: "negative", text: "توقیف شده" },
      ],
    };
  },
  template: `
	<div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-col gap-lg rtl">
    <h1 class="font-bold dark:text-surface"> کارت پروفایل </h1>
		<UserProfileCard level="beginner" avatarPercent="10" fullname="شایسته ملک پور" zarinId="ZP.123456" levelText="سطح عضویت آبی" />
    <h1 class="mt-sm font-bold dark:text-surface"> انواع کارت پروفایل </h1>
    <div class="flex items-center gap-md">
      <UserProfileCard level="beginner" avatarPercent="10" fullname="شایسته ملک پور" zarinId="ZP.123456" levelText="سطح عضویت آبی" />
		  <UserProfileCard level="silver" avatarPercent="20" fullname="شایسته ملک پور" zarinId="ZP.123456" levelText="سطح عضویت نقره ای" />
		  <UserProfileCard level="gold" avatarPercent="50" fullname="شایسته ملک پور" zarinId="ZP.123456" levelText="سطح عضویت طلایی" />
    </div>
    <h1 class="mt-sm font-bold dark:text-surface"> کارت پروفایل با تسک </h1>
		<UserProfileCard level="beginner" avatarPercent="10" fullname="علی محمدی" zarinId="ZP.123456" levelText="سطح عضویت آبی" :avatarImg="img" :taskItems="tasks" />
    
    <h1 class="mt-sm font-bold dark:text-surface"> کارت پروفایل با لیبل های مختلف </h1>
		<UserProfileCard level="beginner" avatarPercent="10" fullname="علی محمدی" zarinId="ZP.123456" :avatarImg="img" :labelList="labels" levelText="سطح عضویت آبی" />
    
	</div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {
//   level: {
//     options: ["beginner", "silver", "gold"],
//     control: { type: "radio" },
//   },
// };

// Default.args = {
//   level: "beginner",
//   avatarPercent: 10,
//   avatarImg:
//     "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=160",
//   zarinId: "ZP.123456",
//   fullname: "نام و نام خانوادگی",
//   levelText: "عنوان سطح عضویت",
//   labelList: [
//     { id: 1, size: "small", type: "positive", text: "VIP" },
//     { id: 2, size: "small", type: "negative", text: "توقیف شده" },
//   ],
//   taskItems: [
//     {
//       id: 1,
//       complete: true,
//       before: true,
//       disabled: false,
//       link: "#link",
//       text: "عنوان تسک",
//     },
//     {
//       id: 2,
//       complete: true,
//       before: true,
//       disabled: false,
//       link: "#link",
//       text: "عنوان تسک",
//     },
//     {
//       id: 3,
//       complete: false,
//       before: true,
//       disabled: false,
//       link: "#link",
//       text: "عنوان تسک",
//     },
//   ],
// };

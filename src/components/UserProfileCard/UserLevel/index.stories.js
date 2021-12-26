import UserLevel from "./index.vue";
// export default {
//   component: UserLevel,
//   title: "Components/UserProfileCard/UserLevel",
// };

const Template = (_, { argTypes }) => ({
  components: { UserLevel },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<UserLevel v-bind="$props" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: "عنوان سطح عضویت",
  list: [
    { id: 1, size: "medium", type: "outlined", text: "حقوقی" },
    { id: 2, size: "medium", type: "positive", text: "VIP" },
    { id: 3, size: "medium", type: "negative", text: "توقیف شده" },
  ],
};

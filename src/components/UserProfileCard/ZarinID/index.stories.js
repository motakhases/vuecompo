import ZarinId from "./index.vue";
// export default {
//   component: ZarinId,
//   title: "Components/UserProfileCard/ZarinId",
// };

const Template = (_, { argTypes }) => ({
  components: { ZarinId },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<ZarinId v-bind="$props" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  type: {
    options: ["blue", "silver", "gold"],
    control: { type: "radio" },
  },
};

Default.args = {
  id: "ZP.12652",
  type: "gold",
};

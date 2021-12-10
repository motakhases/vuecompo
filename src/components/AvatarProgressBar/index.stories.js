import AvatarProgressBar from "./index.vue";

export default {
  component: AvatarProgressBar,
  title: "Components/AvatarProgressBar",
};

const Template = (_, { argTypes }) => ({
  components: { AvatarProgressBar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<AvatarProgressBar v-bind="$props" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["beginner", "silver", "gold"],
    control: { type: "radio" },
  },
};

Default.args = {
  type: "beginner",
  size: "large",
  percent: 10,
	img: "https://www.digikala.com/static/files/fd4840b2.svg",
};

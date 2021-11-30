import Component from "./index.vue";
import Avatar from "@/components/Avatar/index.vue";
export default {
  component: Component,
  title: "Components/AvatarProgressBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Avatar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Component
      :type="type"
      :size="size"
      :disabled="disabled"
      :percent="percent"

    >
		<Avatar :size="size"/>
    </Component>
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
};

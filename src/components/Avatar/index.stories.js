import Avatar from "./index.vue";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

const Template = (_, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Avatar :size="size" :img="img" />
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
};

Default.args = {
  img: "https://www.digikala.com/static/files/fd4840b2.svg",
  size: "large",
};

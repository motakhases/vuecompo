import Avatar from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Avatar v-bind="$props" />
  </div>
  `,
});

const avatar = Template.bind({});

avatar.argTypes = {
  img: {
    description: 'Image URL',
    table: {
      defaultValue: {
        summary: 'null'
      }
    }
  },
  size: {
    options: ["small", "medium", "large"],
    control: { type: "select" },
    description: 'Size of the avatar',
    table: {
      defaultValue: {
        summary: 'medium'
      }
    }
  },
};

avatar.args = {
  img: "",
  size: 'medium'
};

export default avatar
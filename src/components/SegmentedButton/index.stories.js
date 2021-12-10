import SegmentedButton from "./index.vue";

export default {
  component: SegmentedButton,
  title: "Components/SegmentedButton",
};

const Template = (_, { argTypes }) => ({
  components: {
    SegmentedButton,
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<SegmentedButton v-bind="$props" />
	</div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  fill: false,
  items: [
    {
      id: 1,
      text: "دکمه 1",
      click: () => console.log("clicked"),
      active: true,
    },
    {
      id: 2,
      text: "دکمه 2",
      click: () => console.log("clicked"),
      active: false,
    },
    {
      id: 3,
      text: "دکمه 3",
      click: () => console.log("clicked"),
      active: false,
    },
  ],
};

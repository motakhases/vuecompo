import SegmentedButton from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: {
    SegmentedButton,
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
		<SegmentedButton v-bind="$props" />
	</div>
  `,
});

const segmentedButton = Template.bind({});

segmentedButton.args = {
  fill: false,
  items: [
    {
      id: 1,
      text: "بانک ملی",
      click: () => console.log("clicked"),
      active: true,
    },
    {
      id: 2,
      text: "بانک سامان",
      click: () => console.log("clicked"),
      active: false,
    },
    {
      id: 3,
      text: "بانک پاسارگاد",
      click: () => console.log("clicked"),
      active: false,
    },
  ],
};

export default segmentedButton

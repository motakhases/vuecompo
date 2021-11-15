import SegmentedButton from "./index.vue";
import Button from "./Button/index.vue";

export default {
  component: SegmentedButton,
  title: "Components/SegmentedButton",
};

const Template = (_, { argTypes }) => ({
  components: {
    SegmentedButton,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <SegmentedButton :fill="fill">
			<Button :onClick='onClick' > bnt1 </Button>
			<Button :onClick='onClick'  active="true" > btn2 </Button>
			<Button :onClick='onClick' > bnt3 </Button>
		</SegmentedButton>
  `,
});

export const Default = Template.bind({});

Default.args = {
  fill: false,
  onClick: () => alert("clicked"),
};

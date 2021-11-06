import Component from "./index.vue";
import Button from "./Button/index.vue";

export default {
  component: Component,
  title: "Components/SegmentedButton",
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
    Button,
  },
  props: Object.keys(argTypes),
  template: `
    <Component :fill="fill">
			<Button :onClick='onClick' > bnt1 </Button>
			<Button :onClick='onClick'  active="true" > btn2 </Button>
			<Button :onClick='onClick' > bnt3 </Button>
		</Component>
  `,
});

export const Default = Template.bind({});

Default.args = {
  fill: false,
  onClick: () => alert("clicked"),
};

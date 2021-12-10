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
			<Button @click.native="onClick" text="دکمه" />
			<Button @click.native="onClick" text="دکمه"  active />
			<Button @click.native="onClick" text="دکمه" />
		</SegmentedButton>
  `,
});

export const Default = Template.bind({});

Default.args = {
  fill: false,
  onClick: () => console.log("clicked"),
};

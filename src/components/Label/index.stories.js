import Label from "./index.vue";

export default {
  component: Label,
  title: "Components/Label",
};

const Template = (_, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: `
		<Label :type="type" :size="size">
      {{ text }}
    </Label>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium"],
    control: { type: "radio" },
  },
  type: {
    options: ["positive", "negative", "neutral", "outlined"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "لیبل",
  size: "small",
  type: "positive",
};

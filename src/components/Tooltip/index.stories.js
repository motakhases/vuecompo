import Component from "./index.vue";

export default {
  component: Component,
  title: "Components/Tooltip",
};

const Template = (_, { argTypes }) => ({
  components: { Component },
  props: Object.keys(argTypes),
  template: `
			<Component
			:text="text"
			:position="position"
			:space="space"
			:indicator="indicator"
			:size="size"
		>
			<button>Hover Me</button>
		</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  position: {
    options: [
      "bottomLeft",
      "bottomCenter",
      "bottomRight",
      "topLeft",
      "topCenter",
      "topRight",
      "left",
      "right",
    ],
    control: { type: "radio" },
  },
  space: {
    options: ["smallSpace", "largeSpace"],
    control: { type: "radio" },
  },
  size: {
    options: ["small", "large"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "راهنمای ابزار",
  position: "bottomLeft",
  space: "smallSpace",
  indicator: true,
  size: "small",
};

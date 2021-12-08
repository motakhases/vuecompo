import Tooltip from "./index.vue";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
};

const Template = (_, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark rounded-md m-2xl dark:text-text-dark">
    <Tooltip
			:text="text"
			:position="position"
			:space="space"
			:indicator="indicator"
			:size="size"
		>
			<button>Hover Me</button>
		</Tooltip>
	</div>
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

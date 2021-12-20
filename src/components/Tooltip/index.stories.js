import Tooltip from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
};

const Template = (_, { argTypes }) => ({
  components: { Tooltip, Button },
  props: Object.keys(argTypes),
  template: `
	<div dir="rtl" class="dark:bg-surface-dark rounded-md m-2xl dark:text-text-dark">
    <Tooltip v-bind="$props">
			<Button text="یک دکمه تولتیپ دار" size="small" type="secondary">
		</Tooltip>

    <div class="mt-xl">
      <h1 class="mt-md font-bold"> انواع وضعیت </h1>
      <div class="flex gap-sm mt-lg">
        <Tooltip v-bind="$props" position="bottomLeft">
          <Button text="پایین چپ" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="bottomCenter">
          <Button text="پایین وسط" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="bottomRight">
          <Button text="پایین راست" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="topLeft">
          <Button text="بالا چپ" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="topCenter">
          <Button text="بالا وسط" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="topRight">
          <Button text="بالا راست" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="left">
          <Button text="چپ" size="small" type="secondary">
        </Tooltip>
        <Tooltip v-bind="$props" position="right">
          <Button text="راست" size="small" type="secondary">
        </Tooltip>
      </div>
    </div>
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

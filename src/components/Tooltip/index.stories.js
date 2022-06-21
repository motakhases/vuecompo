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
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <Tooltip space="smallSpace" text="راهنمای ابزار"  position="left">
			<Button text="یک دکمه تولتیپ دار" size="small" type="secondary" />
		</Tooltip>

    <h1 class="mt-sm font-bold dark:text-surface"> انواع وضعیت </h1>
    <div class="flex gap-sm mt-lg">
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="topLeft">
        <Button text="بالا چپ" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="topCenter">
        <Button text="بالا وسط" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="topRight">
        <Button text="بالا راست" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="bottomLeft">
        <Button text="پایین چپ" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="bottomCenter">
        <Button text="پایین وسط" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="bottomRight">
        <Button text="پایین راست" size="small" type="secondary" />
      </Tooltip>
      <Tooltip  space="smallSpace" text="راهنمای ابزار" indicator position="right">
        <Button text="راست" size="small" type="secondary" />
      </Tooltip>
      <Tooltip space="smallSpace" text="راهنمای ابزار" indicator position="left">
        <Button text="چپ" size="small" type="secondary" />
      </Tooltip>
      <Tooltip space="largeSpace" text="راهنمای ابزار" indicator position="left">
        <Button text="چپ" size="small" type="secondary" />
      </Tooltip>
    </div>   
    <h1 class="mt-sm mb-lg font-bold dark:text-surface"> تولتیپ بدون فلش </h1>
    <Tooltip space="smallSpace" text="راهنمای ابزار" position="left" :indicator="false">
      <Button text="دکمه" size="small" type="secondary" />
    </Tooltip>

    <h1 class="mt-sm mb-lg font-bold dark:text-surface"> سایزهای مختلف تولتیپ </h1>
    <div class="flex items-center gap-sm mt-lg">
      <Tooltip space="smallSpace" text="راهنمای ابزار" position="topCenter" size="small">
        <Button text="تولتیپ کوچک" size="small" type="secondary" />
      </Tooltip>
      <Tooltip space="smallSpace" text="راهنمای ابزار" position="topCenter" size="large">
        <Button text="تولتیپ بزرگ" size="small" type="secondary" />
      </Tooltip>
    </div>   

    <h1 class="mt-sm mb-lg font-bold dark:text-surface"> فاصله های مختلف تولتیپ </h1>
    <div class="flex items-center gap-sm mt-lg">
      <Tooltip space="smallSpace" text="راهنمای ابزار" position="left" size="large" indicator>
        <Button text="تولتیپ کوچک" size="small" type="secondary" />
      </Tooltip>
      <Tooltip space="largeSpace" text="راهنمای ابزار" position="left" size="large" indicator>
        <Button text="تولتیپ بزرگ" size="small" type="secondary" />
      </Tooltip>
    </div>   
	</div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {
//   position: {
//     options: [
//       "topLeft",
//       "topCenter",
//       "topRight",
//       "bottomLeft",
//       "bottomCenter",
//       "bottomRight",
//       "right",
//       "left",
//     ],
//     control: { type: "radio" },
//   },
//   space: {
//     options: ["smallSpace", "largeSpace"],
//     control: { type: "radio" },
//   },
//   size: {
//     options: ["small", "large"],
//     control: { type: "radio" },
//   },
// };

// Default.args = {
//   text: "راهنمای ابزار",
//   position: "topLeft",
//   space: "smallSpace",
//   indicator: true,
//   size: "small",
// };

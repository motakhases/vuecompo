import Label from "./index.vue";

export default {
  component: Label,
  title: "Components/Label",
};

const Template = (_, { argTypes }) => ({
  components: { Label },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
		<Label size="medium" type="neutral" text="لیبل" />
		<h1 class="font-bold dark:text-surface"> سایزهای مختلف </h1>
		<div>
			<Label class="ml-sm" size="small" type="positive" text="لیبل سایز کوچک" />
			<Label size="medium" type="positive" text="لیبل سایز بزرگ" />
		</div>
		<h1 class="font-bold dark:text-surface"> انواع مختلف </h1>
		<div class="flex gap-sm">
			<Label size="medium" type="positive" :text="11" />
			<Label size="medium" type="negative" text="negative" />
			<Label size="medium" type="neutral" text="neutral" />
			<Label size="medium" type="outlined" text="outlined" />
		</div>
	</div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {
//   size: {
//     options: ["small", "medium"],
//     control: { type: "radio" },
//   },
//   type: {
//     options: ["positive", "negative", "neutral", "outlined"],
//     control: { type: "radio" },
//   },
// };

// Default.args = {
//   text: "لیبل",
//   size: "small",
//   type: "positive",
// };

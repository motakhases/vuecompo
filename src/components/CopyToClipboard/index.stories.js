import CopyToClipboard from "./index.vue";

export default {
  component: CopyToClipboard,
  title: "Components/CopyToClipboard",
};

const Template = (_, { argTypes }) => ({
  components: { CopyToClipboard },
  props: Object.keys(argTypes),
  template: `
  <div class="bg-surface dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md w-[256px]" dir="rtl">
	  <CopyToClipboard title="عنوان" text="text to be copied" />
    <CopyToClipboard loading text="" />

  </div>
  `,
});

export const Default = Template.bind({});

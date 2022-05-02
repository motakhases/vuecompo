import Upload from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Upload,
  title: "Components/Upload",
};

const Template = (_, { argTypes }) => ({
  components: { Upload, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      list: ["فرمت‌های مجاز: png و jpg", "حداکثر سایز فایل: ۵۰۰ کیلوبایت"],
    };
  },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl w-[360px]">
   <Upload title="آپلود فایل" :restrictionList="list" />

  
	</div>
  `,
});

export const Default = Template.bind({});

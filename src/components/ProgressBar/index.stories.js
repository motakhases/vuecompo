import ProgressBar from "./index.vue";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
};

const Template = (_, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  template: `
  <div class="p-sm relative rounded-md rtl h-[300px]">
    <div class="w-[250px] absolute rtl flex flex-col gap-md">
      <ProgressBar
        :items="data"
        title="در حال آپلود Filename.png"
        percent="25"
        type="indeterminate"
      />
      <ProgressBar
      percentText
      title="در حال آپلود Filename.png"
      percent="25"
      type="determinate"
      size="thick"
    />
    </div>  
  </div>  
  `,
});

export const Default = Template.bind({});

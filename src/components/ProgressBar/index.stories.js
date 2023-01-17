import ProgressBar from "./index.vue";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
};

const Template = (_, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  data() {
    return {
      pro: '0',
    };
  },
  methods: {
    increament() {
      console.log(this.pro);
      this.pro += 1;
    },
  },
  template: `
  <div class="p-sm relative rounded-md rtl h-[300px]">
    <div class="w-[250px] absolute rtl flex flex-col gap-md">
      <ProgressBar
        title="در حال آپلود Filename.png"
        percent="25"
        type="indeterminate"
      />
      <ProgressBar
      percentText
      title="در حال آپلود Filename.png"
      :percent="pro"
      type="determinate"
      size="thick"
    />
    <div @click="increament">increass</div>
    </div>  
  </div>  
  `,
});

export const Default = Template.bind({});

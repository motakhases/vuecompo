import PSPLogos from "./index.vue";

export default {
  component: PSPLogos,
  title: "Components/PSPLogos",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PSPLogos },
  data() {
    return {
      logos: [
        "Asan",
        "Bpm",
        "FanAVACart",
        "Ikc",
        "Pna",
        "Parsian",
        "Pep",
        "Sadad",
        "Mca",
      ],
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
    <div v-for="logo in logos" :key="logo" class="w-[18.6%]">
      <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
        <PSPLogos :logo="logo" class="mb-sm flex-1 w-[66px]" />
        <span> {{ logo }} </span>
      </div>	
    </div>
  </div>
	`,
});
export const Default = Template.bind({});

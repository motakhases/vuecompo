import Bg from "./index.vue";

export default {
  component: Bg,
  title: "Components/Bg",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Bg },
  data() {
    return {
      bgImages: [
        "Transactions",
        "ProductPaymentLink",
        "Coupons",
        "ProductPaymentLink",
        "Reconciliation",
        "NoResult",
        "Placeholder",
        "Appearance",
        "Tickets",
        "EmailDownload",
        "TimeRange",
      ,
      ],
    };
  },
  template: `
  <div class="bg-surface-focus dark:bg-surface-dark-focus p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
    <div v-for="bgImage in bgImages" :key="bgImage" class="w-[18.6%]">
      <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
        <Bg :bgImage="bgImage" class="mb-sm flex-1 w-[66px]" />
        <span> {{ bgImage }} </span>
      </div>	
    </div>
  </div>
	`,
});
export const Default = Template.bind({});

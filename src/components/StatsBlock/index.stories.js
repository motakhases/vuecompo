import StatsBlock from "./index.vue";
import StatsBlockRow from "./SBRow/index.vue";
import StatsBlockItem from "./SBItem/index.vue";

export default {
  component: StatsBlock,
  title: "Components/StatsBlock",
};

const Template = (_, { argTypes }) => ({
  components: { StatsBlock, StatsBlockRow, StatsBlockItem },
  props: Object.keys(argTypes),
  data: () => ({
    obj: {
      empty: "",
    },
  }),
  template: `
  <div class="dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
    <StatsBlock class="mb-xl">
      <StatsBlockRow>
        <StatsBlockItem title="تعداد تراکنش‌های موفق" leftAlign>
          ۱۲
        </StatsBlockItem>
      </StatsBlockRow>
    </StatsBlock>
  </div>
  `,
});

export const Default = Template.bind({});

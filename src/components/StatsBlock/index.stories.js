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
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="۵۴۲۰۰۰۰"
          caption="مجموع درآمد از ابتدا ۲۴٬۵۸۲٬۰۰۰ ریال"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="۰"
          caption="مجموع درآمد از ابتدا ۲۴٬۵۸۲٬۰۰۰ ریال"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="۵۴۲۰۰۰۰"
          caption="مجموع درآمد از ابتدا ۲۴٬۵۸۲٬۰۰۰ ریال"
          row>
        </StatsBlockItem>
      </StatsBlockRow>
      <StatsBlockRow>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="۵۴۲۰۰۰۰"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="۲۰"
          caption="مجموع درآمد از ابتدا ۲۴٬۵۸۲٬۰۰۰ ریال"
          unit=""
          link="my-link"
          row>
        </StatsBlockItem>
      </StatsBlockRow>
    </StatsBlock>
    <StatsBlock class="mb-xl" loading :loadingNumber="1"
                title="." link="." amount="0" caption="."
    />
  </div>
  `,
});

export const Default = Template.bind({});

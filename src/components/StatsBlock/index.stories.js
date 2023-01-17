import StatsBlock from './index.vue';
import StatsBlockRow from './SBRow/index.vue';
import StatsBlockItem from './SBItem/index.vue';

export default {
  component: StatsBlock,
  title: 'Components/StatsBlock',
};

const Template = (_, { argTypes }) => ({
  components: { StatsBlock, StatsBlockRow, StatsBlockItem },
  props: Object.keys(argTypes),
  data: () => ({
    obj: {
      empty: '',
    },
  }),
  template: `
  <div class="dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
    <StatsBlock class="mb-xl">
      <StatsBlockRow>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="543000"
          caption="مجموع درآمد از ابتدا 24,582,000 ریال"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="0"
          caption="مجموع درآمد از ابتدا 24,582,000 ریال"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="543000"
          caption="مجموع درآمد از ابتدا 24,582,000 ریال"
          row>
        </StatsBlockItem>
      </StatsBlockRow>
      <StatsBlockRow>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="543000"
          link="my-link"
          row>
        </StatsBlockItem>
        <StatsBlockItem
          title="تعداد تراکنش‌های موفق"
          info="اطلاعات"
          amount="20"
          caption="مجموع درآمد از ابتدا 24,582,000 ریال"
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

import QuickFilter from './index.vue';

export default {
  component: QuickFilter,
  title: 'Components/QuickFilter',
};

const Template = (_, { argTypes }) => ({
  components: { QuickFilter },
  props: Object.keys(argTypes),
  data() {
    return {
      list: [
        {
          text: 'همه',
          value: 'all',
        },
        {
          text: 'موفق',
          value: 'success',
        },
        {
          text: 'ناموفق',
          value: 'not success',
        },
      ],
    };
  },
  filter() {
    console.log('filte');
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> دکمه فیلتر </h1>
    <QuickFilter
    :items="list"
    query-key="filter"

  />
    <QuickFilter
      :items="list"
      query-key="filter"
      loading
      :loadingNumber="4"
    />
  </div>
  `,
});

export const Default = Template.bind({});

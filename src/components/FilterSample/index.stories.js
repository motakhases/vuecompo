import FilterSample from "./index.vue";

export default {
  component: FilterSample,
  title: "Components/FilterSample",
};

const Template = (_, { argTypes }) => ({
  components: { FilterSample },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<FilterSample
      v-bind="$props"
    >
    </FilterSample>
  </div>
  `,
});
export const limit = Template.bind({});
limit.args = {
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از',
};
export const numberFormat = Template.bind({});
numberFormat.args = {
  number: '87654567',
};

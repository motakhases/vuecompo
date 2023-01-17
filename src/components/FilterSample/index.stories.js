import FilterSample from './index.vue';
import moment from 'moment-jalaali';

// export default {
//   component: FilterSample,
//   title: "Components/FilterSample",
// };

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
  limitation: true,
};
export const numberFormat = Template.bind({});
numberFormat.args = {
  number: '87654567',
  numberFormat: true,
};
export const customDate = Template.bind({});
customDate.args = {
  time: moment().format('YYYY-MM-DD HH:mm:ss'),
  customDate: true,
};

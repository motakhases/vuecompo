/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Dropdown from './index.vue';
import "../../utils/validations.js"
export default {
  component: Dropdown,
  title: 'Components/Dropdown',
};

const Template = (_, { argTypes }) => ({
  components: {
    Dropdown,
  },
  props: Object.keys(argTypes),
  template: `
    <div class="dark:bg-surface-dark p-sm rounded-md h-full">
      <Dropdown
        v-model="value"
        :disabled="disabled"
        :label="label"
        :helperHint="helperHint"
        :successHint="successHint"
        :options="options"
        :disabledOptionId="disabledOptionId"
        :loading="loading"
        :rules="rules"
      />
    </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  label: 'یک لیبل تستی',
  value: '',
  helperHint: 'یک توضیح کوتاه',
	successHint: 'عملیات موفقیت آمیز بود',
  options: [
    { id: 1, name: 'Barney' },
    { id: 2, name: 'Homer' },
    { id: 3, name: 'Apu' },
    { id: 4, name: 'Bart' },
    { id: 5, name: 'Flanders' },
  ],
	disabledOptionId: null,
	loading: false,
	rules: 'required'
};

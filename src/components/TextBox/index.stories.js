/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';
import '../../utils/validations';

export default {
  component: Component,
  title: 'Components/TextBox',
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
  },
  props: Object.keys(argTypes),
  template: `
		<Component
		v-model="value"
		:size="size"
		:disabled="disabled"
		:label="label"
		:value="value"
		:helperHint="helperHint"
		:successHint="successHint"
	  :limit="limit"
		:rules="rules"
		/>  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
};

Default.args = {
  size: 'medium',
  disabled: false,
  label: 'label',
  value: '',
  helperHint: '',
	successHint: '',
  limit: 0,
	rules: 'odd|required|min'
};

/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';
import "../../utils/validations.js"
export default {
  component: Component,
  title: 'Components/Dropdown',
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
  },
  props: Object.keys(argTypes),
  template: `
		<Component
		v-model="value"
		:disabled="disabled"
		:label="label"
		:helperHint="helperHint"
		:successHint="successHint"
		:options="options"
		:disabledOptionId="disabledOptionId"
		:loading="loading"
		:rules="rules"
		/>  `,
});

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  label: '',
  value: '',
  helperHint: 'ik',
	successHint: 'succe',
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

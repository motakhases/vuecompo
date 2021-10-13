/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';
import './validation';

export default {
  component: Component,
  title: 'Components/TextField',
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
  },
  props: Object.keys(argTypes),
  template: `
		<Component
		v-model="value"
		:type="type"
		:separator="separator"
		:disabled="disabled"
		:error="error"
		:label="label"
		:hint="hint"
		:hint-text="hintText"
		:unit="unit"
		:limit="limit"
		:beforeIcon="beforeIcon"
		:afterIcon="afterIcon"
		:stepper="stepper"
		:rules="rules"
		/>  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  hint: {
    options: ['helper', 'success'],
    control: { type: 'radio' }, 
  }, 
	type: {
    options: ['text', 'number'],
    control: { type: 'radio' },
  },
	separator: {
    options: ['comma', 'dash', 'none'],
    control: { type: 'radio' },
		description: 'implementing separator requires type to be number',

  },
};

Default.args = {
  hint: 'success',
  disabled: false,
  error: false,
  label: '',
  value: '',
  hintText: '',
  unit: '',
  limit: 0,
	type: 'text',
	separator: 'none',
	beforeIcon: '',
	afterIcon: '',
	stepper: false,
	rules: 'odd|required|min'
};

/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';

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
		/>  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  hint: {
    options: ['helper', 'error', 'success'],
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
  hint: 'helper',
  disabled: false,
  error: false,
  label: '',
  value: '',
  hintText: '',
  unit: '',
  limit: 0,
	type: 'text',
	separator: 'none'
};

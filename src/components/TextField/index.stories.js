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
		:disabled="disabled"
		:error="error"
		:label="label"
		:value="value"
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
};

Default.args = {
  hint: 'helper',
  disabled: false,
  error: false,
  label: 'label',
  value: '',
  hintText: '',
  unit: '',
  limit: 0,
};

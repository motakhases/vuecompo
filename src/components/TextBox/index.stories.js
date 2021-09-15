/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';

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
		:error="error"
		:label="label"
		:value="value"
		:hint="hint"
		:hint-text="hintText"
		:limit="limit"
		/>  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
  hint: {
    options: ['helper', 'error', 'success'],
    control: { type: 'radio' },
  },
};

Default.args = {
  size: 'medium',
  hint: 'helper',
  disabled: false,
  error: false,
  label: 'label',
  value: '',
  hintText: '',
  limit: 0,
};

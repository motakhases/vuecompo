/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import Component from './index.vue';

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
		:error="error"
		:label="label"
		:hint="hint"
		:hint-text="hintText"
		:options="options"
		:disabledOptionId="disabledOptionId"
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
  label: '',
  value: '',
  hintText: '',
  options: [
    { id: 1, name: 'Barney' },
    { id: 2, name: 'Homer' },
    { id: 3, name: 'Apu' },
    { id: 4, name: 'Bart' },
    { id: 5, name: 'Flanders' },
  ],
	disabledOptionId: null
};

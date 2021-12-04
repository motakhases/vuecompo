/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import TextField from './index.vue';
import '../../utils/validations';

export default {
  component: TextField,
  title: 'Components/TextField',
};

const Template = (_, { argTypes }) => ({
  components: {
    TextField,
  },
  props: Object.keys(argTypes),
  template: `<TextField v-bind="$props"/>`,
});

export const Default = Template.bind({});

Default.argTypes = {
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
  disabled: false,
  label: 'label',
  value: '',
  helperHint: 'helper',
	successHint: 'success',
  unit: '',
  limit: 0,
	type: 'text',
	separator: 'none',
	beforeIcon: '',
	afterIcon: '',
	stepper: false,
	id: '',
	rules: 'odd|required|min'
};

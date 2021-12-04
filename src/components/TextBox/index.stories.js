/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

import TextBox from './index.vue';
import '../../utils/validations';

export default {
  component: TextBox,
  title: 'Components/TextBox',
};

const Template = (_, { argTypes }) => ({
  components: {
    TextBox,
  },
  props: Object.keys(argTypes),
  template: `
		<TextBox
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

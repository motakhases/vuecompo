import TextField from './index.vue';
import '@/utils/validations';

export default {
  component: TextField,
  title: "Components/TextField",
};

const Template = (_, { argTypes }) => ({
  components: {
    TextField,
  },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<TextField v-model="value" v-bind="$props" />  
	</div>
	`,
});

export const Default = Template.bind({});

Default.argTypes = {
  type: {
    options: ["text", "number"],
    control: { type: "radio" },
  },
  separator: {
    options: ["comma", "dash", "none"],
    control: { type: "radio" },
    description: "implementing separator requires type to be number",
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
  type: "text",
  separator: "none",
  beforeIcon: "",
  afterIcon: "",
  stepper: false,
  rules: "odd|required|min",
  id: "",
	placeholder:""
};

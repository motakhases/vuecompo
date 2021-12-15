import TextField from './index.vue';
import '@/utils/validations';

const Template = (_, { argTypes }) => ({
  components: {
    TextField,
  },
  props: Object.keys(argTypes),
  data: () => ({
    disabled: 'سلام از طرف یک فیلد غیر فعال',
    hint: '',
    number: '',
    icon1: '',
    icon2: '',
  }),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md grid grid-cols-2 gap-sm">
    <TextField
      class="col-span-2"
      v-model="disabled"
      label="فیلد غیر فعال"
      disabled
    />
    <TextField
      class="col-span-1"
      v-model="hint"
      label="سایز کوچک"
      helperHint="می‌توانید در این فیلد هر چیزی بنویسید"
      successHint="متن با موفقیت خوانده شد"
    />
    <TextField
      class="col-span-1"
      v-model="number"
      label="فیلد عددی"
      stepper
      type="number"
    />
    <TextField
      class="col-span-1"
      v-model="icon1"
      label="فیلد آیکن دار"
      beforeIcon="Star"
    />
    <TextField
      class="col-span-1"
      v-model="icon2"
      label="فیلد آیکن دار"
      afterIcon="Star"
    />
  </div>
  `,
});

const textfield = Template.bind({});

export default textfield;

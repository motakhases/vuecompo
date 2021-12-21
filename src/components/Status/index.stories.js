import Status from './index.vue';
import '@/utils/validations';

const Template = (_, { argTypes }) => ({
  components: {
    Status,
  },
  props: Object.keys(argTypes),
  data: () => ({
    sm: 'سلام از طرف یک فیلد غیر فعال',
    md: '',
    lg: '',
  }),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md flex flex-col gap-md rtl">
	  <Status v-bind="$props" />
		<h1 class="mt-sm font-bold dark:text-surface"> همراه با نشانگر </h1>
	  <Status text="بازگردانی شده" type="informative" indicator />
		<h1 class="mt-sm font-bold dark:text-surface"> انواع وضعیت </h1>
		<div class="flex gap-sm">
		  <Status text="تسویه شده" type="positive" indicator />
		  <Status text="در حال پرداخت" type="informative" indicator />
	    <Status text="رد شده" type="negative" indicator />
	    <Status text="ارسال شده به شاپرک" type="warning" indicator />
	    <Status text="غیرفعال" type="neutral" indicator />
		</div>
  </div>
  `,
});

const status = Template.bind({});

status.argTypes = {
  type: {
    options: ['neutral', 'informative', 'warning', 'negative', 'positive'],
    control: { type: 'select' },
  },
};

status.args = {
  text: 'فعال',
  type: 'positive',
  indicator: false,
};

export default status;

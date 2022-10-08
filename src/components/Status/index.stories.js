import Status from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: {
    Status,
  },
  props: Object.keys(argTypes),
  data: () => ({
    sm: "سلام از طرف یک فیلد غیر فعال",
    md: "",
    lg: "",
  }),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
	  <Status text="تسویه شده" type="positive" />
		<h1 class="mt-sm font-bold dark:text-surface"> همراه با نشانگر </h1>
	  <Status text="بازگردانی شده" type="informative" indicator />
		<h1 class="mt-sm font-bold dark:text-surface"> انواع وضعیت </h1>
		<div class="flex gap-sm">
		  <Status text="تسویه شده" type="positive" indicator />
		  <Status text="در حال پرداخت" type="informative" indicator />
	    <Status text="رد شده" type="negative" indicator />
	    <Status text="ارسال شده به شاپرک" type="warning" indicator />
	    <Status text="غیرفعال" type="neutral" indicator />
      <Status  type="informative" icon="CheckmarkCircle" />

		</div>
  </div>
  `,
});

const status = Template.bind({});

export default status;

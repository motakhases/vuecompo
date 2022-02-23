import TextField from "./index.vue";
import "@/utils/validations";

const Template = (_, { argTypes }) => ({
  components: {
    TextField,
  },
  props: Object.keys(argTypes),
  data: () => ({
    disabled: "سلام از طرف یک فیلد غیر فعال",
    hint: "",
    number: "",
    icon1: "",
    icon2: "",
    unit: "",
    helper: "",
    success: "",
    error: "",
    limit: "",
    limitNum: 5,
    url: 'https://zarinp.al/376218',
  }),
  template: `
  <div class="dark:bg-surface-dark p-sm pb-md rounded-md grid grid-cols-2 gap-sm rtl">
  	<TextField
  	  v-model="hint"
  	  class="col-span-1"
  	  label="فیلد عادی"
  	/>
  	<TextField
  	  v-model="number"
  	  class="col-span-1"
  	  label="فیلد عددی"
  	  stepper
  	  type="number"
  	/>
  	<TextField
  	  v-model="icon1"
  	  class="col-span-1"
  	  prefix-icon="Star"
  	  placeholder="فیلد آیکن دار"
  	/>
  	<TextField
  	  v-model="icon2"
  	  class="col-span-1"
  	  label="فیلد آیکن دار"
  	  suffix-icon="Star"
  	/>
  	<TextField
  	  v-model="unit"
			type="number"
  	  class="col-span-1"
			separator="comma"
  	  label="فیلد واحد دار"
  	  unit="ریال"
  	/>
		<TextField
			v-model="limit"
			class="col-span-1"
			label="فیلد با تعداد کاراکتر محدود"
			:limit="limitNum"
		/> 
		<TextField
  	  v-model="url"
  	  class="col-span-1"
  	  label="فیلد غیرقابل تغییر قابل کپی"
			readonly
			ltr
			copyable
  	/>
		<TextField
  	  v-model="disabled"
  	  class="col-span-1"
  	  label="فیلد غیر فعال"
  	  disabled
  	/>
  	<h1 class="col-span-2 dark:text-secondary mt-md">
  	  اعتبارسنجی
  	</h1>
  	<TextField
  	  v-model="helper"
  	  class="col-span-2"
  	  helper-hint="می‌توانید در این فیلد هر چیزی بنویسید"
  	/>
  	<TextField
  	  v-model="success"
  	  class="col-span-1 mb-lg"
  	  success-hint="متن با موفقیت خوانده شد"
  	/>
  	<TextField
  	  v-model="error"
  	  class="col-span-1"
  	  rules="required"
  	/>
  </div>
  `,
});

const textfield = Template.bind({});

export default textfield;

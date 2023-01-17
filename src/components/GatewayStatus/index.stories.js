import GatewayStatus from './index.vue';

const Template = (_, { argTypes }) => ({
  components: { GatewayStatus },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md rtl">
		<GatewayStatus v-bind="$props" />
		<h1 class="mt-sm font-bold mb-sm dark:text-surface"> انواع وضعیت </h1>
		<div class="flex gap-sm">
		  <GatewayStatus text="فعال" type="active" />
		  <GatewayStatus text="در حال انجام" type="pending" />
	    <GatewayStatus text="غیرفعال" type="inactive" />
	    <GatewayStatus text="رد شده" type="deactive" />
		</div>
	</div>
  `,
});

const gatewayStatus = Template.bind({});

gatewayStatus.argTypes = {
  type: {
    options: ['inactive', 'active', 'pending', 'deactive'],
    control: { type: 'radio' },
  },
};

gatewayStatus.args = {
  text: 'وضعیت',
  type: 'active',
};
export default gatewayStatus;

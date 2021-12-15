import InlineMessage from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl flex flex-col gap-y-md">
    <InlineMessage title="عنوان" type="neutral" />
    <InlineMessage title="عنوان" type="informative" />
    <InlineMessage title="عنوان" type="warning" />
    <InlineMessage title="عنوان" type="negative" />
    <InlineMessage title="عنوان" type="positive" />
  </div>
  `,
});

const Types = Template.bind({});
export default Types;

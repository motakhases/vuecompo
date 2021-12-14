import Status from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Status },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl flex gap-x-xs">
    <Status text="Neutral" type="neutral" />
    <Status text="Informative" type="informative" />
    <Status text="Warning" type="warning" />
    <Status text="Negative" type="negative" />
    <Status text="Positive" type="positive" />
  </div>
  `,
});

const Types = Template.bind({});
export default Types;

import Status from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Status },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Status text="Neutral" indicator />
  </div>
  `,
});

const Dismiss = Template.bind({});
export default Dismiss;

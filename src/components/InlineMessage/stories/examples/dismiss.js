import InlineMessage from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage },
  props: Object.keys(argTypes),
  data() {
    return {
      show: false,
    };
  },
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <InlineMessage title="عنوان" toggle />
  </div>
  `,
});

const Dismiss = Template.bind({});
export default Dismiss;

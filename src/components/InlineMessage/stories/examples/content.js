import InlineMessage from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <InlineMessage title="عنوان" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ " />
  </div>
  `,
});

const Content = Template.bind({});
export default Content;

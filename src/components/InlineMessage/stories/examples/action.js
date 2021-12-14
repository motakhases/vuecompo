import InlineMessage from '../../index.vue';
import Button from '../../../Button/index.vue';

const Template = (_, { argTypes }) => ({
  components: { InlineMessage, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <InlineMessage toggle type="informative" title="عنوان" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ">
      <Button type="informative" text="دکمه" />
    </InlineMessage>
  </div>
  `,
});

const Action = Template.bind({});
export default Action;

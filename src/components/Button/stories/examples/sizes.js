import Button from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Button type="primary" size="small" text="Small" />
    <Button type="primary" size="medium" text="Medium" />
    <Button type="primary" size="large" text="Large" />
  </div>
  `,
});

const Sizes = Template.bind({});
export default Sizes;

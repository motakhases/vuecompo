import Button from '../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Button type="primary" text="Filled Button" fill />
  </div>
  `,
});

const Fill = Template.bind({});
export default Fill;

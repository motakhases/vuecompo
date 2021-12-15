import Button from '../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Button type="neutral" text="Neutral" />
    <Button type="informative" text="Informative" />
    <Button type="warning" text="Warning" />
    <Button type="negative" text="Negative" />
    <Button type="positive" text="Positive" />
  </div>
  `,
});

const Outline = Template.bind({});
export default Outline;

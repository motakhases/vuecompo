import Button from '../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl">
    <Button type="primary" text="Primary" />
    <Button type="secondary" text="Secondary" />
    <Button type="tertiary" text="Tertiary" />
    <Button type="decretive" text="Decretive" />
  </div>
  `,
});

const Types = Template.bind({});
export default Types;

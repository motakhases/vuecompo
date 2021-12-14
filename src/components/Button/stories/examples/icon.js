import Button from '../../index.vue';

const Template = (_, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-text-dark-onPrimary p-sm rounded-md rtl flex gap-2xs">
    <Button type="primary" text="Before Icon" beforeIcon="QuestionCircle" />
    <Button type="primary" text="After Icon" afterIcon="QuestionCircle" />
    <Button type="primary" text="both Icons" beforeIcon="QuestionCircle" afterIcon="QuestionCircle" />
    <Button type="primary" icon="QuestionCircle" />
  </div>
  `,
});

const Icon = Template.bind({});
export default Icon;

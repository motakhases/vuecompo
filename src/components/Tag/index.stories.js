import Tag from './index.vue';

export default {
  component: Tag,
  title: 'Components/Tag',
};

const Template = (_, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Tag :btn="button">
      {{ text }}
    </Tag>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: 'عنوان تگ',
  button: false,
};

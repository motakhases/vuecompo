import Pagination from './index.vue';

export default {
  component: Pagination,
  title: 'Components/Pagination',
};

const Template = (_, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md h-[285px]" dir="rtl">
    <Pagination
      :lastPage="lastPage"
      :initLimit="initLimit"
      :initPage="initPage"
    />
   
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  lastPage: 20,
  initLimit: 15,
  initPage: 1,
};

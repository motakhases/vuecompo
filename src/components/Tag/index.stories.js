import Tag from "./index.vue";

export default {
  component: Tag,
  title: "Components/Tag",
};

const Template = (_, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> تگ </h1>
    <Tag label="برچسب"/>
    <h1 class="mt-sm font-bold dark:text-surface"> همراه با دکمه بستن </h1>
    <Tag label="برچسب" btn />
  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {};

// Default.args = {
//   label: "عنوان تگ",
//   btn: false,
// };

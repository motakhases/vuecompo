import Reciept from "./index.vue";

export default {
  component: Reciept,
  title: "Components/Reciept",
};

const Template = (_, { argTypes }) => ({
  components: { Reciept },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> تگ </h1>
    <Reciept label="برچسب"/>
    <h1 class="mt-sm font-bold dark:text-surface"> همراه با دکمه بستن </h1>
    <Reciept label="برچسب" btn />
  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {};

// Default.args = {
//   label: "عنوان تگ",
//   btn: false,
// };

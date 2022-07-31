import Balance from "./index.vue";

export default {
  component: Balance,
  title: "Components/Balance",
};

const Template = (_, { argTypes }) => ({
  components: { Balance },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> رسید </h1>
    <Balance v-bind="$props"/>
    <Balance v-bind="$props" loading />

  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {};

Default.args = {
  title: "موجودی",
  amount: "125255252",
  reloadHandler: () => console.log('reloadHandler'),
  href:'https://google.com'
};

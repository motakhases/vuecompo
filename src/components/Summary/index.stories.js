import Summary from "./index.vue";

export default {
  component: Summary,
  title: "Components/Summary",
};

const Template = (_, { argTypes }) => ({
  components: { Summary },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> رسید </h1>
    <Summary v-bind="$props"/>
    <Summary v-bind="$props" loading :loadingNumber="5"/>

  </div>
  `,
});

export const Default = Template.bind({});

// Default.argTypes = {};

Default.args = {
  options: [
    { id: 1, text: "عنوان", sub: "۱۰۰۰۰ ریال" },
    { id: 4, text: "عنوان", sub: "۵۰۰۰۰۰ ریال" },
    { id: 5, text: "عنوان", sub: "۴۵۰۰۰۰ ریال", infoText: "متن" },
  ],
};

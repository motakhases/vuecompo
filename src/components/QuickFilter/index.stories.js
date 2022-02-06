import QuickFilter from "./index.vue";

export default {
  component: QuickFilter,
  title: "Components/QuickFilter",
};

const Template = (_, { argTypes }) => ({
  components: { QuickFilter },
  props: Object.keys(argTypes),
  data() {
    return {
      list: [
        {
          id: 1,
          text: "همه",
          click: () => console.log("clicked"),
          active: true,
        },
        {
          id: 2,
          text: "موفق",
          click: () => console.log("clicked"),
          active: false,
        },
        {
          id: 3,
          text: "ناموفق",
          click: () => console.log("clicked"),
          active: false,
        },
      ],
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="mt-sm font-bold dark:text-surface"> دکمه فیلتر </h1>
    <QuickFilter :items="list"/>
  </div>
  `,
});

export const Default = Template.bind({});

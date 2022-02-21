import QuickFilter from "./index.vue";

export default {
  component: QuickFilter,
  title: "Components/QuickFilter",
};

const Template = (_, { argTypes }) => ({
  components: { QuickFilter },
  props: Object.keys(argTypes),
  methods: {
    filter(i) {
      this.list.filter((item, index) => {
        if (index === i) {
          this.list[index].active = true;
        } else {
          this.list[index].active = false;
        }
      });
    },
  },
  data() {
    return {
      list: [
        {
          text: "همه",
          click: (i) => this.filter(i),
          active: true,
        },
        {
          text: "موفق",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "ناموفق",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "همه",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "موفق",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "ناموفق",
          click: (i) => this.filter(i),
          active: false,
        },        {
          text: "همه",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "موفق",
          click: (i) => this.filter(i),
          active: false,
        },
        {
          text: "ناموفق",
          click: (i) => this.filter(i),
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

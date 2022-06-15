import ListMenu from "./index.vue";

export default {
  component: ListMenu,
  title: "Components/ListMenu",
};

const Template = () => ({
  components: { ListMenu },
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'تغییرات پنل جدید',
          amount: 23,
        },
        {
          id: 2,
          title: 'تراکنش',
          amount: 13,
        },
        {
          id: 3,
          title: 'حساب بانکی',
          amount: 11,
        },
      ],

      active: null
    };
  },
  template: `
  <div class="bg-surface dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
    Active Value: {{ active }}  
    <ListMenu :list="list" @item-clicked="(n) => { this.active = n }" />
  </div>
  `,
});

export const Default = Template.bind({});

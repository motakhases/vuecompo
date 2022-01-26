import Table from "./index.vue";

export default {
  component: Table,
  title: "Components/Table",
};

const Template = (_, { argTypes }) => ({
  components: { Table },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md" dir="rtl">
    <Table
      :items="[]"
      :columns="[]"
    />
  </div>
  `,
});

export const Default = Template.bind({});

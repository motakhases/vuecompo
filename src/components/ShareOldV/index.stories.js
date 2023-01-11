import ShareOldV from "./index.vue";

export default {
  component: ShareOldV,
  title: "Components/ShareOldV",
};

const Template = (_, { argTypes }) => ({
  components: { ShareOldV },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark" dir="rtl">
    <ShareOldV
      url="https://zarinp.al/376218"
      title="This is product FELAAN"
    />
    <ShareOldV
   loading
  />
  </div>
  `,
});

export const Default = Template.bind({});

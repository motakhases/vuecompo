import Share from "./index.vue";

export default {
  component: Share,
  title: "Components/Share",
};

const Template = (_, { argTypes }) => ({
  components: { Share },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark" dir="rtl">
    <Share
      url="https://zarinp.al/376218"
    />
  </div>
  `,
});

export const Default = Template.bind({});
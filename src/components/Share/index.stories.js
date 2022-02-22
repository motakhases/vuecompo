import Share from "./index.vue";

export default {
  component: Share,
  title: "Components/Share",
};

const Template = (_, { argTypes }) => ({
  components: { Share },
  props: Object.keys(argTypes),
  data: () => ({
    htmlCode: '<a target="_blank" href="https://zarinp.al/40">link</a>'
  }),
  template: `
  <div class="dark:bg-surface-dark" dir="rtl">
    <Share
      url="https://zarinp.al/376218"
      :html="htmlCode"
      qrcode="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
    />
  </div>
  `,
});

export const Default = Template.bind({});
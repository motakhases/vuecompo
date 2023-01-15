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
      :title="$t('common.link')"
      text="https://zarinp.al/376218"
      :title2="$t('product.show.html_code_label')"
      text2="https://zarinp.al/376218"
      url-tlg="https://zarinp.al/376218"
      url-w-app="https://zarinp.al/376218"
    />
    <Share
      loading
    />
    </div>
  `,
});

export const Default = Template.bind({});

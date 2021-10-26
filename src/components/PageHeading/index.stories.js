import PageHeading from "./index.vue";

export default {
  component: PageHeading,
  title: "Components/PageHeading",
};

const Template = (_, { argTypes }) => ({
  components: { PageHeading },
  props: Object.keys(argTypes),
  template: `
    <PageHeading
      :returnBTN="returnBTN"
      :sticky="sticky"
      :title="title"
      :desc="desc"
      :hasButton="hasButton"
      :btn="btn"
      @btnClick="onClick()"
    />
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  title: "عنوان",
  desc: "توضیحات صفحه",
  sticky: true,
  returnBTN: true,
  hasButton: true,
	onClick: () => alert('clicked'),
  label: "test",
  btn:{
    label: "تست",
    type: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    afterIcon: "",
    beforeIcon: "",
  },

};

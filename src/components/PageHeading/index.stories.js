import PageHeading from "./index.vue";

const Template = (_, { argTypes }) => ({
  components: { PageHeading },
  props: Object.keys(argTypes),
  template: `
  <div class="rtl bg-background dark:bg-background-dark p-sm">
    <PageHeading
      :returnBTN="returnBTN"
      :sticky="sticky"
      :title="title"
      :desc="desc"
      :hasButton="hasButton"
      :btn="btn"
      @btnClick="onClick()"
    />
  </div>  
  `,
});

const pageHeading = Template.bind({});

pageHeading.argTypes = {
};

pageHeading.args = {
  title: "عنوان",
  desc: "توضیحات صفحه",
  sticky: true,
  returnBTN: true,
  hasButton: true,
	onClick: () => alert('clicked'),
  label: "test",
  btn:{
    text: "تست",
    type: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    afterIcon: "",
    beforeIcon: "",
  },
};

export default pageHeading
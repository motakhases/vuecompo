import Thumbnail from "./index.vue";

export default {
  component: Thumbnail,
  title: "Components/Thumbnail",
};

const Template = (_, { argTypes }) => ({
  components: { Thumbnail },
  props: Object.keys(argTypes),
  template: `
		<Thumbnail :icon="icon" :img="img" alt="alt" />
  `,
});

export const Default = Template.bind({});


Default.args = {
  icon: "terminal",
  alt: "",
  img: "",
};

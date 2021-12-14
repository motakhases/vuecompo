import Thumbnail from "./index.vue";

export default {
  component: Thumbnail,
  title: "Components/Thumbnail",
};

const Template = (_, { argTypes }) => ({
  components: { Thumbnail },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-sm rounded-md">
		<Thumbnail v-bind="$props" />  
	</div>
  `,
});

export const Default = Template.bind({});


Default.args = {
  icon: "terminal",
  alt: "",
  img: "",
};

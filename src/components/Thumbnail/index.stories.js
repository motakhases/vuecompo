import Thumbnail from "./index.vue";

export default {
  component: Thumbnail,
  title: "Components/Thumbnail",
};

const Template = (_, { argTypes }) => ({
  components: { Thumbnail },
  props: Object.keys(argTypes),
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
		<Thumbnail icon="terminal" />  
    <h1 class="mt-sm font-bold dark:text-surface"> انواع ایکن </h1>
    <div class="flex gap-sm">
    	<Thumbnail icon="terminal" />  
		  <Thumbnail icon="product" />  
		  <Thumbnail icon="chartSquare" />  
		  <Thumbnail icon="plus" />  
    </div>
    <h1 class="mt-sm font-bold dark:text-surface"> انواع لوگوی بانک </h1>
    <div class="flex gap-sm">
      <Thumbnail logo="zarinCard" />  
      <Thumbnail logo="kosar" />  
      <Thumbnail logo="postbank" />  
      <Thumbnail logo="eghtesadNovin" />  
      <Thumbnail logo="mellat" />  
    </div>
	</div>
  `,
});

export const Default = Template.bind({});


Default.args = {
  icon: "terminal",
  alt: "",
  img: "",
};

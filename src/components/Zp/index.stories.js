import Zp from "./index.vue";

const Template = () => ({
  components: {
    Zp,
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col justify-center items-center gap-md rtl">
	  <Zp id="1324" level="SILVER" />
	  <Zp id="1324" level="GOLD" />
	  <Zp id="1324" level="BASIC" />
	  <Zp id="1324" level="NEW" />
  </div>
  `,
});

export const Default = Template.bind({});

export default {
  component: Zp,
  title: "Components/Zp",
};
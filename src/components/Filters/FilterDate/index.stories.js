import FilterDate from "./index.vue";

// export default {
//   component: FilterDate,
//   title: "Components/Filters/FilterDate",
// };

const Template = (_, { argTypes }) => ({
  components: { FilterDate },
  props: Object.keys(argTypes),
  data() {
    return {
      dateValue: "",
    };
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl w-[296px]">
		<FilterDate v-model="dateValue"/>
	</div>
  `,
});

export const Default = Template.bind({});

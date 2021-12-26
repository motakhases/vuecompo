import Radio from "@/components/Radio/index.vue";

import FilterAmount from "./index.vue";

// export default {
//   component: FilterAmount,
//   title: "Components/Filters/FilterAmount",
// };

const Template = (_, { argTypes }) => ({
  components: { FilterAmount, Radio },
  props: Object.keys(argTypes),
  data() {
    return {
      amountValue: "",
    };
  },
  method: {
    filterHandler(value) {
      this.amountValue = value;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md rtl">
		<FilterAmount v-bind='$props' v-model="amountValue">

		</FilterAmount>
  </div>
  `,
});

export const Default = Template.bind({});
Default.argTypes = {
  amountFilter: {
    options: ["min", "max", "equal", "range"],
    control: { type: "radio" },
  },
};

Default.args = {
  name: "some name",
  text: "عنوان فیلتر",
  val: "value",
  disabled: false,
  amountFilter: "equal",
};

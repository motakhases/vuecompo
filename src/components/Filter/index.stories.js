import Shayeste from "./index.vue";
import Button from "../Button/index.vue";
import Radio from "@/components/Radio/index.vue";
import FilterDate from "./FilterDate/index.vue";

export default {
  component: Shayeste,
  title: "Components/Shayeste",
};

const Template = (_, { argTypes }) => ({
  components: { Shayeste, Button, Radio, FilterDate },
  data() {
    return {
      show: false,
      filters: {
        status: "",
      },
    };
  },
  methods: {
    filter() {
      console.log("Try to add queries...");
      const filterList = {};

      console.log({
        filterList,
        queries: this.$route.query,
      });

      /**
       * push filters list to query
       */
      this.$router.push({ query: filter });

      console.log({
        queries: this.$route.query,
      });

      this.toggleModal();
    },
  },

  props: Object.keys(argTypes),
  template: `
  <div class="   dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <Shayeste title="عنوان کارت" :filter="filter" title="تاریخ">
    <div class="w-full">
        <Radio
    v-model="filters.status"
    name="r"
    val="active"
    text="موفق"
  />
  <Radio
    v-model="filters.status"
    name="r"
    val="inactive"
    text="ناموفق"
  />
    </div>

    </Shayeste>
    <Shayeste title="عنوان کارت" :filter="filter" title="یتاریخ">
    <div class="w-full">
    <FilterDate
    @updateFilter="updateFilter"
    @deleteFilter="deleteFilter"
  />
    </div>

    </Shayeste>


  </div>
  `,
});

export const Default = Template.bind({});

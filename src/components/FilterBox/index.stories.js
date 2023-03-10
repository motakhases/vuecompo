import FilterBox from './index.vue';
import Button from '../Button/index.vue';
import Radio from '@/components/Radio/index.vue';
import FilterDate from './FilterDate/index.vue';

export default {
  component: FilterBox,
  title: 'Components/FilterBox',
};

const Template = (_, { argTypes }) => ({
  components: { FilterBox, Button, Radio, FilterDate },
  data() {
    return {
      show: false,
      filters: {
        status: '',
      },
    };
  },
  methods: {
    deleteFilter() {
      console.log('deleteFilter');
    },
    updateFilter() {
      console.log('updateFilter');
    },
    filters1() {
      console.log('Try to add queries...');
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
    discloserHandle(val) {
      console.log('st', val);
    },
  },

  props: Object.keys(argTypes),
  template: `
  <div class="   dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <FilterBox title="عنوان کارت" :filter="filters1" @isCloser="discloserHandle">
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

    </FilterBox>
    <FilterBox title="عنوان کارت" :filter="filters1" >

    <div class="w-full">
    <FilterDate
    @updateFilter="updateFilter"
    @deleteFilter="deleteFilter"
  />
    </div>

    </FilterBox>


  </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  isCloser: { action: 'isCloser' },
};

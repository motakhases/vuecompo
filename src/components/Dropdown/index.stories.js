import Dropdown from "./index.vue";
import Button from "@/components/Button/index.vue";
export default {
  component: Dropdown,
  title: "Components/Dropdown",
};

const Template = (_, { argTypes }) => ({
  components: { Dropdown, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      menu: false,
      list: [
        { title: "عنوان", icon: "plus", color: "" },
        { title: "عنوان", icon: "plus", color: "" },
        { title: "عنوان", icon: "plus", color: "" },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.menu = !this.menu;
    },
  },
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <Dropdown title="عنوان کارت" :toggle="menu" >
      محتوای دلخواه در کارت
      <template slot="button">
      <Button
      text="منو"
      @click.native="toggleModal"
    />
      </template>
    </Dropdown>
  </div>
  `,
});

export const Default = Template.bind({});
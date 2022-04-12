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
      mylist: [
        {
          title: "عنوان",
          icon: "plus",
          color: "text-danger",
          action: () => console.log("click"),
        },
        {
          title: "عنوان",
          icon: "plus",
          color: "",
          action: () => console.log("click"),
        },
        {
          title: "عنوان",
          icon: "plus",
          color: "",
          action: () => console.log("click"),
        },
      ],
    };
  },
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
	  <Dropdown :list="mylist" width="362px" maxHeight="100px">
      <template slot="button">
          <Button text="منو" />
      </template>
    </Dropdown>
  </div>
  `,
});

export const Default = Template.bind({});

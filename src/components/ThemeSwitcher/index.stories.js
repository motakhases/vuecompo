import ThemeSwitcher from "./index.vue";
import Button from "@/components/Button/index.vue";
export default {
  component: ThemeSwitcher,
  title: "Components/ThemeSwitcher",
};

const Template = (_, { argTypes }) => ({
  components: { ThemeSwitcher, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      modal: true,
    };
  },
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <ThemeSwitcher :open="modal" :toggleModal="toggleModal" />
    <Button
    type="primary"
    size="medium"
    text="کلیک کن"
    @click.native="toggleModal"
  />
  </div>
  `,
});

export const Default = Template.bind({});

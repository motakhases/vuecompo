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
    toggle() {
      this.modal = !this.modal;
    },
    submit() {
      console.log('close');
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <ThemeSwitcher :open="modal" :toggleModal="toggle" />
    <Button
    type="primary"
    size="medium"
    text="کلیک کن"
    @click.native="submit"
  />
  </div>
  `,
});

export const Default = Template.bind({});

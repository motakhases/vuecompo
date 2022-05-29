import Chart from "./index.vue";

export default {
  component: Chart,
  title: "Components/Chart",
};

const Template = (_, { argTypes }) => ({
  components: { Chart },
  props: Object.keys(argTypes),
  template: `
    <Chart :height="50" :width="100" />
  `,
});

export const Default = Template.bind({});

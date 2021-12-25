import Icon from "./index.vue";

export default {
  component: Icon,
  title: "Components/Icon",
};

const Template = (_, { argTypes }) => ({
  components: { Icon },
  data() {
    return {
      names: [
        "AngleDown",
        "AngleRight",
        "AngleLeft",
        "ArrowRight",
        "ArrowFirst",
        "ArrowLast",
        "CheckmarkCircle",
        "ChartSquare",
        "ClockRefresh",
        "Delete",
        "DotsMenu",
        "FilledArrowDown",
        "FilledArrowUp",
        "MenuBurger",
        "Notification",
        "Profile",
        "ProfileFill",
        "QuestionCircle",
        "Plus",
        "Product",
        "Star",
        "Terminal",
        "TickLarge",
        "TickSmall",
        "UndoneCheck",
        "Warning",
      ],
    };
  },
  template: `
	<div class="bg-gray-100 dark:bg-gray-dark-100 p-lg rounded-md flex flex-wrap rtl gap-x-md gap-y-lg">
		<div v-for="name in names" :key="name" class="w-[18.6%]">
  	  <div class="text-center flex flex-col items-center bg-surface h-[150px] rounded-md py-xl px-md dark:text-surface dark:bg-surface-dark">
				<Icon :name="name" class="w-[24px] h-[24px] mb-sm flex-1" />
				<span> {{ name }} </span>
			</div>	
		</div>
	</div>
  `,
});

export const Default = Template.bind({});

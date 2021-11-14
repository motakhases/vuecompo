import Component from "./index.vue";
import TableHeader from "./TableHeader/index.vue";
import TableHeaderItem from "./TableHeaderItem/index.vue";
import CheckBox from "@/components/CheckBox/index.vue";
export default {
  component: Component,
  title: "Components/Table",
};

const Template = (_, { argTypes }) => ({
  components: { Component, TableHeader, TableHeaderItem, CheckBox },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<Component>
			<TableHeader>
    	  <TableHeaderItem :arrowUp="arrowUp" :arrowDown="arrowDown">
					header
				</TableHeaderItem>
			</TableHeader>
    </Component>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  size: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  type: {
    options: ["primary", "secondary", "tertiary"],
    control: { type: "radio" },
  },
};

Default.args = {
  text: "Button",
  size: "large",
  type: "primary",
  arrowUp: false,
  arrowDown: false,
};

import Component from "./index.vue";
import Icon from "../Icon/index.vue";
import NavItem from "./NavItem/index.vue";
import SwitchTerminalPopover from "./SwitchTerminalPopover/index.vue";
import SwitchTerminalItem from "./SwitchTerminalItem/index.vue";
import Overview from "./Overview/index.vue";
import Thumbnail from "../Thumbnail/index.vue";
import Create from "./Create/index.vue";
import SwitchTerminal from "./SwitchTerminal/index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/NavigationBar", module)
  .addDecorator(StoryRouter())
  .add("default", () => Component);

export default {
  component: Component,
  title: "Components/NavigationBar",
};

const Template = (_, { argTypes }) => ({
  components: {
    Component,
    Icon,
    NavItem,
    SwitchTerminalPopover,
    Overview,
    SwitchTerminalItem,
    SwitchTerminal,
    Create,
    Thumbnail,
  },
  props: Object.keys(argTypes),
  template: `
	<Component>
	<SwitchTerminal title="عنوان درگاه" link="zarinp.al/getway" icon="terminal" :toggle="toggle" :show="show">

	</SwitchTerminal>
	<template v-slot:popover>
	<SwitchTerminalPopover :show="show" >
	<Overview
		link="overview"
		active
	>
		نمای کلی
	</Overview>
	<SwitchTerminalItem
		title="عنوان درگاه"
		link="zarinp.al/getway"
		icon="terminal"
		active="true"
		state="active"
		state-text="وضعیت"
	/>
	<Create link="/home">
		ایجاد درگاه جدید
	</Create>
</SwitchTerminalPopover>
	</template>
	<template v-slot:firstList>
	  <NavItem active link="/" title="لیبل" icon="questionCircle" badge="12"/>
	  <NavItem link="/" title="لیبل" icon="questionCircle" badge="12"/>
	</template>
	<template v-slot:secondList>
		<NavItem link="/" title="لیبل" icon="questionCircle" badge="12"/>
		<NavItem link="/" title="لیبل" icon="questionCircle" badge="12"/>
	</template>
</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  show: false,
  toggle: () => {
  },
};

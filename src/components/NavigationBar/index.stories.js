import Component from "./index.vue";
import Icon from "../Icon/index.vue";
import NavItem from "./NavItem/index.vue";
import SwitchTerminalPopover from "./SwitchTerminalPopover/index.vue";
import SwitchTerminalItem from "./SwitchTerminalItem/index.vue";
import Overview from "./Overview/index.vue";
import Thumbnail from "../Thumbnail/index.vue";
import Create from "./Create/index.vue"
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
		Create,
		Thumbnail
  },
  props: Object.keys(argTypes),
  template: `
	<Component>
	<NavItem active>
		<Icon name="questionCircle" />
		<span class="zpl-nav-item-title"> لیبل </span>
	</NavItem>
	<template v-slot:firstList>
		<NavItem>
			<Icon name="questionCircle" />
			<span class="zpl-nav-item-title"> لیبل </span>
		</NavItem>
	</template>
	<SwitchTerminalPopover>
		<Overview link="overview"> نمای کلی </Overview>
		<SwitchTerminalItem title="عنوان درگاه" link="zarinp.al/getway" icon="terminal" active="true">

		</SwitchTerminalItem>
		<Create link="/home"> sds </Create>
	</SwitchTerminalPopover>
</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  size: "large",
};

import Component from "./index.vue";
import Icon from "../Icon/index.vue";
import NavItem from "./NavItem/index.vue";
export default {
  component: Component,
  title: "Components/NavigationBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Icon, NavItem },
  props: Object.keys(argTypes),
  template: `
		<Component>
			<ul class="zpl-nav-bar-list">
				<NavItem active>
	      <Icon name="questionCircle" />
      <span class="zpl-nav-item-title">
        لیبل
      </span>
				</NavItem>
				<NavItem>
	     <a> <Icon name="questionCircle" />
			 <span class="zpl-nav-item-title">
				 لیبل
			 </span></a>
				</NavItem>
	  	</ul>
	</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  size: "large",
};

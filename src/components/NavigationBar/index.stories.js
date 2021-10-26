import Component from "./index.vue";
import Icon from '../Icon/index.vue';

export default {
  component: Component,
  title: "Components/NavigationBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Icon},
  props: Object.keys(argTypes),
  template: `
		<Component
	>
		{{ text }}
		<template v-slot:list>
		<ul class="zpl-nav-bar-list">
		<li class="zpl-nav-bar-item active">
			<Icon name="questionCircle" />
			<div class="zpl-nav-bar-title">
				لیبل
			</div>
		</li>
		<li class="zpl-nav-bar-item">
			<Icon name="questionCircle" />
			<div class="zpl-nav-bar-title">
				لیبل
			</div>
		</li>
		<li class="zpl-nav-bar-item">
			<Icon name="questionCircle" />
			<div class="zpl-nav-bar-title">
				لیبل
			</div>
		</li>
	</ul>
	<ul class="zpl-nav-bar-list">
	<li class="zpl-nav-bar-item">
		<Icon name="questionCircle" />
		<div class="zpl-nav-bar-title">
			لیبل
		</div>
	</li>
	<li class="zpl-nav-bar-item">
		<Icon name="questionCircle" />
		<div class="zpl-nav-bar-title">
			لیبل
		</div>
	</li>
	<li class="zpl-nav-bar-item">
		<Icon name="questionCircle" />
		<div class="zpl-nav-bar-title">
			لیبل
		</div>
	</li>
</ul>
		</template>
	</Component>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
};

Default.args = {
  text: "Button",
  size: "large",
};

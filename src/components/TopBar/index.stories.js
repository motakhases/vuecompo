import Component from "./index.vue";
import Logo from "../Logo/index.vue";
import Icon from "../Icon/index.vue"
export default {
  component: Component,
  title: "Components/TopBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Logo, Icon },
  props: Object.keys(argTypes),
  template: `
		<Component>
		<template v-slot:right-side>
		<Icon
          name="menuBurger"
          class="zpl-topbar-menu"
        />
				<div class="zpl-topbar-logo">
						<Logo size="medium" name="zarinpal" type="logo" language="fa" />

				</div>
		</template>
		<template v-slot:left-side>
		<Icon
          name="questionCircle"
          class="zpl-topbar-menu"
        />
				<Icon
				name="notification"
				class="zpl-topbar-menu"
			/>
		</template>
	</Component>
  `,
});

export const Default = Template.bind({});

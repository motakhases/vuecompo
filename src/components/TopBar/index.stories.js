import Component from "./index.vue";
import Logo from "../Logo/index.vue";
import Icon from "../Icon/index.vue";
import UserProfile from "./UserProfile/index.vue";
import Notification from "./Notification/index.vue";

export default {
  component: Component,
  title: "Components/TopBar",
};

const Template = (_, { argTypes }) => ({
  components: { Component, Logo, Icon, UserProfile, Notification },
  props: Object.keys(argTypes),
  template: `
  <Component>
    <template v-slot:right-side>
      <Icon name="menuBurger" class="zpl-topbar-menu" />
      <div class="zpl-topbar-logo">
        <Logo size="medium" name="zarinpal" type="logo" language="fa" />
      </div>
    </template>
    <template v-slot:left-side>
      <Icon name="questionCircle" class="zpl-topbar-menu" />
			<Notification :badge="badge" />
      <UserProfile username="نام کاربر" />
    </template>
  </Component>
  `,
});

export const Default = Template.bind({});
Default.args = {
  badge: "۹۹",
};

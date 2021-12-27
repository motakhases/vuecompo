import TopBar from "./index.vue";
import Logo from "@/components/Logo/index.vue";
import Icon from "@/components/Icon/index.vue";
import UserProfile from "./UserProfile/index.vue";
import Notification from "./Notification/index.vue";
import Button from "@/components/Button/index.vue";

const Template = (_, { argTypes }) => ({
  components: { TopBar, Logo, Icon, UserProfile, Notification, Button },
  props: Object.keys(argTypes),
  template: `
  <TopBar>
    <template v-slot:right-side>
      <Icon name="menuBurger" class="zpl-topbar-menu" />
      <div class="zpl-topbar-logo">
        <Logo size="medium" name="zarinpal" type="logo" language="fa" />
      </div>
    </template>
    <template v-slot:left-side>
      <Button icon="questionCircle" type="tertiary" />
			<Notification :badge="badge" />
      <UserProfile username="نام کاربر" />
    </template>
  </TopBar>
  `,
});

const topBar = Template.bind({});

topBar.args = {
  badge: "۹۹",
};

export default topBar;

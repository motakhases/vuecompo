import NavigationBar from "./index.vue";
import Icon from "../Icon/index.vue";
import NavItem from "./NavItem/index.vue";
import SwitchTerminalPopover from "./SwitchTerminalPopover/index.vue";
import SwitchTerminalItem from "./SwitchTerminalItem/index.vue";
import Overview from "./Overview/index.vue";
import Thumbnail from "../Thumbnail/index.vue";
import Create from "./Create/index.vue";
import SwitchTerminal from "./SwitchTerminal/index.vue";
import Logo from "@/components/Logo/index.vue";
import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Components/NavigationBar", module)
  .addDecorator(StoryRouter())
  .add("default", () => NavigationBar);


const Template = (_, { argTypes }) => ({
  components: {
    NavigationBar,
    Icon,
    NavItem,
    SwitchTerminalPopover,
    Overview,
    SwitchTerminalItem,
    SwitchTerminal,
    Create,
    Thumbnail,
    Logo,
  },
  props: Object.keys(argTypes),
  template: `
    <div class="relative">
      <NavigationBar :toggle="toggle">
        <SwitchTerminalPopover>
          <template v-slot:terminal>
            <SwitchTerminal
              title="عنوان درگاه"
              link="zarinp.al/getway"
              icon="terminal"
            >
            </SwitchTerminal>
          </template>
          <template v-slot:menu>
            <Overview link="overview" active> نمای کلی </Overview>
            <SwitchTerminalItem
              title="عنوان درگاه"
              link="zarinp.al/getway"
              icon="terminal"
              active
              state="active"
              state-text="وضعیت"
            />
            <SwitchTerminalItem
              title="عنوان درگاه"
              link="zarinp.al/getway"
              icon="terminal"
              state="inactive"
              state-text="وضعیت"
            />
            <Create link="/home"> ایجاد درگاه جدید </Create>
          </template>
        </SwitchTerminalPopover>
        <template v-slot:logo>
        <Logo name="zarinpal" type="logo" language="fa" size="medium" />
        </template>
        <template v-slot:firstList>
          <NavItem active link="/" title="لیبل" icon="questionCircle" badge="12" />
          <NavItem link="/" title="لیبل" icon="questionCircle" badge="12" />
        </template>
        <template v-slot:secondList>
          <NavItem link="/" title="لیبل" icon="questionCircle" />
          <NavItem link="/" title="لیبل" icon="questionCircle" />
        </template>
      </NavigationBar>
    <div>
  `,
});

const Default = Template.bind({});

Default.argTypes = {};

Default.args = {
  toggle: false,
};

export default Default
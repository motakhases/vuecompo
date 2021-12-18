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
      <NavigationBar :toggle="toggle" />
    </div>
  `,
});

const navigationBar = Template.bind({});

navigationBar.argTypes = {};

navigationBar.args = {
  toggle: false,
};

export default navigationBar
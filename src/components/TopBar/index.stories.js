import TopBar from "./index.vue";
import Logo from "@/components/Logo/index.vue";
import Icon from "@/components/Icon/index.vue";
import Notification from "./Notification/index.vue";
import Button from "@/components/Button/index.vue";

const Template = (_, { argTypes }) => ({
  components: { TopBar, Logo, Icon, Notification, Button },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl h-[630px]">
    <TopBar
      :terminals="terminals"
      @showNotifs="()=>{}"
    />
  </div>
  `,
});

const topBar = Template.bind({});

topBar.args = {
  terminals: [
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarin.express/zardu',
      name: 'زاردو',
      status: 'ACTIVE',
    },
    {
      domain: 'zarinp.al/xandar',
      name: 'زاندار',
      status: 'deactive',
    },
  ],
};

export default topBar;

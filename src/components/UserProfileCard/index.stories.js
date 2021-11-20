import UserProfileCard from "./index.vue";
import CheckMark from "./CheckMark/index.vue";
import TaskAction from "./TaskAction/index.vue";
import ZarinID from "./ZarinID/index.vue";
import UserLevel from "./UserLevel/index.vue";
import Label from "@/components/Label/index.vue";
export default {
  component: UserProfileCard,
  title: "Components/UserProfileCard",
};

const Template = (_, { argTypes }) => ({
  components: { UserProfileCard, CheckMark, TaskAction, ZarinID, UserLevel,Label },
  props: Object.keys(argTypes),
  template: `
  <div class="dark:bg-surface-dark p-sm rounded-md">
		<UserProfileCard :username="username" >
		<TaskAction disabled>
task
		</TaskAction>
		<ZarinID :level="level">
		ZP.123456
		</ZarinID>
		<div class="check">
			<CheckMark complete/>
			<CheckMark/>
			<CheckMark complete/>
			<CheckMark/>	
			<CheckMark complete/>
			<CheckMark/>
		</div>
<UserLevel title="عنوان سطح عضویت">

<Label type="outlined" size="medium">
حقوقی
</Label>
<Label type="positive" size="medium">
VIP
</Label>
<Label type="negative" size="medium">
توقیف شده
</Label>
</UserLevel>
		</UserProfileCard>
  </div>
  `,
});

export const Default = Template.bind({});

Default.argTypes = {
  level: {
    options: ["begginer", "blue", "silver", "gold"],
    control: { type: "radio" },
  },
};

Default.args = {
  level: "blue",
};

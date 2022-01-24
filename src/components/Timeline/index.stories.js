import Timeline from "./index.vue";

export default {
  component: Timeline,
  title: "Components/Timeline",
};

const Template = (_, { argTypes }) => ({
  components: { Timeline },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col rtl">
		<Timeline title="عنوان رویداد" subText="زیرنویس" date="۲۵ دی ٫۰۰:۱۲" icon="QuestionCircle" />
    <Timeline title="عنوان رویداد" subText="زیرنویس" date="۲۵ دی ٫۰۰:۱۲" icon="QuestionCircle" />
    <Timeline title="عنوان رویداد" subText="زیرنویس" date="۲۵ دی ٫۰۰:۱۲" labelText="labelText" icon="QuestionCircle"  />
		<Timeline title="عنوان رویداد" subText="زیرنویس" date="۲۵ دی ٫۰۰:۱۲" labelText="labelText" icon="QuestionCircle"  />
	</div>
  `,
});

export const Default = Template.bind({});

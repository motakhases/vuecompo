import Timeline from "./index.vue";

export default {
  component: Timeline,
  title: "Components/Timeline",
};

const Template = (_, { argTypes }) => ({
  components: { Timeline },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col rtl">
    <div class="w-[296px]">
      <Timeline title="عنوان رویداد" subText="زیرنویس" date="2022-01-15T15:05:25+03:30" icon="QuestionCircle" />
      <Timeline title="عنوان رویداد" subText="زیرنویس" date="2022-01-15T15:05:25+03:30" icon="DollarFill" />
      <Timeline title="عنوان رویداد" subText="زیرنویس" date="2022-01-15T15:05:25+03:30" labelText="labelText" icon="CheckmarkCircle"  />
		  <Timeline title="عنوان رویداد" subText="زیرنویس" date="2022-01-15T15:05:25+03:30" labelText="labelText" icon="QuestionCircle"  />
    </div>
	</div>
  `,
});

export const Default = Template.bind({});

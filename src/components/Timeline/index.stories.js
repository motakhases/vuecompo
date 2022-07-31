import Timeline from "./index.vue";

export default {
  component: Timeline,
  title: "Components/Timeline",
};

const Template = (_, { argTypes }) => ({
  components: { Timeline },
  template: `
	<div class="dark:bg-surface-dark p-lg rounded-md flex flex-col rtl">
    <div class="w-[296px] mb-md">  
      <Timeline title="عنوان رویداد" subText="" date="" icon="QuestionCircle" />
    </div>
    <div class="w-[296px]">
      <Timeline title="عنوان رویداد" subText="" date="" icon="QuestionCircle" />
      <Timeline title="عنوان رویداد" subText="" date="" icon="QuestionCircle" />
      <Timeline title="عنوان رویداد" subText="" date="" icon="QuestionCircle" />

      </div>
      <div class="w-[296px]">
      <Timeline :loadingNumber="5" loading  title="عنوان رویداد" subText="" date="" icon="QuestionCircle" />


      </div>
	</div>
  `,
});

export const Default = Template.bind({});

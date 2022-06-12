import Accordion from "./index.vue";
import AccordionItem from './_item/index.vue'

export default {
  component: Accordion,
  title: "Components/Accordion",
};

const Template = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div class="bg-surface dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
      <Accordion>
        <AccordionItem title="عنوان آیتم اول">
          متن توضیحات کامل اینجا نوشته می‌شود
          as
          <a href="dd">BB</a>
        </AccordionItem>
        <AccordionItem title="عنوان آیتم دوم">
          متن توضیحات کامل اینجا نوشته می‌شود
        </AccordionItem>
        <AccordionItem title="عنوان آیتم سوم">
          متن توضیحات کامل اینجا نوشته می‌شود
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

export const Default = Template.bind({});

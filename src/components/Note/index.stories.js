import Note from "./index.vue";
import Button from "../Button/index.vue";

export default {
  component: Note,
  title: "Components/Note",
};

const Template = (_, { argTypes }) => ({
  components: { Note, Button },
  props: Object.keys(argTypes),
  data() {
    return {
      showValue: false,
      noteValue: "",
    };
  },
  methods: {
    add() {
      console.log(this.noteValue);
    },
    showNote() {
      this.showValue = true;
    },
    cancel() {
      this.showValue = false;
      this.noteValue = "";
    },
    onDelete(calb) {
      calb()
    },
  },
  template: `
  <div class="bg-background dark:bg-background-dark p-lg rounded-md flex flex-col gap-md" dir="rtl">
  <Button @click.native="showNote" text="افزودن یادداشت" />
  یادداشت شما :{{noteValue}}

	  <Note v-model="noteValue" :show="showValue" :addNote="add" :cancelNote="cancel" @deleteNote="onDelete">
    </Note>
  </div>
  `,
});

export const Default = Template.bind({});

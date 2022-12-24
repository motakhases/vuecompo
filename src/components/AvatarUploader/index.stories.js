import AvatarUploader from "./index.vue";
export default {
  component: AvatarUploader,
  title: "Components/AvatarUploader",
};
const Template = (_, { argTypes }) => ({
  components: { AvatarUploader },
  data() {
    return {
      image: "",
    };
  },
  props: Object.keys(argTypes),
  methods: {
    uploadFile(e) {
      alert("error");
    },
    sendFileHandlers(file) {
      this.image = file.image;
    },
    deleteFileHandlers(file) {
      this.image = "";
    },
  },
  template: `
  <div class="dark:bg-surface-dark p-lg rounded-md flex flex-col gap-md rtl">
    <h1 class="font-bold dark:text-surface"> آواتار </h1>
	  <AvatarUploader 
    size="medium"
    acceptedFiles=".jpeg,.jpg,.png,.gif"
    :toast="uploadFile"
    :sendFileHandler="sendFileHandlers"
    :deleteFileHandler="deleteFileHandlers"
    url="https://next.zarinpal.com/api/v4/graphql"
     img="https://logoland.zarinpal.com/90aa9d7418a74d25d67955c72eb0f111/36x36.png"
    />

  </div>
  `,
});

export const Default = Template.bind({});

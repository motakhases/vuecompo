import AvatarUploader from "./index.vue";
export default {
  component: AvatarUploader,
  title: "Components/AvatarUploader",
};
const Template = (_, { argTypes }) => ({
  components: { AvatarUploader },
  props: Object.keys(argTypes),
  methods: {
    uploadFile(e) {
      console.log(e);
    },
    sendFileHandlers(file){
      console.log(file)
    },
    deleteFileHandlers(file){
      console.log(file)
    }
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
    />

  </div>
  `,
});

export const Default = Template.bind({});

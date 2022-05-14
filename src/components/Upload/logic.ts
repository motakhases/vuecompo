import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import vue2Dropzone from 'vue2-dropzone';
import Button from '@/components/Button/index.vue';
import DropZone from './_dropZone/index.vue';
import UploadedFile from './_uploadedFile/index.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

@Component({
  components: {
    DropZone, UploadedFile, vue2Dropzone, Button,
  },
})
export default class Upload extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: Array }) readonly restrictionList?: string[]

  @Prop({ type: String, default: 'smallSpace' }) readonly space!: string

  @Prop({ type: Boolean, default: true }) readonly indicator!: boolean

  @Prop({ type: String, default: 'large' }) readonly size!: string

  @Prop({ type: Function }) readonly upload!: () => any

  @Ref() readonly dropzoneRef!: any

  dropzoneOptions= {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 150,
    maxFilesize: 0.5,
    headers: { 'My-Awesome-Header': 'header value' },
    previewsContainer: false,
  }

uploadedList=[]

getFiles(file) {
  // console.log(file);
  // console.log(file.dataURL);
  // console.log(file.height);
  const attachment = {};
  attachment._id = file.upload.uuid;
  attachment.title = file.name;
  attachment.type = 'file';
  // attachment.content = 'File Upload by Select or Drop';
  attachment.image = file.dataURL;
  attachment.isLoading = true;
  attachment.status = null;
  attachment.size = file.size;
  // this.uploadedList = [...this.uploadedList, attachment];
}

uploadProgress(file, progress, bytesSent) {
  console.log('File Upload Progress', progress, file);
  // this.tempAttachments.map((attachment) => {
  //   if (attachment.title === file.name) {
  //     attachment.progress = `${Math.floor(progress)}`;
  //   }
  // });
  const attachment = {};
  attachment.image = file.dataURL;

  // this.uploadedList = [...this.uploadedList, attachment];
}

images(file, dataUrl) {
  console.log(file, dataUrl);
  const attachment = {};
  attachment.image = file.dataURL;

  this.uploadedList = [...this.uploadedList, attachment];
}

  // progress(file, progress, bytesSent) {
  //   console.log(file.dataURL);
  //   const attachment = {};
  //   attachment.image = file.dataURL;

//   this.uploadedList = [...this.uploadedList, attachment];
//   console.log(this.uploadedList);
// }
}

import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import vue2Dropzone from 'vue2-dropzone';
import Button from '@/components/Button/index.vue';
import { IUploadedFiles, IDropzoneFiles } from '@/types';
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

  @Prop({ type: String }) readonly url!: string

  @Prop({ type: Array }) readonly restrictionList?: string[]

  @Prop({ type: Number, default: 1 }) readonly maxFiles!: number

  @Prop({ type: Number, default: 0.5 }) readonly maxFileSize!: number

  @Prop({ type: Boolean, default: true }) readonly dropzone!: boolean

  @Ref() readonly dropzoneRef!: any

  dropzoneOptions= {
    url: '',
    maxFilesize: this.maxFileSize,
    headers: { 'My-Awesome-Header': 'header value' },
    previewsContainer: false,
  }

  uploadedList : IUploadedFiles[]=[]

  compeletList:IDropzoneFiles[]=[]

  successUploaded(file:IDropzoneFiles) {
    console.log(file);
    this.uploadedList.forEach((item, index) => {
      if (item.id === file.upload.uuid) {
        this.$set(this.uploadedList[index], 'status', file.status);
      }
    });
  }

  images(file:IDropzoneFiles) {
    const attachment:IUploadedFiles = {
      name: '',
      image: '',
      status: '',
      id: '',
      progress: '',
    };
    attachment.image = file.dataURL;
    attachment.status = file.status;
    attachment.name = file.name;
    attachment.id = file.upload.uuid;

    this.uploadedList = [...this.uploadedList, attachment];
    this.compeletList = [...this.compeletList, file];
  }

  fileUploadProgress(file: IDropzoneFiles, progress: number) {
    this.uploadedList.forEach((item, index) => {
      if (item.id === file.upload.uuid) {
        this.$set(this.uploadedList[index], 'progress', `${Math.floor(progress)}`);
      }
    });
  }

  removeFileHandler(file: IDropzoneFiles) {
    this.compeletList.forEach((item, i) => {
      if (item.upload.uuid === file.id) {
        this.compeletList.splice(i, 1);
        this.dropzoneRef.removeFile(file);
        this.uploadedList.splice(i, 1);
      }
    });
  }

  created(): void {
    this.dropzoneOptions.url = this.url;
    this.dropzoneOptions.maxFilesize = this.maxFileSize;
  }
}

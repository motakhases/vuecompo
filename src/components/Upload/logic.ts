import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import vue2Dropzone from 'vue2-dropzone';
import Button from '@/components/Button/index.vue';
import { IUploadedFiles, IDropzoneFiles } from '@/types';
import UploadedFile from './_uploadedFile/index.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import Loading from './Loading/index.vue';

@Component({
  components: {
    UploadedFile,
    vue2Dropzone,
    Button,
    Loading,
  },
})
export default class Upload extends Vue {
  @Prop({ type: String }) readonly title?: string;

  @Prop({ type: String }) readonly url!: string;

  @Prop({ type: String }) readonly acceptedFiles?: string;

  @Prop({ type: Array }) readonly restrictionList?: string[];

  @Prop({ type: Number, default: 1 }) readonly maxFiles!: number;

  @Prop({ type: Number, default: 0.5 }) readonly maxFileSize!: number;

  @Prop({ type: Boolean, default: true }) readonly dropzone!: boolean;

  @Prop({ type: Boolean, default: false }) readonly disabled?: boolean;

  @Prop({ type: Boolean, default: false }) readonly hasIcon?: boolean;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: Object }) readonly headers?: any;

  @Prop({ type: Function }) readonly sendFileHandler!: (file) => void;

  @Prop({ type: Function }) readonly deleteFileHandler!: (file) => void;

  @Prop({ type: Function, required: true }) readonly toast!: (
    text: string,
    type: string
  ) => void;

  @Ref() readonly dropzoneRef!: any;

  dropzoneOptions = {
    url: '',
    maxFilesize: 1,
    maxFiles: 1,
    acceptedFiles: '',
    headers: {},
    previewsContainer: false,
    dictFileTooBig: this.$i18n.t('warnings.upload.size'),
    dictInvalidFileType: this.$i18n.t('warnings.upload.format'),
    dictMaxFilesExceeded: this.$i18n.t('warnings.upload.files', {
      maxFiles: this.maxFiles,
    }),
    autoProcessQueue: false,
  };

  uploadedList: IUploadedFiles[] = [];

  compeletList: IDropzoneFiles[] = [];

  successUploaded(file: IDropzoneFiles) {
    this.uploadedList.forEach((item, index) => {
      if (item.id === file.upload.uuid) {
        this.$set(this.uploadedList[index], 'status', file.status);
      }
    });
  }

  fetchInitialData(file: IDropzoneFiles) {
    const attachment: IUploadedFiles = {
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
    if (file.accepted) {
      this.uploadedList = [...this.uploadedList, attachment];
      this.compeletList = [...this.compeletList, file];
    }
    this.sendFileHandler(this.uploadedList);
  }

  error(file: IDropzoneFiles, msg: string, xhr: IDropzoneFiles) {
    if (file.status !== 'canceled') {
      this.toast(msg, 'error');
    }
  }

  addFileManually(file: IDropzoneFiles) {
    console.log('🚀  file: logic.ts:104  Upload  addFileManually  file', file);
    this.dropzoneRef.manuallyAddFile(file, 'fileUrl');
  }

  fileUploadProgress(file: IDropzoneFiles, progress: number) {
    this.uploadedList.forEach((item, index) => {
      if (item.id === file.upload.uuid) {
        this.$set(
          this.uploadedList[index],
          'progress',
          `${Math.floor(progress)}`,
        );
      }
    });
  }

  removeFileHandler(file: IDropzoneFiles) {
    this.compeletList.forEach((item, i) => {
      if (item.upload.uuid === file.id) {
        this.compeletList.splice(i, 1);
        this.dropzoneRef.removeFile(item);
        this.uploadedList.splice(i, 1);
      }
    });
    this.deleteFileHandler(this.uploadedList);
  }

  created(): void {
    this.dropzoneOptions.url = this.url;
    this.dropzoneOptions.maxFilesize = this.maxFileSize;
    this.dropzoneOptions.maxFiles = this.maxFiles;
    this.dropzoneOptions.acceptedFiles = this.acceptedFiles
      ? this.acceptedFiles
      : '';
    this.dropzoneOptions.headers = this.headers;
    this.dropzoneOptions.dictFileTooBig = this.$i18n.t('warnings.upload.size');
    this.dropzoneOptions.dictInvalidFileType = this.$i18n.t(
      'warnings.upload.format',
    );
    this.dropzoneOptions.dictMaxFilesExceeded = this.$i18n.t(
      'warnings.upload.files',
      { maxFiles: this.maxFiles },
    );
  }
}

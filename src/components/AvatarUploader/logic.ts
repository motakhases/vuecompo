import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import Thumbnail from '@/components/Thumbnail/index.vue';
import Icon from '@/components/Icon/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { IUploadedFiles, IDropzoneFiles } from '@/types';

@Component({
  components: {
    Thumbnail,
    vue2Dropzone,
    Icon,
    Dropdown,
  },
})
export default class AvatarUploader extends Vue {
  @Prop({ type: String, default: 'medium' }) readonly size!: string;

  @Prop({ type: String }) readonly url!: string;

  @Prop({ type: String }) readonly acceptedFiles?: string;

  @Prop({ type: String }) readonly img!: string;

  @Prop({ type: Boolean, default: false }) readonly loading!: boolean;

  @Prop({ type: Number, default: 1 }) readonly maxFiles!: number;

  @Prop({ type: Number, default: 0.5 }) readonly maxFileSize!: number;

  @Prop({ type: Object }) readonly headers?: any;

  @Prop({ type: Function }) readonly sendFileHandler!: (file) => void;

  @Prop({ type: Function }) readonly deleteFileHandler!: (file) => void;

  @Prop({ type: Function, required: true }) readonly toast!: (
    text: string,
    type: string
  ) => void;

  @Ref() readonly dropzoneRef!: any;

  imgRef = 'image';

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

  uploadedItem: IUploadedFiles = {
    image: '',
    name: '',
    status: '',
    id: '',
    progress: '',
  };

  compeletList!: IUploadedFiles | undefined;

  dropList = [
    {
      icon: '',
      title: this.$i18n.t('terminal.change_image'),
      color: '',
      action: () => this.openFilesFolder(),
    },
    {
      icon: '',
      title: this.$i18n.t('common.delete'),
      color: 'text-danger',
      action: () => this.removeFileHandler(),
    },
  ];

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
      this.uploadedItem = attachment;
      this.compeletList = file;
    }
    this.sendFileHandler(this.uploadedItem);
  }

  openFilesFolder() {
    this.dropzoneRef.dropzone.hiddenFileInput.click();
  }

  error(file: IDropzoneFiles, msg: string) {
    if (file.status !== 'canceled') {
      this.toast(msg, 'error');
    }
  }

  added() {
    if (this.compeletList) {
      this.dropzoneRef.removeFile(this.compeletList);
    }
  }

  removeFileHandler() {
    // this.dropzoneRef.removeFile(this.compeletList);
    this.compeletList = undefined;
    this.imgRef = '';
    this.uploadedItem = {
      image: '',
      name: '',
      status: '',
      id: '',
      progress: '',
    };
    this.deleteFileHandler(this.uploadedItem);
  }

  created(): void {
    this.imgRef = this.img;
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

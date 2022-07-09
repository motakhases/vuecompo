import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import vue2Dropzone from 'vue2-dropzone';
import Button from '@/components/Button/index.vue';
import { IUploadedFiles, IDropzoneFiles } from '@/types';
import UploadedFile from './_uploadedFile/index.vue';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

@Component({
  components: {
    UploadedFile,
    vue2Dropzone,
    Button,
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

  @Prop({ type: Object }) readonly headers?: any;

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
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Cookie: 'v4-access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZTlhOGI4YTYyYmM1ZTc4ZTY0OGNiNjlmMjUyYjJlN2U2ZDdhM2I1NjlhNWU5NzRiZDVmYTBlMTljYmQ2YmI1ZWQ4ZmZkZDQxZDE0ZDE0MWMiLCJpYXQiOjE2NTY3NTA0MTAuMTQxNDI2LCJuYmYiOjE2NTY3NTA0MTAuMTQxNDMsImV4cCI6MTY1ODA0NjQxMC4xMTgwMjQsInN1YiI6IjExNTQyNzMiLCJzY29wZXMiOlsiKiJdfQ.ohxwmGEzkJVk5YxXizakS2gsZQkN4WvwYhosjgPn_E7-rTVP6p1JIJjAjOxj2sb6fS_tZGjs6Rwzs5g-xW-OTkuRdqi3wPXSqkWTYZLHTmUGmHfFbSXtsnz5lr7jIc9h34kpmdpMbaSq_p-f3PWFVnyMdpSVnTy0uo207Yk8MScj753PvL6yLGg5C_kjA8zF_kh8WOEDrN2gp1b29RmQRrygIB-9lkvHIugyh787RZG6Wc5-AVtCoR_w-htnfRAtyuFnyXZUHMy37mytRHTZsDj4YMxKZUjxZtujRYmq4xO-d8Zkhk4LTVCpx3zGTD8mQRlgvve9z-arDZjxPpZe6oAQIpU_to7LBn_LUzYNmZuBpR_g6YhDGwCXbFL_YvwyHNEGP_Pl_axcQ57UC6dck0AfKSQq9NzjVbnoDSqLsF0QOlhD8ievSnmRTMLSqNnBQLKjrH70GRzNdo7ITAmdUXSBWSGAJh2EIzOFgdPLfkl7jBbti8IPqt_ZSUG19HubFobNfpW_8HwzcMQknoKPfG_Y80P6jxdQ84KQLq8yldvKtmAHtiLZWYJXoSEEQXjnmhXPeifQifXPwF_FwCbE277ir50WAsMLJ7Kb79WWHAeatfpgxLrbjPyMRWKKfh3TRFZZhrx_kUFe9tUz9n-AzgL1yo3NXkz6oYH0kIIiQnI; i18n_redirected=fa; kt_aside_menu_wrapperst=0; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmRnY2FydGkuY29tL2FwaS92MS9yZWdpc3RlciIsImlhdCI6MTY1NjkzOTIwOCwiZXhwIjoxNjYwNTM5MjA4LCJuYmYiOjE2NTY5MzkyMDgsImp0aSI6ImFYS2tLR0R5OWFTSWZBSkUiLCJzdWIiOiIzMyIsInBydiI6IjgxZGNiMzA0NjI2NzZhNDMxYWU0M2YxZmYzNzk5ZmIxMmY5MDQ1OTIifQ.lqa80HezUGHoq2cpDEsymwhJ7zFwWt1oBgjZEP2rY9I; viewport=2xl',
    },
    // headers: { 'My-Awesome-Header': 'header value' },
    previewsContainer: false,
    dictFileTooBig: this.$i18n.t('warnings.upload.size'),
    dictInvalidFileType: this.$i18n.t('warnings.upload.format'),
    dictMaxFilesExceeded: this.$i18n.t('warnings.upload.files', {
      maxFiles: this.maxFiles,
    }),
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
  }

  error(file: IDropzoneFiles, msg: string, xhr: IDropzoneFiles) {
    if (file.status !== 'canceled') {
      this.toast(msg, 'error');
    }
  }

  addFileManually(file: IDropzoneFiles) {
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
  }

  created(): void {
    this.dropzoneOptions.url = this.url;
    this.dropzoneOptions.maxFilesize = this.maxFileSize;
    this.dropzoneOptions.maxFiles = this.maxFiles;
    this.dropzoneOptions.acceptedFiles = this.acceptedFiles
      ? this.acceptedFiles
      : '';
    // this.dropzoneOptions.headers = this.headers;
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

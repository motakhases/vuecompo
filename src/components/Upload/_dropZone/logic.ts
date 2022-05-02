import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';

@Component({ components: { Button } })
export default class DropZone extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string;

  @Prop({ type: String, default: 'bottomLeft' }) readonly position!: string;

  @Prop({ type: String, default: 'smallSpace' }) readonly space!: string;

  @Prop({ type: Boolean, default: true }) readonly indicator!: boolean;

  @Prop({ type: String, default: 'large' }) readonly size!: string;

  @Ref() readonly files!: any;

  selectedFiles: undefined

  onInputChange(e) {
    this.addFiles(e.target.files);
    e.target.value = null;
  }

  UploadableFile(file) {
    const obj = {
      file,
      id: `${file.name}-${file.size}-${file.lastModified}-${file.type}`,
      url: URL.createObjectURL(file),
      status: null,
    };
    return obj;
  }

  fileExists(otherId) {
    console.log(otherId, 'otherId');

    return this.files.value;
  }

  addFiles(newFiles) {
    const newUploadableFiles = [...newFiles]
      .map((file) => this.UploadableFile(file))
      .filter((file) => !this.fileExists(file.id));
    this.files.value = this.files.value.concat(newUploadableFiles);
    console.log(newUploadableFiles);
  }
}

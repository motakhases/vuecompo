import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';

@Component({ components: { Button } })
export default class DropZone extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string;

  @Prop({ type: String, default: 'large' }) readonly size!: string;

  @Prop({ type: Function }) readonly upload!: () => any

  @Ref() readonly files!: any;

  selectedFiles: undefined

  // onInputChange(e) {
  //   this.addFiles(e.target.files);
  //   e.target.value = null;
  // }

  // UploadableFile(file) {
  //   const obj = {
  //     file,
  //     id: `${file.name}-${file.size}-${file.lastModified}-${file.type}`,
  //     url: URL.createObjectURL(file),
  //     status: null,
  //   };
  //   return obj;
  // }

  // fileExists(otherId) {
  //   console.log(otherId, 'otherId');

  //   return this.files.value;
  // }

  // addFiles(newFiles) {
  //   const newUploadableFiles = [...newFiles]
  //     .map((file) => this.UploadableFile(file))
  //     .filter((file) => !this.fileExists(file.id));
  //   this.files.value = this.files.value.concat(newUploadableFiles);
  //   console.log(newUploadableFiles);
  // }

  dragover(event:any) {
    event.preventDefault();
    // Add some visual fluff to show the user can drop its files
    if (!event.currentTarget.classList.contains('active')) {
      // event.currentTarget.classList.remove('bg-gray-100');
      event.currentTarget.classList.add('active');
    }
  }

  dragleave(event:any) {
    // Clean up
    // event.currentTarget.classList.add('bg-gray-100');
    event.currentTarget.classList.remove('active');
  }

  drop(event:any) {
    event.preventDefault();
    this.files = event.dataTransfer.files;
    // this.onChange(); // Trigger the onChange event manually
    // Clean up
    event.currentTarget.classList.remove('active');
  }

  chooseImage() {
    this.files.click();
  }
}

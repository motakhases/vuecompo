import { Component, Prop, Vue } from 'vue-property-decorator';
import DropZone from './_dropZone/index.vue';
import UploadedFile from './_uploadedFile/index.vue';

@Component({
  components: { DropZone, UploadedFile },
})
export default class Upload extends Vue {
  @Prop({ type: String }) readonly title?: string

  @Prop({ type: Array }) readonly restrictionList?: string[]

  @Prop({ type: String, default: 'smallSpace' }) readonly space!: string

  @Prop({ type: Boolean, default: true }) readonly indicator!: boolean

  @Prop({ type: String, default: 'large' }) readonly size!: string

  @Prop({ type: Function }) readonly upload!: () => any

  @Prop({ type: Array }) readonly uploadedList?: []
}

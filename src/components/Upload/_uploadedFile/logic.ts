import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import ProgressBar from '@/components/ProgressBar/index.vue';

@Component({ components: { Button, Icon, ProgressBar } })
export default class UploadedFile extends Vue {
  @Prop({ type: Array }) readonly uploadedList?: []

  @Prop({ type: Boolean, default: false }) readonly hasIcon!: boolean

  @Prop({ type: Function }) readonly removeFileHandler!: () => any
}

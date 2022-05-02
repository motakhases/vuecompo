import {
  Component, Prop, Vue, Ref,
} from 'vue-property-decorator';
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';

@Component({ components: { Button, Icon } })
export default class UploadedFile extends Vue {
  @Prop({ type: String }) readonly image?: string;

  @Prop({ type: String, default: 'bottomLeft' }) readonly position!: string;

  @Prop({ type: String, default: 'loading' }) readonly status!: string;
}

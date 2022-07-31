import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Label from '@/components/Label/index.vue';
import Button from '@/components/Button/index.vue';
import Loading from './Loading/index.vue';

@Component({
  components: {
    Icon, Label, Button, Loading,
  },
})
export default class Balance extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string

  @Prop({ type: String, required: true }) readonly amount!: string

  @Prop({ type: Function }) readonly reloadHandler!: () => void


  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  @Prop({ type: String }) readonly href?: string
}

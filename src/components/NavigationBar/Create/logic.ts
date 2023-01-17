import { Vue, Prop, Component } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Create extends Vue {
  @Prop({ type: Boolean, default: false }) active!: boolean;

  @Prop({ type: String }) link!: string;
}

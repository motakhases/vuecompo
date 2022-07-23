import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Skeleton from '@/components/Skeleton/index.vue';

@Component({
  components: { Icon, Skeleton },
})
export default class Card extends Vue {
  @Prop({ type: String }) readonly title!: string;

  @Prop({ type: Boolean, default: false }) readonly loading?: boolean;

  hasContent = false

  toggleSlot() {
    if (this.$slots.default) {
      this.hasContent = true;
    } else {
      this.hasContent = false;
    }
  }

  mounted() {
    this.toggleSlot();
  }

  beforeUpdate() {
    this.toggleSlot();
  }

  created() {
    this.toggleSlot();
  }
}

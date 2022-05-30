import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Card extends Vue {
  @Prop({ type: String }) readonly title!: string;

  hasContent = false

  mounted() {
    if (this.$slots.default) {
      this.hasContent = true;
    } else {
      this.hasContent = false;
    }
  }
}

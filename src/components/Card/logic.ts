import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Card extends Vue {
  @Prop({ type: String }) readonly title!: string;
}

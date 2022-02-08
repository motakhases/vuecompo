import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class Avatar extends Vue {
  @Prop({ type: String }) readonly title!: string;
}

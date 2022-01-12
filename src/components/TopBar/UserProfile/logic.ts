import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';

@Component({
  components: { Icon },
})
export default class UserProfile extends Vue {
  @Prop({ type: String, required: true }) readonly username!: string
}

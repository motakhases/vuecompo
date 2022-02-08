import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: { Icon, Button },
})
export default class UserProfile extends Vue {
  @Prop({ type: Boolean, required: false }) showProfileBox!: boolean
}

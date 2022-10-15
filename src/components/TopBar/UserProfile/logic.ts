import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Avatar from '@/components/Avatar/index.vue';
import Dropdown from '@/components/Dropdown/index.vue';
import { IDropdownOptions } from '@/types';
import PremiumBadge from '@/components/PremiumBadge/index.vue';

@Component({
  components: {
    Icon, Avatar, Dropdown, PremiumBadge,
  },
})
export default class UserProfile extends Vue {
  @Prop({ type: Array }) readonly profileList!: IDropdownOptions[];

  @Prop({ type: String }) readonly username?: string

  @Prop({ type: String }) readonly userPhone?: string

  @Prop({ type: Boolean }) readonly userPremium?: boolean
}

import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Logo from '@/components/Logo/index.vue';

@Component({
  components: { Icon, Logo },
})
export default class TopBar extends Vue {
}

import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Modal from '@/components/Modal/index.vue';
import Button from '@/components/Button/index.vue';

@Component({
  components: {
    Icon,
    Modal,
    Button,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean

  @Prop({ type: Function }) readonly toggle!: () => boolean
}

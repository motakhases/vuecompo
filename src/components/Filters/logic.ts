import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Modal from '@/components/Modal/index.vue';
import Button from '@/components/Button/index.vue';
import Radio from '@/components/Radio/index.vue';
import FilterAccordion from './FilterAccordion/index.vue';
import FilterDate from './FilterDate/index.vue';
import FilterAmount from './FilterAmount/index.vue';

@Component({
  components: {
    Icon,
    Modal,
    Button,
    FilterAccordion,
    FilterDate,
    FilterAmount,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean

  @Prop({ type: Function }) readonly toggle!: () => boolean

  @Prop({ type: Function }) readonly clearQuery!: () => boolean

  @Prop({ type: Function }) readonly filter!: () => boolean

  unmounted() {
    console.log('unmount');
  }
}

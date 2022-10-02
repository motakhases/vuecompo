import { Component, Prop, Vue } from 'vue-property-decorator';
import Stepper from '@/components/Stepper/index.vue';

@Component({ components: { Stepper } })
export default class StepperGroup extends Vue {
  @Prop({ type: Array }) readonly steppers?: number
}

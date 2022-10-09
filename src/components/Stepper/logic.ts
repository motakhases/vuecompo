import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Stepper extends Vue {
  @Prop({ type: Number }) readonly subSteps?: number

  @Prop({ type: Number }) readonly completed?: number
}

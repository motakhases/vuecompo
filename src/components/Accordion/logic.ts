import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Accordion extends Vue {
  @Prop({ type: Boolean }) readonly rightIconStyle?: boolean
}

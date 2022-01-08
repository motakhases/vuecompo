import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SegmentBtn extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: Boolean, default: false }) readonly active!: boolean;
}

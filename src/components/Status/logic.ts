import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Status extends Vue {
  @Prop({ type: String }) readonly text!: string

  @Prop({ type: String, default: 'neutral' }) readonly type!: string

  @Prop({ type: Boolean, default: false }) readonly indicator!: boolean
}

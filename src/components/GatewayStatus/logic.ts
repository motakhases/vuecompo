import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GatewayStatus extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string;

  @Prop({ type: String, default: 'active' }) readonly type!: string;
}

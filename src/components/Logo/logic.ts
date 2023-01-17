import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
  @Prop({ type: String, default: 'medium' }) readonly size!: string;

  @Prop({ type: String, default: 'zarinpal' }) readonly name!: string;

  @Prop({ type: String, default: 'logo' }) readonly type!: string;

  @Prop({ type: String, default: 'fa' }) readonly language!: string;
}

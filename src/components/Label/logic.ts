import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Label extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string

  @Prop({ type: String, default: 'small' }) readonly size!: string

  @Prop({ type: String, default: 'positive' }) readonly type!: string
}


import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Label extends Vue {
  @Prop({ type: [String, Number], required: true }) readonly text!:
    | string
    | number;

  @Prop({ type: String, default: "small" }) readonly size!: string;

  @Prop({ type: String, default: "positive" }) readonly type!: string;

  @Prop({ type: String, default: "" }) readonly width?: string;
}

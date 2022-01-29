import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logic extends Vue {
  @Prop({ type: String, default: 'bottomLeft', required: true }) readonly position!: string
}

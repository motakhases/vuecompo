import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PSPLogos extends Vue {
  @Prop({ type: String, required: true }) readonly logo!: string
}

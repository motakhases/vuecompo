import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Bg extends Vue {
  @Prop({ type: String }) readonly bgImage!: string;
}

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class QuickFilterButton extends Vue {
  @Prop({ type: String, required: true }) readonly text!: string;

  @Prop({ type: String, required: true }) readonly value!: string;
}

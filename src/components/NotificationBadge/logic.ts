import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NotificationBadge extends Vue {
  @Prop({ type: String }) readonly text?: string;
}

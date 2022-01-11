import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NoNotif extends Vue {
  @Prop({ type: String, default: 'اعلانی' }) readonly notifType!: string
}


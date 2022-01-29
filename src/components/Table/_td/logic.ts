import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Status from '@/components/Status/index.vue';

@Component({
  components: {
    Status,
  },
})
export default class Logic extends Vue {
  @Prop({ type: Object }) readonly data?: any
}

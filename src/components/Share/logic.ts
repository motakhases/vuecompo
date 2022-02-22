import { Component, Prop, Vue } from 'vue-property-decorator';

// Components
import Social from './_social/index.vue';
import Tabs from '@/components/Tabs/index.vue';
import Tab from '@/components/Tabs/Tab/index.vue';
import Button from '@/components/Button/index.vue';
import TextField from '@/components/TextField/index.vue';

@Component({
  components: {
    Tab,
    Tabs,
    Social,
    Button,
    TextField,
  },
})
export default class Share extends Vue {
  @Prop({ type: String }) url?: string;

  @Prop({ type: String }) html?: string;

  @Prop({ type: String }) qrcode?: string;
}

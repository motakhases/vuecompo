import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import Modal from '@/components/Modal/index.vue';
import RadioCard from '@/components/RadioCard/index.vue';
import Toggle from '@/components/Toggle/index.vue';

@Component({
  components: { Modal, RadioCard, Toggle },
})

export default class ThemeSwitcher extends Vue {
  @Prop({ type: Function }) readonly toggleModal!: () => boolean;

  @Prop({ type: Boolean, default: false }) readonly open!: boolean;

  @Prop({ type: String }) readonly icon!: string;

  systemTheme = false;

  mode = 'light';

  @Watch('mode')
  toggleBodyClass() {
    const el = document.body;
    if (this.mode === 'light') {
      el.classList.remove('dark');
    } else {
      el.classList.add('dark');
    }
    localStorage.setItem('theme', this.mode);
  }

  @Watch('systemTheme')
  toggleSystemTheme() {
    const el = document.body;
    let theme: string;
    if (this.systemTheme) {
      if (
        window.matchMedia
        && window.matchMedia('(prefers-color-scheme:dark)').matches
      ) {
        el.classList.add('dark');
        theme = 'dark';
      } else {
        el.classList.remove('dark');
        theme = 'light';
      }
      localStorage.setItem('theme', theme);
    } else {
      this.toggleBodyClass();
    }
  }

  mounted() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.mode = theme;
    }
  }
}

import {
  Component, Prop, Vue, Watch, Ref,
} from 'vue-property-decorator';
import Icon from '@/components/Icon/index.vue';
import Button from '@/components/Button/index.vue';
import { IDropdownOptions } from '@/types';

@Component({
  components: { Icon, Button },
})
export default class Dropdown extends Vue {
  @Prop({ type: Array }) readonly list!: IDropdownOptions[];

  @Prop({ type: String }) readonly width?: string;

  @Prop({ type: String }) readonly height?: string;

  @Ref('button') readonly buttonRef!: HTMLElement

  @Ref('menu') readonly menuRef!: HTMLElement

  toggle = false;

  menuTop = '';

  style = {
    top: '',
    left: '',
  };

  windowWidth= window.innerWidth

  updateStyle(): void {
    if (this.buttonRef) {
      const {
        height, top, left, width,
      } = this.buttonRef?.children[0]?.getBoundingClientRect();
      const menuWidth = this.menuRef?.children[0]?.getBoundingClientRect().width;

      this.$set(this.style, 'top', `${top + height + 2}px`);
      if (menuWidth > left) {
        this.$set(this.style, 'left', `${left}px`);
      } else {
        this.$set(this.style, 'left', `${left - menuWidth + width}px`);
      }
    }
  }

  outsideClick(e: any): void {
    if (!this.buttonRef?.children[0].contains(e.target)) {
      this.$nextTick(() => {
        this.toggle = false;
      });
    }
  }

  onButtonClick(): void{
    this.toggle = !this.toggle;
  }

  @Watch('toggle')
  watchToggle(): void {
    this.$nextTick(() => {
      if (this.toggle) {
        this.updateStyle();
      }
    });
    if (this.toggle) {
      document.body.appendChild(this.menuRef);
    }
  }

  onResize():void {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      if (this.toggle) {
        this.updateStyle();
      }
    });
  }

  mounted(): void {
    document.addEventListener('scroll', this.updateStyle);
    document.documentElement.addEventListener(
      'click',
      this.outsideClick,
      false,
    );
    this.buttonRef.children[0].addEventListener('click', this.onButtonClick, false);
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy():void {
    window.removeEventListener('resize', this.onResize);
  }
}

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

  @Prop({ type: String }) readonly maxHeight?: string;

  @Prop({ type: Boolean, default: true }) readonly autoClose?: boolean;

  @Prop({ type: Boolean, default: false }) readonly isClose?: boolean;

  @Prop({ type: [String, Object, Array, Number] }) readonly customPayload?: any;

  @Ref('button') readonly buttonRef!: HTMLElement;

  @Ref('menu') readonly menuRef!: any;

  toggle = false;

  menuTop = '';

  style = {
    top: '',
    left: '',
  };

  windowWidth = window.innerWidth;

  finalColor(color: string): string {
    return `!text-${color}`;
  }

  updateStyle(): void {
    // get the position of button and set it to menu

    if (this.buttonRef) {
      const {
        height, top, left, width,
      } = this.buttonRef?.children[0]?.getBoundingClientRect();
      const menuWidth = this.menuRef?.children[0]?.getBoundingClientRect().width;

      this.$set(this.style, 'top', `${top + height + 2}px`);

      // if left space is smaller than menu width so open menue on right
      if (menuWidth > left) {
        this.$set(this.style, 'left', `${left}px`);
      } else {
        this.$set(this.style, 'left', `${left - menuWidth + width}px`);
      }
    }
  }

  outsideClick(e: Event): void {
    const menu = document.getElementById('select-dropdown');
    const event = e.target as HTMLInputElement;
    // close menu
    if (this.autoClose) {
      if (!this.buttonRef?.children[0].contains(event)) {
        this.$nextTick(() => {
          this.toggle = false;
        });
      }
    } else if (!menu?.contains(event) && !this.buttonRef?.children[0].contains(event)) {
      if (!this.menuRef?.children[0]?.contains(event)) {
        this.$nextTick(() => {
          this.toggle = false;
        });
      }
    }
  }

  onButtonClick(): void {
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
      // append menu to body
      document.body.appendChild(this.menuRef);
    }
  }

  onResize(): void {
    this.$nextTick(() => {
      // update position of menue when window is resizing
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
      true,
    );

    this.buttonRef.children[0].addEventListener(
      'click',
      this.onButtonClick,
      true,
    );
    window.addEventListener('resize', this.onResize);
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if (this.menuRef) {
      this.menuRef.parentNode?.removeChild(this.menuRef);
    }
    this.toggle = false;
  }

  @Watch('isClose')
  updateToggle() {
    if (this.isClose) {
      this.$emit('close');
      if (this.menuRef) {
        this.menuRef.parentNode?.removeChild(this.menuRef);
      }
      this.toggle = false;
    }
  }
}

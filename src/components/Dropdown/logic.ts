import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import Icon from '@/components/Icon/index.vue';

const ARROW_DOWN_KEYCODE = 40;
const ARROW_UP_KEYCODE = 38;
const ENTER_KEYCODE = 13;
const keyList = [9, 13, 16, 17, 18, 20, 32, 37, 38, 39, 40, 46];

export default Vue.extend({
  name: 'Dropdown',
  components: { ValidationProvider, Icon },
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    helperHint: {
      type: String,
      default: '',
    },
    successMessage: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabledOptionId: {
      type: Number,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() :{
    activeLabel: boolean;
    showList: boolean;
    activeOptionIndex: number;
    filteredOptions: Array<any>;
    optionRef: any;
    dropdownRef:any
    } {
    return {
      activeLabel: !!this.value.length,
      showList: false,
      activeOptionIndex: -1,
      filteredOptions: this.options,
      optionRef: '',
      dropdownRef: '',
    };
  },
  computed: {
    model: {
      get():string {
        return this.value;
      },
      set(value:string[]):void {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    formattedValue() {
      this.activeLabel = !!this.value.length;
    },
  },
  mounted() {
    document.documentElement.addEventListener('click', this.outsideClick, false);
    this.optionRef = this.$refs.optionRef;
    this.dropdownRef = this.$refs.dropdownRef;
  },
  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.outsideClick, false);
  },
  methods: {
    onFocusIn(event:any) {
      // for adding active label style
      this.activeLabel = true;
      // open dropdown
      this.showOptions();
      const isEnterKey = event.keyCode === ENTER_KEYCODE;
      if (isEnterKey) {
        this.showOptions();
      }
    },
    onFocusOut() {
      // if input is empty put label inside input
      if (!this.value) {
        this.activeLabel = false;
      }
      // to remove active class
      this.activeOptionIndex = -1;
    },
    selectOption(value: string) {
      // update the value of input with selected option
      this.$emit('input', value);

      // close the dropdown
      this.hideOptions();

      // for adding active label style
      this.activeLabel = true;
    },
    showOptions() {
      // open dropdown
      this.showList = true;
    },
    hideOptions() {
      // close dropdown
      this.$nextTick(() => {
        this.showList = false;
      });
    },
    outsideClick(e:any) {
      // close dropdown on clicking outside
      if (!this.$el.contains(e.target)) {
        this.hideOptions();
      }
    },
    onKeyUp(e:any) {
      // if any key code in the list is pressed do nothing
      if (keyList.includes(e.keyCode)) {
        return;
      }
      // otherwise filter the list based on value that user is typing
      this.filteredOptions = this.options.filter(
        (option:any) => option.name.toLowerCase().includes(this.value.toLowerCase()),
      );
    },
    onKeyDown(e:any) {
      const isArrowDownKey = e.keyCode === ARROW_DOWN_KEYCODE;
      const isArrowUpKey = e.keyCode === ARROW_UP_KEYCODE;
      const isEnterKey = e.keyCode === ENTER_KEYCODE;

      // if dropdown is open
      if (this.showList) {
        // if arrow up or down key is pressed
        if (isArrowDownKey || isArrowUpKey) {
          for (let i = 0; i < this.filteredOptions.length; i += 1) {
            // find the active option based on class
            const item = this.dropdownRef.children[i];
            const activeOption = (item).classList.contains('active');

            // if there is active option then remove the active class and
            // update the index of active option in order to move active class
            if (activeOption) {
              this.activeOptionIndex = i;
              (item).classList.remove('active');
            }
          }
        }
        // if arrow down key is pressed
        if (isArrowDownKey) {
          // if there's no active index so the first index is active
          if (this.activeOptionIndex === -1) {
            this.activeOptionIndex = 0;

            // active next option till the end of list
          } else if (this.activeOptionIndex < this.filteredOptions.length - 1) {
            this.activeOptionIndex += 1;

            // if we achieved to the end of list so go to the first option
          } else if (this.activeOptionIndex >= this.filteredOptions.length - 1) {
            this.activeOptionIndex = 0;
          }
          // if arrow up key is pressed
        } else if (isArrowUpKey) {
          // if there's no active index so the first index is active
          if (this.activeOptionIndex === -1) {
            this.activeOptionIndex = 0;

            // if we achieved to the first of list so go to the last option
          } else if (this.activeOptionIndex === 0) {
            this.activeOptionIndex = this.filteredOptions.length - 1;

            // active previous option till the start of list
          } else if (this.activeOptionIndex <= this.filteredOptions.length - 1) {
            this.activeOptionIndex -= 1;
          }

          // if enter key is pressed
        } else if (isEnterKey) {
          // if there's active option and we have filter list
          if (this.activeOptionIndex >= 0 && this.filteredOptions) {
            // take the name of active option
            const newValue = this.filteredOptions[this.activeOptionIndex]
              ? this.filteredOptions[this.activeOptionIndex].name : '';

            // update the value of input
            this.$emit('input', newValue);

            // close the dropdown
            this.hideOptions();

            // disable the active option
            this.activeOptionIndex = -1;
          }
        }
        // if dropdown is closed and enter key is pressed
      } else if (isEnterKey) {
        // open the dropdown
        this.showOptions();

        // show the compelete list
        this.filteredOptions = this.options;
      }
    },
    activateOption(e:any) {
      // if any option has active class remove it
      [].forEach.call(this.$refs.optionRef, (el:any) => {
        el.classList.remove('active');
      });
      // add active class when a mouse enters
      e.target.classList.add('active');
    },
    deactivateOption(e:any) {
      // remove active class when a mouse leaves
      e.target.classList.remove('active');
    },
  },
});

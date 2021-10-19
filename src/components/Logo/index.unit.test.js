import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Logo from './index.vue';

describe('Logo', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Logo);

    expect(wrapper.element.tagName).toBe('a');
    expect(wrapper.attributes('href')).toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Logo, {
      slots: {
        default: '<span>link</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('link');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('renders icon on the left when leftIcon has been set', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        leftIcon: 'Icon-Angle-Large-Left',
      },
    });
    const icon = wrapper.find('.Icon-Angle-Large-Left');

    expect(icon.exists()).toBe(true);
  });

  it('renders loading and doesnt show slot when loading is true', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        loading: true,
      },
    });
    const loading = wrapper.find('.zpl-Logo-loading');

    expect(loading.exists()).toBe(true);
    expect(wrapper.text()).toBe('');
  });
});

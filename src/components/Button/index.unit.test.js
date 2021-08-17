import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Button from './index.vue';

describe('Button', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.attributes('disabled')).not.toBeDefined();
  });

  it('renders default slot content', async () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '<span>foobar</span>',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('foobar');
  });

  it('has attribute disabled when disabled set', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });
});

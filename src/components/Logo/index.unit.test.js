import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Logo from './index.vue';

describe('Logo', () => {
  enableAutoDestroy(afterEach);

  it('has default structure', async () => {
    const wrapper = shallowMount(Logo);

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.attributes('language')).toBeDefined();
  });

  it('has medium class when size is set to medium', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        size: 'medium',
      },
    });
    expect(wrapper.classes()).toContain('medium');
  });
});

import { enableAutoDestroy, shallowMount } from '@vue/test-utils';
import Dropdown from './index.vue';

describe('Dropdown', () => {
  enableAutoDestroy(afterEach);

  it('updates the model on input', async () => {
    const wrapper = shallowMount(Dropdown);
    const input = wrapper.find('input');

    await input.setValue('newValue');
    expect(input.element.value).toBe('newValue');
  });

  it(`opens dropdown on focus in input and if enter key is 
      pressed opens it again`, async () => {
    const wrapper = shallowMount(Dropdown);
    const input = wrapper.find('input');
    const list = wrapper.find('.zpl-dropdown-list');

    await input.trigger('focusin');
    await wrapper.trigger('keydown.enter');

    expect(wrapper.vm.activeLabel).toBe(true);
    expect(wrapper.vm.focused).toBe(true);
    expect(list.classes()).toContain('showList');
  });

  it(`sets activeOptionIndex to default value and activeLabel
      to false on focus out of input`, async () => {
    const wrapper = shallowMount(Dropdown);
    const input = wrapper.find('input');

    await input.trigger('focusout');

    expect(wrapper.vm.activeOptionIndex).toBe(-1);
    expect(wrapper.vm.activeLabel).toBe(false);
  });

  it(`updates input value when clicking an option in
      dropdown and closes dropdown`, async () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        options: [
          { id: 1, name: 'option 1' },
          { id: 2, name: 'option 2' },
        ],
      },
    });
    const option = wrapper.findAll('li');
    const input = wrapper.find('input');

    await option.at(0).trigger('click');
    await input.setValue('option 1');

    expect(input.element.value).toBe(option.at(0).text());
    expect(wrapper.vm.activeLabel).toBe(true);
    expect(wrapper.vm.focused).toBe(false);
  });

  it('adds active class to next option when key down is pressed', async () => {
    const wrapper = shallowMount(Dropdown, {
      propsData: {
        options: [
          { id: 1, name: 'option 1' },
          { id: 2, name: 'option 2' },
        ],
      },
    });
    const input = wrapper.find('input');
    const options = wrapper.findAll('li');

    await input.trigger('keydown.down');
    await input.setValue('option');
    console.log(wrapper.findAll('li').at(0).classes());
    console.log(options.filter((i) => i));
    expect(options.filter((i) => i)).toBe(true);
  });
});

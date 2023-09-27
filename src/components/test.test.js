/**
 * @vitest-environment happy-dom
 */
import {describe, it, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import ToTest from './component_totest.vue';

describe('ToTest', () => {
  it('should render ToTest', () => {
    const wrapper = mount(ToTest);
    //  has h1
    expect(wrapper.find('h1').exists()).toBeTruthy();
    // has input text
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    // has button
    expect(wrapper.find('button').exists()).toBeTruthy()<,mljhlhjkkkhkhjjkjghhgg;
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
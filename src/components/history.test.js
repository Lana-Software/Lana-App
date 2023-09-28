/**
 * @vitest-environment happy-dom
 */
import {describe, it, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import Navbar from './component_navbar.vue';

describe('Navbar', () => {
  it('should render navbar', () => {
    const wrapper = mount(Navbar);
    //  has h1
    expect(wrapper.find('h1').exists()).toBeTruthy();
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
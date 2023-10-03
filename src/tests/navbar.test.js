/**
 * @vitest-environment happy-dom
 */
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "../components/component_navbar.vue";
// import { getValue } from "webdriverio/build/commands/element";

describe('Rendering', () => {
    test('Renders navbar container', () =>{
        const wrapper = mount(NavBar);
        // Main Container exists
        expect(wrapper.find('.content').exists()).toBeTruthy();
    });

    test('Renders title', () =>{
        const wrapper = mount(NavBar);
        // Title Container exists
        expect(wrapper.find('.title').exists()).toBeTruthy();
        // Title text exists
        expect(wrapper.find('.lana-title').text()).toStrictEqual("Lana");
    });

    test('Renders buttons', () =>{
        const wrapper = mount(NavBar);
        // Buttons exist
        expect(wrapper.find('.buttons').exists()).toBeTruthy();
        expect(wrapper.find('.buttons').exists()).toBeTruthy();
        expect(wrapper.find('.buttons').exists()).toBeTruthy();
    });
});

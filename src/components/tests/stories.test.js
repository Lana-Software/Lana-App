/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Story from "../../views/view_story.vue";
// import Navbar from './component_navbar.vue';
// import component_navbarVue from "../component_navbar.vue";

describe('stories view', () => {
    it('renders stories container', () =>{
        const wrapper = mount(Story);
        // Main Container exists
        expect(wrapper.find('.story-container').exists()).toBeTruthy();
    });

    it('renders stories image', () =>{
        const wrapper = mount(Story);
        // Story image container exists
        expect(wrapper.find('.image').exists()).toBeTruthy();
        // Storie image is rendered
        expect(wrapper.find('img').exists()).toBeTruthy();

    });
});

test('suma', ()=> {
    expect(2+2).toEqual(4)
})


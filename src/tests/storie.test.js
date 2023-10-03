/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Story from "../views/view_story.vue";

describe('Rendering', () => {
    it('Renders storie container', () =>{
        const wrapper = mount(Story);
        // Main Container exists
        expect(wrapper.find('.story-container').exists()).toBeTruthy();
    });

    it('Renders storie image', () =>{
        const wrapper = mount(Story);
        // Story image container exists
        expect(wrapper.find('.image').exists()).toBeTruthy();
        // Storie image is rendered
        expect(wrapper.find('img').exists()).toBeTruthy();

    });
});

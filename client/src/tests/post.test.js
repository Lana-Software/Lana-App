/**
 * @vitest-environment happy-dom
 */
import { describe, test, expect} from "vitest";
import { mount } from "@vue/test-utils";
import Post from "../views/view_post.vue";

describe('Rendering', () => {
    test('Renders post container', () =>{
        const wrapper = mount(Post);
        // Main Container exists
        expect(wrapper.find('.post-container').exists()).toBeTruthy();
    });

    test('Renders post image', () =>{
        const wrapper = mount(Post);
        // Post image container exists
        expect(wrapper.find('.image').exists()).toBeTruthy();
        // Post image is rendered
        expect(wrapper.find('img').exists()).toBeTruthy();

    });
});

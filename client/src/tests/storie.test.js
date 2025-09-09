import { mount } from "@vue/test-utils";
/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from "vitest";
import Story from "../views/view_story.vue";

describe("Rendering", () => {
	it("Renders storie container", () => {
		const wrapper = mount(Story);
		// Main Container exists
		expect(wrapper.find(".story-container").exists()).toBeTruthy();
	});

	it("Renders storie image", () => {
		const wrapper = mount(Story);
		// Story image container exists
		expect(wrapper.find(".image").exists()).toBeTruthy();
		// Storie image is rendered
		expect(wrapper.find("img").exists()).toBeTruthy();
	});
});

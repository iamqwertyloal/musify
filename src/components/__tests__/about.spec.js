import AboutView from "@/views/AboutView.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "vitest";

describe("About.vue", () => {
  test("renders inner text", () => {
    const wrapper = shallowMount(AboutView);

    expect(wrapper.text()).toContain("about");
  });
});

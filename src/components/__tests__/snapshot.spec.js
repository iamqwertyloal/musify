import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { describe, expect } from "vitest";

describe("Snapshots SongItem.vue", () => {
  test("renders correctly", () => {
    const song = {
      docID: "123",
      modified_name: "test",
      display_name: "test",
      comment_count: 3,
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});

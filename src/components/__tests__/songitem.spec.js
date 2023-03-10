import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("renders song.display_name", () => {
    const song = {
      display_name: "test",
    };

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const songAuthor = wrapper.find(".text-gray-500");

    expect(songAuthor.text()).toBe(song.display_name);
  });

  test("renders song.docID in class attribute", () => {
    const song = {
      docID: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.classes()).toContain(`song-id-${song.docID}`);
  });
});

<template>
  <app-header></app-header>

  <router-view></router-view>

  <app-player></app-player>

  <app-auth></app-auth>
</template>

<script>
import AppAuth from "./components/AppAuth.vue";
import AppHeader from "./components/AppHeader.vue";
import AppPlayer from "./components/AppPlayer.vue";
import { mapWritableState } from "pinia";
import useUserStore from "./stores/user";
import { auth } from "./includes/firebase";

export default {
  name: "App",
  components: {
    AppAuth,
    AppHeader,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

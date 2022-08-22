
<script>
import NavBar from "./NavBar.vue";
import useStore from "src/stores/store";
import { onMounted } from "vue-demi";
export default {
  components: { NavBar },
  setup() {
    const use = useStore();

    onMounted(async () => {
      use.friendsData = await use.friendsGet();
      await use.myUser();
      await use.getAllAvailableUsers();
    });

    return {
      use,
    };
  },
};
</script>

<template>
  <NavBar />
  <slot name="content"></slot>
</template>

<style>
</style>

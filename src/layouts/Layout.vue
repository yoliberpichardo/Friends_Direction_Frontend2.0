
<script>
import NavBar from "./NavBar.vue";
import ModalsResquet from "src/components/ModalsResquet.vue";
import useStore from "src/stores/store";
import { onMounted } from "vue-demi";
export default {
  components: { NavBar, ModalsResquet },
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
  <div class="modalItem" v-if="use.modal">
    <ModalsResquet />
  </div>
  <slot name="content"></slot>
</template>

<style>
</style>

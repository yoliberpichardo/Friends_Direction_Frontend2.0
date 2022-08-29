<script>
import useStore from "src/stores/store";
import { ref, watch } from "vue-demi";
import CardFriends from "./CardFriends.vue";
export default {
  setup() {
    const use = useStore();
    const search = ref("");
    const ViewMyID = ref(use.myID)

    watch(search, async () => {
      await use.getAllAvailableUsers(search.value);
    });

    return {
      use,
      search,
      ViewMyID
    };
  },
  components: { CardFriends },
};
</script>
<template>
  <div class="inputContent">
    <q-input outlined label="Search Friends" v-model="search" />
  </div>
  <div class="homeFriends">
    <div class="titleContent" v-if="use.usersAvaible?.dataFriends?.length">
      <h4>Amigos</h4>
      <CardFriends
        v-for="user in use.usersAvaible.dataFriends"
        :key="user.uid"
        :data="user"
      />
    </div>
    <div class="titleContent" v-if="use.usersAvaible?.dataPublic?.length">
      <h4>Publico</h4>
      <CardFriends
        v-for="user in use.usersAvaible.dataPublic"
        :key="user.uid"
        :data="user"
      />
    </div>
  </div>
</template>

<style>
.homeFriends {
  width: 90%;
  margin: 0 auto;
}

.inputContent{
  width: 90%;
}
.titleContent {
  margin: 2rem 0 0 0;
}

.titleContent h4 {
  font-weight: bold;
}
</style>

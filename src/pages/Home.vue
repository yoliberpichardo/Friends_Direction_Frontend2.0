<script>
import { onMounted, onUpdated, ref } from "vue-demi";
import useStore from "src/stores/store";
import FriendsView from "src/components/Friends/FriendsView.vue";
import MapBody from "src/components/Maps/MapHome.vue";
import RequestFriends from "src/components/Friends/RequestFriends.vue";
import Layout from "src/layouts/Layout.vue";
import ModalsResquet from "src/components/ModalsResquet.vue";

export default {
  name: "Home",
  components: {
    FriendsView,
    MapBody,
    RequestFriends,
    Layout,
    FriendsView,
    ModalsResquet
},
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
  <Layout>
    <template v-slot:content>
      <div class="home">
        <div class="modalItem" v-if="use.modal">
          <ModalsResquet />
        </div>
        <div class="modalItem" v-if="use.modalRequest">
          <RequestFriends />
        </div>
        <div class="bodyHome">
          <div class="contentFriends">
            <FriendsView />
          </div>
          <div class="bodyMap">
            <div class="contentInfo">
              <h2>info usuario</h2>
            </div>
            <div class="contentMap">
              <MapBody />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.home {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bodyHome {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
}

.modalItem {
  position: absolute;
  z-index: 1200;
  right: 5px;
  top: 50px;
}

.contentFriends {
  width: 30%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.418);
  margin-right: 10px;
  overflow: scroll;
}

.bodyMap {
  width: 70%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contentInfo {
  height: 30%;
  background: red;
}

.contentMap {
  height: 68%;
}
</style>

<script>
import { onMounted, onUpdated, ref } from "vue-demi";
import useStore from "src/stores/store";
import FriendsView from "src/components/Friends/FriendsView.vue";
import MapBody from "src/components/Maps/MapHome.vue";
import RequestFriends from "src/components/Friends/RequestFriends.vue";
import Layout from "src/layouts/Layout.vue";
import ModalsResquet from "src/components/Modal/ModalsResquet.vue";
import { getUsersLocation } from "src/helpers/getUsersLocation";
import FriendInfo from "src/components/Friends/FriendInfo.vue";

export default {
  name: "Home",
  components: {
    FriendsView,
    MapBody,
    RequestFriends,
    Layout,
    FriendsView,
    ModalsResquet,
    FriendInfo,
  },
  setup() {
    const use = useStore();

    onMounted(async () => {
      const direction = await getUsersLocation();

      await use.registerDirection(direction);
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
              <FriendInfo />
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
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
}

.contentMap {
  height: 68%;
}
</style>

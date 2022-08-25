
<script>
import Layout from "src/layouts/Layout.vue";
import RequestFriends from "../components/Friends/RequestFriends.vue";
import ModalsResquet from "../components/Modal/ModalsResquet.vue";
import useStore from 'src/stores/store';
import MyInfo from "../components/Perfil/MyInfo.vue";
import MapMyPerfil from "../components/Maps/MapMyPerfil.vue";
import PerfilConfig from "../components/Perfil/PerfilConfig.vue";
export default {
  components: { Layout, RequestFriends, ModalsResquet, MyInfo, MapMyPerfil, PerfilConfig },
  setup(){
    const use = useStore()

    return{
      use
    }
  }
};
</script>

<template>
  <Layout>
    <template v-slot:content>
      <div class="perfil">
        <div class="modalItem" v-if="use.modal">
          <ModalsResquet />
        </div>
        <div class="bodyPerfil">
          <div class="contentMyInfo">
            <RequestFriends />
          </div>
          <div class="bodyMap">
            <div class="contentInfo">
              <MyInfo />
              <PerfilConfig />
            </div>
            <div class="contentMap">
              <MapMyPerfil />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.perfil {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bodyPerfil {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5rem;
}

.modalItem {
  position: absolute;
  z-index: 1200;
  right: 5px;
  top: 50px;
}

.contentMyInfo {
  width: 20%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: row;
  border-right: 2px solid rgba(0, 0, 0, 0.418);
  margin-right: 10px;
  overflow: scroll;
}

.bodyMap {
  width: 75%;
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
  height: 70%;
}
</style>

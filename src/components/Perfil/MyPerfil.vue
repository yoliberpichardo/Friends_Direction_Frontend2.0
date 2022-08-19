
<script>
import Layout from 'src/layouts/Layout.vue';
import RequestFriends from '../Friends/RequestFriends.vue';
import MapBody from '../MapBody.vue';
export default {
    components: { Layout, RequestFriends, MapBody }
}
</script>

<template>
  <Layout>
    <template v-slot:content>
      <div class="perfil">
        <div class="bodyPerfil">
          <div class="contentRequest">
            <RequestFriends />
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
  justify-content: center;
  margin-top: 5rem;
}

.modalItem {
  position: absolute;
  z-index: 1200;
  right: 5px;
  top: 50px;
}

.contentRequest {
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

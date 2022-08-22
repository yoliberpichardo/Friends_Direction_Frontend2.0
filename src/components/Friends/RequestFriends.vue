
<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import useStore from "src/stores/store";
import CardRequest from "./CardRequest.vue";

export default {
  setup() {
    const use = useStore();
    const search = ref("");
    const viewSearch = ref(false);
    watch(search, async () => {
      await use.getUsersByID(search.value);
    });
    //peticion del usuario al montarse
    return {
      use,
      search,
      viewSearch,
    };
  },
  components: { CardRequest },
};
</script>


<template>
  <div id="bodyModal" class="q-pa-md q-gutter-sm">
    <q-card class="contentCard">
      <div class="headerRequest">
        <div class="textContent">
          <h5>Añadir amigos</h5>
        </div>
        <div class="btnContent">
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="use.modalRequest = !use.modalRequest"
          ></q-btn>
        </div>
      </div>

      <div class="inputContent">
        <q-input outlined label="search friends" v-model="search" />
      </div>
      <q-card-section class="scroll" id="contentSection">
        <div class="titleContent" v-if="search">
          <CardRequest
            v-for="friend in use.usersResquet.data"
            :key="friend.uid"
            :data="friend"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.contentCard {
  width: 28rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bodyUserResquet {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.headerRequest {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

#contentSection {
  width: 95%;
}

.bodyUserResquet {
  padding: 10px;
  margin: 15px 0;
}

.iconContent button {
  margin: 0 7px;
}

.btnContent {
  width: 10%;
  display: flex;
  justify-content: end;
}
.textContent{
  width: 90%;
  display: flex;
  justify-content: center;
}
</style>


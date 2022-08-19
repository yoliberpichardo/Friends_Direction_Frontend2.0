
<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import useStore from "src/stores/store";
import CardRequest from "./CardRequest.vue";

export default {
    setup() {
        const use = useStore();
        const search = ref("");
        watch(search, async () => {
            await use.getUsersByID(search.value);
        });
        //peticion del usuario al montarse
        return {
            use,
            search
        };
    },
    components: { CardRequest }
};
</script>

<template>
  <div class="bodySearch">
    <div class="inputContent">
      <q-input outlined label="Search Friends" v-model="search" />
    </div>
    <div class="titleContent" v-if="search">
      <CardRequest v-for="friend in use.usersResquet.data" :key="friend.uid" :data="friend"/>
    </div>
    </div>
</template>
<style scoped>

.inputContent, .homeFriends{
  width: 90%;
  margin: 0 auto;
}

.titleContent {
  margin: 2rem 0 0 0;
}

.titleContent h4{
  font-weight: bold;
}
 /* .bodySearch {
  width: 80%;
  min-height: 5rem;
  display: flex;
  padding: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3.1rem 0 0 0;
  color: #000;
}

.inputContent {
 width: 100%;
  height: 2rem;
 display: flex;
 flex-direction: row;
 justify-content: center;
}

.inputContent div{
  width: 23rem;
}


.resultFriends{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

}.descriptContent{
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
}
.nameContent h3{
  font-size: 30px;
  font-weight: 400;
}

  .nameContent h3{
    font-size: 1.8rem;
  } */
</style>

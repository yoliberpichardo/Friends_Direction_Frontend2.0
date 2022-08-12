<script>
import useStore from 'src/stores/store'
import { onMounted, ref } from 'vue-demi'
export default {
  setup(){
    const use = useStore()
    const dataMyUser = ref(Object)


    onMounted(async () => {
      dataMyUser.value = await use.myUser()
      // console.log(dataMyUser.value);
    })

    return{
      use,
      dataMyUser
    }
  }
}
 </script>
<template>
  <div class="inputContent">
      <q-input outlined label="Search Friends" v-model="use.friendsSearch" />
  </div>
  <div class="homeFriends" v-if="!use.friendsSearch">
    <div class="titleContent">
      <h4>Amigos</h4>
    </div>
    <div class="titleContent">
      <h4>Publico</h4>
    </div>
  </div>
</template>

<style>


.titleContent {
  margin: 2rem 0 0 0;
}

.bodyResult{
  width: 28rem;
  height: 5.7rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

  .descriptContent {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nameContent h3{
    font-size: 1.8rem;
  }


</style>

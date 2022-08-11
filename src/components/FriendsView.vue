<script>
import useStore from 'src/stores/store'
import { onMounted, ref } from 'vue-demi'
export default {
  setup(){
    const use = useStore()
    const dataMyUser = ref(Object)


    onMounted(async () => {
      dataMyUser.value = await use.myUser()
      console.log(dataMyUser.value);
    })

    return{
      use,
      dataMyUser
    }
  }
}
 </script>
<template>
  <div class="homeFriends">
    <div class="titleContent">
      <h4>Amigos</h4>
    </div>
    <q-card-section
      class="resultFriends"
      v-for="friend in dataMyUser.data"
      :key="friend.uid"
    >
      <q-card  class="bodyResult"  >
        <div class="descriptContent">
          <div class="nameContent">
            <h3>{{ friend.name }}</h3>
            <p>19.499832, -70.741350</p>
          </div>
          <div>
            <q-icon  name="share_location" :icon="'ion-ios-gear-outline'" size="2.7rem" />
          </div>
        </div>
      </q-card>
    </q-card-section>
  </div>
</template>

<style>

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

<script>
import { onMounted, onUpdated, ref } from 'vue-demi'
import NavBar from '../layouts/NavBar.vue'
import useStore from 'src/stores/store'
import ModalsResquet from 'src/components/ModalsResquet.vue'
import SearchFriends from 'src/components/Friends/ResultFriends.vue'
import FriendsView from 'src/components/Friends/FriendsView.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SearchFriends,
    ModalsResquet,
    SearchFriends,
    FriendsView
},
  setup(){
    const use = useStore()


    onMounted(async () => {
      use.friendsData = await use.friendsGet()
    })

    return{
      use,
    }
  }
}
</script>

<template>
  <div class="home">
        <NavBar />
        <div class="modalItem">
          <ModalsResquet v-if="use.modal" />
        </div>
        <div class="bodyHome">
          <div class="contentFriends">
            <FriendsView />
            <SearchFriends v-if="use.friendsSearch"/>
          </div>
        </div>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .bodyHome{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .modalItem{
    display: flex;
    z-index: 1200;
    justify-content: end;
    margin: 5rem 0;
  }

  .contentFriends {
    display: flex;
    flex-direction: column;
  }

</style>

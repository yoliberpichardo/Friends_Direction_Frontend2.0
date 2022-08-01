<script>
import { onMounted, onUpdated, ref } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import useStore from 'src/stores/store'
import SearchFriends from 'src/layouts/SearchFriends.vue'
import ModalsResquet from 'src/components/ModalsResquet.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SearchFriends,
    ModalsResquet
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
          <div class="bodyHome">
            <router-view/>
          </div>
          <ModalsResquet v-if="use.modal" />
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
    justify-content: end;
    margin: 5rem 0;
  }

</style>

<script>
import { onMounted, onUpdated, ref } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import useStore from 'src/stores/store'
import SearchFriends from 'src/layouts/SearchFriends.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SearchFriends
},
  setup(){
    const use = useStore()


    onMounted(async () => {
      use.friendsData = await use.dataGet()
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
        <router-view/>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

</style>

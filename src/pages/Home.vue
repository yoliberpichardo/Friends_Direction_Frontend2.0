<script>
import { onMounted, ref } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import getOptions from '../api/dataBase'
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
    const token = localStorage.getItem('token')

    onMounted(async () => {
      use.friendsData = await( await getOptions.post('/user',{},{
        headers:{
          authorization:`bearer ${token}`
        }
      })).data.dataFilter
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
  }

</style>

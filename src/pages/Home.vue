<script>
import { onMounted, ref } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import getOptions from '../api/dataBase'
import useStore from 'src/stores/store'

export default {
  name: 'Home',
  components: {
    User,
    Login,
    NavBar
  },
  setup(){
    const use = useStore()
    const token = localStorage.getItem('token')
    const viewMenu = ref(false)
    const viewSearch = ref(false)

    onMounted(async () => {
      use.friendsData = await( await getOptions.post('/user',{},{
        headers:{
          authorization:`bearer ${token}`
        }
      })).data.dataFilter
    })

    return{
      use,
      viewMenu,
      viewSearch
    }
  }
}
</script>

<template>
  <q-card class="home">
    <q-card-section class="bodyHome">
      <div class="contentSearch">
        <div v-if="viewSearch" class="contentInput">
          <q-input rounded outlined dense/>
        </div>
        <div @click="viewSearch = !viewSearch" class="contentImgSearch">
          <q-icon v-if="viewSearch"  name="search_off" size="2.5rem" />
          <q-icon v-if="!viewSearch"  name="travel_explore" size="2.5rem" />
        </div>
      </div>
      <div class="containerNavbar">
        <div @click="viewMenu = !viewMenu" class="contentImgMenu">
          <q-icon v-if="!viewMenu"  name="menu" size="2.5rem" />
          <q-icon v-if="viewMenu"  name="close" size="2.5rem" />
        </div>
        <NavBar v-if="viewMenu"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }

  .bodyHome{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }

  .contentSearch{
    display: flex;
    flex-direction: row;
  }

  .contentInput {
    padding: 0 0.5rem;
  }

  .contentImgSearch img{
    width: 3rem;
    height: 3rem;
  }

  .containerNavbar{
    display: flex;
    flex-direction: row-reverse;
  }

  .contentImgMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

</style>

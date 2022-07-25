<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { onMounted, ref } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import getOptions from '../api/dataBase'
import useStore from 'src/stores/store'

export default defineComponent({
  name: 'IndexPage' ,
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
})
</script>

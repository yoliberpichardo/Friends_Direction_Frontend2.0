<script>
import useStore from 'src/stores/store'
import { ref } from 'vue-demi'

export default {
    setup(){
        const use = useStore()
        const viewSearch = ref(false)
        const viewMenu = ref(false)


        return{
            use,
            viewSearch,
            viewMenu,
        }
    }

}
</script>

<template>
    <q-card class="bodyNav">
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

        <div class="contentRouter" v-if="viewMenu">
          <div class="q-pa-md" >
            <div class="q-gutter-y-md" style="max-width: 600px">
              <q-tabs
                narrow-indicator
              >
                <router-link to="/home">
                  <q-tab name="home" label="Home"></q-tab>
                </router-link>

                <router-link to="/home/search">
                  <q-tab name="Amigos" label="Amigos"></q-tab>
                </router-link>
              </q-tabs>
            </div>
          </div>
        </div>
      </div>
    </q-card>
</template>

<style scoped>

    .bodyNav {
        width: 100%;
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
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
      align-items: center;
    }

    .contentImgMenu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .contentRouter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .contentRouter a {
        font-size: 1.5rem;
        text-decoration: none;
        margin: 0 10px;
    }
</style>

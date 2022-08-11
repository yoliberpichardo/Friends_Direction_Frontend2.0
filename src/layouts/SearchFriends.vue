
<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUpdated, watch } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import useStore from "src/stores/store";
import { useQuasar } from 'quasar'

export default {
  setup() {
    const use = useStore();
    const token = localStorage.getItem("token");
    const $q = useQuasar()
    const statusRequest = ref(false)
    const myID = ref('')
    const getMyID = ref(Object)

    const sendRequest = async (uid) => {
        try{
          const resquet_send = await getOptions.post("resquet_send",
          { friendID: uid },
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );
        $q.notify({
          type: 'positive',
          message: resquet_send.data.msg

        })
        use.friendsData = await use.friendsGet()
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: 'no se pudo enviar la solicitud'
        })
      }
      }

    //peticion del usuario al montarse

    onMounted(async () => {

      getMyID.value = await use.myUser()

      myID.value = getMyID.value.data[0].uid

    })

    return {
      use,
      sendRequest,
      statusRequest,
      myID,
      getMyID
    }
  },
};
</script>

<template>
  <div class="bodySearch">
    <div class="inputContent">
      <div>
        <q-input outlined label="Search Friends" v-model="use.friendsSearch" />
      </div>
    </div>

    <div v-if="use.friendsSearch">
      <q-card-section
        class="resultFriends"
        v-for="friend in use.friendsUpdate()"
        :key="friend.uid"
      >
        <q-card  class="bodyResult" v-if="!friend.friends?.includes(myID) || !friend.request_send?.includes(myID)" >
          <div class="descriptContent">
            <div class="nameContent" >
              <h3>{{ friend.name }}</h3>
            </div>
            <div>
              <q-icon name="person_add" size="3rem" @click="sendRequest(friend.uid)" v-if="!friend.request_received.includes(myID)"/>
              <q-icon name="how_to_reg" color="positive" size="3rem" v-else/>

            </div>
          </div>
        </q-card>
      </q-card-section>
    </div>
  </div>
</template>

<style scoped>
.bodySearch {
  width: 80%;
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 3.1rem 0 0 0; */
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

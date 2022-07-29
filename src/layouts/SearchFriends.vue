
<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUpdated, watch } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import useStore from "src/stores/store";
import { uid, useQuasar } from 'quasar'

export default {
  setup() {
    const use = useStore();
    const token = localStorage.getItem("token");
    const $q = useQuasar()
    const statusResquet = ref(false)
    const myID = ref('')
    const getMyID = ref(Object)

    const sendResquet = async (uid) => {
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

      getMyID.value = await use.verifyResquet()

      myID.value = getMyID.value.data[0].uid

      use.friendsData.forEach(element => {
        console.log(element.request_received.indexOf(myID.value), element.request_received, myID.value);
        if(element.request_received.indexOf(myID.value) > -1){
          element.statusResquet = true
        }else {
          element.statusResquet = false
        }
        return element
      })

    })

    return {
      use,
      sendResquet,
      statusResquet,
      myID,
      getMyID
    }
  },
};
</script>

<template>
  <q-card class="bodySearch">
    <div class="inputContent">
      <div>
        <q-input outlined label="Search Friends" v-model="use.friendsSearch" />
      </div>
    </div>
    <q-card-section
      class="resultFriends"
      v-for="(friend) in use.friendsUpdate()"
      :key="friend.uid"
    >
      <q-card  class="bodyResult" >
        <div class="descriptContent">
          <div class="nameContent">
            <h3>{{ friend.name }}</h3>
          </div>
          <div>
            <q-icon name="person_add" size="3rem" @click="sendResquet(friend.uid)" v-if="!friend.request_received.includes(myID)"/>
            <q-icon name="how_to_reg" color="positive" size="3rem" v-else/>

          </div>
        </div>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.bodySearch {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3.1rem 0 0 0;
  color: #000;
}

.inputContent {
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: center;
}

.inputContent div{
  width: 23rem;
}


.resultFriends{
  display: flex;
  flex-direction: column;
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

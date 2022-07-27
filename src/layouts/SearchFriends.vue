
<script>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import useStore from "src/stores/store";
import { uid, useQuasar } from 'quasar'

export default {
  setup() {
    const use = useStore();
    const token = localStorage.getItem("token");
    const $q = useQuasar()
    const statusResquet = ref(false)
    const verifyResquet = ref(Object)
    const myID = ref('')

    const sendResquet = async (uid) => {
      if (verifyResquet.value.data[0].resquet_send.indexOf(uid) !== 0) {

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
      } else {
        $q.notify({
          type: 'warning',
          message: 'Ya haz enviado una solicitud'
        })
      }
    };

    const requestConfirm = (id,uid) => {
      console.log(uid, use.friendsData[uid].request_received.indexOf(id));
      if(use.friendsData[uid].request_received.indexOf(id) !== 0){
        return !statusResquet.value
      }else{
        return statusResquet.value
      }
    }

    //peticion del usuario al montarse
    onMounted(async () => {
      verifyResquet.value = await(await getOptions.post('myuser', {}, {
        headers: {
            authorization: `bearer ${token}`,
          },
      })).data

      myID.value = verifyResquet.value.data[0].uid

      // requestConfirm(myID.value)
    })

    return {
      use,
      sendResquet,
      statusResquet,
      verifyResquet,
      requestConfirm,
      myID
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
      v-for="(friend, index) in use.friendsUpdate()"
      :key="friend.uid"
    >
      <q-card  class="bodyResult">
        <div class="descriptContent">
          <div class="nameContent">
            <h3>{{ friend.name }}</h3>
          </div>
          <div @click="sendResquet(friend.uid)">
            <q-icon name="person_add" size="3rem" v-if="requestConfirm(myID,index)"/>
            <q-icon name="how_to_reg" color="positive" size="3rem" v-else/>
          </div>
        </div>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.bodySearch {
  width: 40rem;
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


<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import getOptions from "../api/dataBase";
import useStore from "src/stores/store";
import { useQuasar } from 'quasar'

export default {
  setup() {
    const use = useStore();
    const result = ref("");
    const token = localStorage.getItem("token");
    const $q = useQuasar()

    const sendResquet = async (uid) => {
      const resquet_send = await getOptions.post(
        "resquet_send",
        { friendID: uid },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );

        $q.notify({
          type: 'positive',
          message: 'Solicitud enviada'
        })

      console.log(resquet_send);
    };

    return {
      use,
      sendResquet,
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
      v-for="friend in use.friendsUpdate()"
      :key="friend.uid"
    >
      <q-card  class="bodyResult">
        <div class="descriptContent">
          <div class="nameContent">
            <h3>{{ friend.name }}</h3>
          </div>
          <div @click="sendResquet(friend.uid)">
            <q-icon name="person_add"  size="3rem"/>
            <q-icon name="person" size="3rem"/>
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


<script>
import { onMounted, ref } from "vue-demi";
import getOptions from "../../api/dataBase";
import useStore from "src/stores/store";
import { useQuasar } from "quasar";

export default {
  props: ["data"],
  setup(props) {
    const use = useStore();
    const token = localStorage.getItem("token");
    const $q = useQuasar();
    const search = ref("");
    const friend = ref(Object);
    const confirm = ref(false)

    const sendRequest = async (uid) => {
      try {

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
          type: "positive",
          message: resquet_send.data.msg,
        });

        use.friendsData = await use.friendsGet();
        console.log(resquet_send.data?.myuser?.request_send.includes(use.myID.uid));
        if(resquet_send.data?.myuser?.request_send.includes(use.myID.uid)){
          confirm.value = true
        }
      } catch (error) {
        console.log(error);
        $q.notify({
          type: "negative",
          message: "no se pudo enviar la solicitud",
        });
      }
    };

    onMounted(() => {
      friend.value = props.data;
    });

    return {
      use,
      sendRequest,
      search,
      friend,
      confirm
    };
  },
};
</script>

<template>
  <q-card-section class="resultFriends">
    <div class="condicionalDiv" v-if="friend.uid !== use.myID.uid">
      <q-card
        class="bodyResult"
        v-if="
          !friend.friends?.includes(use.myID.uid) ||
          !friend.request_send?.includes(use.myID.uid)
        "
      >
        <div class="descriptContent">
          <div class="nameContent">
            <h3>{{ friend.name }}</h3>
          </div>
          <div>
            <q-icon
              name="person_add"
              size="3rem"
              @click="sendRequest(friend.uid)"
              v-if="!friend.request_received?.includes(use.myID.uid)"
            />
            <q-icon name="how_to_reg" color="positive" size="3rem" v-else/>
          </div>
        </div>
      </q-card>
    </div>
  </q-card-section>
</template>

<style scope>
.condicionalDiv {
  width: 88%;
}
.bodyResult {
  width: 100%;
}

.resultFriends {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.descriptContent {
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
}
.nameContent h3 {
  font-size: 30px;
  font-weight: 400;
}

.nameContent h3 {
  font-size: 1.8rem;
}
</style>

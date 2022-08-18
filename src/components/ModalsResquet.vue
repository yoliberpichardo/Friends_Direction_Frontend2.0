<script>
import { onMounted, ref } from "vue";
import useStore from 'src/stores/store';

export default {
  setup() {
    const use = useStore()

    return {
      use,
    };
  },
};
</script>
<template>
  <div id="bodyModal" class="q-pa-md q-gutter-sm">
      <q-card class="contentCard">
        <q-toolbar class="btnContent">
          <q-btn flat round dense icon="close" @click="use.modal = !use.modal"></q-btn>
        </q-toolbar>

        <div class="textContent">
          <h5>Solicitudes recibidas</h5>
        </div>

        <q-card-section class="scroll" id="contentSection">
          <div class="contentUser" v-for="user in use.friendsReceivedRequest.data" :key="user.uid">
            <q-card class="bodyUserResquet" v-if="!user.friends?.includes(use.myID[0].uid)">
                <div class="contentName">
                  <h4>
                    {{user.name}}
                  </h4>
                </div>
                <div class="iconContent">
                    <q-btn @click="use.acceptFriends(user.uid)" >
                      <q-icon name="done_outline" color="positive" size="2rem" />
                    </q-btn>
                    <q-btn @click="use.declineRequest(user.uid)">
                      <q-icon name="cancel" color="red" size="2rem"  />
                    </q-btn>
                </div>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<style scoped>

  .contentCard {
    width: 28rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bodyUserResquet {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #contentSection {
    width: 95%;
  }

  .bodyUserResquet {
    padding: 10px ;
    margin: 15px 0;
  }

  .iconContent button{
    margin: 0 7px;
  }

  .btnContent{
    display: flex;
    justify-content: end;
  }

</style>

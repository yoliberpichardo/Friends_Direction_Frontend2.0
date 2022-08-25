<script>
import { onMounted, ref } from 'vue-demi'
import useStore from "src/stores/store";
  export default {
    props:[
      'data'
    ],
    setup(props){
      const user = ref('')
      const use = useStore();

      onMounted(() => {
        user.value = props.data
      })

      const clickInfoFriend = (dataFriend) => {
        use.viewInfoFriend = dataFriend
      }

    return {
        use,
        user,
        clickInfoFriend
      }
    }
  }
</script>
<template>
  <q-card-section class="resultFriends">
    <q-card  class="bodyResult" v-if="user" >
      <div class="descriptContent"  v-if="use.myID.uid !== user.uid">
        <div class="nameContent">
          <h3>{{user.name}}</h3>
          <p>{{ user.direction[0]?.lng }} -
            {{ user.direction[0]?.lat }}</p>
        </div>
        <div class="btnContent">
          <q-btn style="width: 4rem; height: 2.5rem;" @click="clickInfoFriend(user)" >
            <q-icon name="share_location" size="2.2rem" />
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-card-section>
</template>


<style scope>
.bodyResult{
  width: 100%;
}

.resultFriends{
  padding: 0;
  margin: 10px 0;
}

.descriptContent{
  width: 100%;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
}
.nameContent h3{
  font-size: 30px;
  font-weight: 400;
}
.nameContent p{
  margin: 0;
}

</style>

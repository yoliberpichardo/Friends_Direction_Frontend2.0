<script>
import { onMounted, ref } from 'vue-demi'
import useStore from "src/stores/store";
  export default {
    props:[
      'data'
    ],
    setup(props){
      const user = ref(props.data)
      const use = useStore();

      onMounted(() => {
        user.value = props.data
      })

    return {
      use,
      user
      }
    }
  }
</script>
<template>
  <q-card-section class="resultFriends">
    <q-card  class="bodyResult"  >
      <div class="descriptContent">
        <div class="nameContent">
          <h3>{{user.name}}</h3>
          <p>19.499832, -70.741350</p>
        </div>
        <div>
          <q-icon  name="share_location" :icon="'ion-ios-gear-outline'" size="2.7rem" />
        </div>
      </div>
    </q-card>
  </q-card-section>
</template>


<style scope>

.resultFriends{
  padding: 0;
  margin: 10px 0;
}

.descriptContent{
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


<script>
import useStore from "src/stores/store";
import { onMounted } from "vue-demi";
export default {
  setup() {
    const use = useStore();

    onMounted(async () => {
      await use.myUser();
      console.log(use.myID);
    });

    return {
      use,
    };
  },
};
</script>

 <template>
  <div class="MyInfo">
    <div class="bodyMyInfo" v-for="myInfo in use.myID" :key="myInfo.uid">
      <div class="contentAvatar">
        <q-avatar size="5.8rem">
          <img src="../../assets/zoro.jpg" alt="" />
        </q-avatar>
      </div>
      <div class="myInfoDescription">
        <div class="myName">
          <h3>{{ myInfo.name }}</h3>
        </div>
        <div class="myDirection">
          <p ><b>Direccion : </b>{{myInfo.direction[0]}} - {{myInfo.direction[1]}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyMyInfo{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.myDirection {
  display: flex;
  align-items: center;
}

.myDirection p {
  margin:  0;
}
</style>

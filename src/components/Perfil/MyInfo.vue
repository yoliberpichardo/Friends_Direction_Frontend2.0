
<script>
import useStore from "src/stores/store";
import { onMounted } from "vue-demi";
export default {
  setup() {
    const use = useStore();

    onMounted(async () => {
      await use.myUser();
    });

    return {
      use,
    };
  },
};
</script>

 <template>
  <div class="MyInfo">
    <div class="bodyMyInfo" >
      <div class="contentAvatar">
        <q-avatar size="5.8rem">
          <img src="../../assets/zoro.jpg" alt="" />
        </q-avatar>
      </div>
      <div class="myInfoDescription">
        <div class="myName">
          <h3>{{ use.myID?.name }}</h3>
        </div>
        <div class="myDirection">
          <p ><b>Direccion : </b>{{use.myID?.direction[0].lng}} - {{use.myID?.direction[0]?.lat}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.MyInfo{
  display: flex;
}
.bodyMyInfo{
  width: 100%;
  display: flex;
  justify-content: center;
}
.myDirection {
  display: flex;
  align-items: center;
}

.contentAvatar{
  margin-right: 15px;
}

.myDirection p {
  margin:  0;
}
</style>

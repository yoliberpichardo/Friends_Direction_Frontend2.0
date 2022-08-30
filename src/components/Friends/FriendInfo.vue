<script>
import useStore from "src/stores/store";
import { onMounted } from 'vue-demi';
export default {
  setup() {
    const use = useStore();
    
    return {
      use,
    };
  },
};
</script>

<template>
  <div class="FriendInfo">
    <div class="bodyFriendInfo">
      <div class="contentAvatar">
        <q-avatar size="5.8rem">
          <img src="../../assets/luffy.jpg" alt="" />
        </q-avatar>
      </div>
      <div class="FriendInfoDescription">
        <div class="friendName">
          <h3>{{ use.viewInfoFriend?.name }}</h3>
        </div>
        <div class="friendDirection">
          <p>
            <b>Direccion : </b>{{ use.viewInfoFriend?.direction[0]?.lng }} -
            {{ use.viewInfoFriend?.direction[0]?.lat }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.FriendInfo {
  display: flex;
}
.bodyFriendInfo {
  width: 100%;
  display: flex;
  justify-content: center;
}
.friendDirection {
  display: flex;
  align-items: center;
}

.contentAvatar {
  margin-right: 15px;
}

.friendDirection p {
  margin: 0;
}
</style>

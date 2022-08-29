<script>
import { onMounted, ref } from "vue-demi";
import useStore from "src/stores/store";
export default {
  props: ["data"],
  setup(props) {
    const user = ref("");
    const use = useStore();
    const myCoordinates = ref(null);

    onMounted(async () => {
      user.value = props.data;
      await use.myUser();
      myCoordinates.value = await use.myID?.direction[0];
    });

    //TODO: click for view routes of friend
    const clickInfoFriend = async (dataFriend) => {
      use.viewInfoFriend = dataFriend;
      const friendCoordinate = dataFriend.direction[0];


      const bbox = [[myCoordinates.value.lng,myCoordinates.value.lat],[friendCoordinate.lng, friendCoordinate.lat]]

      await use.directionInit(myCoordinates.value, dataFriend.direction[0]);
      use.addSourceData(use.coodinatesSource.routes[0].geometry.coordinates);


      if(use.mapHome?.getLayer('route')){
        use.mapHome.removeLayer('route')
        use.mapHome.removeSource('route')
      }
      //TODO: new marker friend added in mapHome
      use.newMarker
        .setLngLat([friendCoordinate.lng, friendCoordinate.lat])
        .addTo(use.mapHome);

      use.mapHome.fitBounds(bbox, {
        padding: 40,
      });

      use.mapHome.addSource("route", use.sourceData);

      use.mapHome.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 3,
        },
      });
    };

    return {
      use,
      user,
      clickInfoFriend,
    };
  },
};
</script>
<template>
  <q-card-section class="resultFriends">
    <q-card class="bodyResult" v-if="user">
      <div class="descriptContent" v-if="use.myID.uid !== user.uid">
        <div class="nameContent">
          <h3>{{ user.name }}</h3>
          <p>{{ user.direction[0]?.lng }} __ {{ user.direction[0]?.lat }}</p>
        </div>
        <div class="btnContent">
          <q-btn
            style="width: 4rem; height: 2.5rem"
            @click="clickInfoFriend(user)"
          >
            <q-icon name="share_location" size="2.2rem" />
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-card-section>
</template>


<style scope>
.bodyResult {
  width: 100%;
  min-width: 280px;
}

.resultFriends {
  padding: 0;
  margin: 10px 0;
}

.descriptContent {
  width: 100%;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
}
.nameContent h3 {
  font-size: 30px;
  font-weight: 400;
}
.nameContent p {
  margin: 0;
}
</style>

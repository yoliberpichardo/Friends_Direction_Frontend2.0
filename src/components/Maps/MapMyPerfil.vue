  <script>
import mapboxgl, { Map, Marker } from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { onMounted, ref } from "vue-demi";
import useStore from "src/stores/store";
import { getUsersLocation } from "../../helpers/getUsersLocation";
export default {
  setup() {
    const use = useStore();
    const marker = ref(null);

    onMounted(async () => {
      let coordinate;
      await use.myUser();

      if (use.myID.direction) {
        coordinate = use.myID.direction;
      } else {
        coordinate = await getUsersLocation();
      }

      mapboxgl.accessToken = process.env.MAP_TOKEN;

      const map = new Map({
        container: "myMap", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [coordinate[0].lng, coordinate[0].lat], // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });

      use.mapPerfil = map;

      map.on("load", () => {
        marker.value = new Marker({ color: "#6f0", anchor: "center" })
          .setLngLat([coordinate[0].lng, coordinate[0].lat])
          .addTo(map);
      });

      map.on("click", (e) => {
        marker.value.setLngLat(e.lngLat);
        use.newCoordinate = e.lngLat;
      });
    });

    const saveNewCoordinate = async () => {
      const { user } = await use.registerDirection(use.newCoordinate);
      use.myID = user;
      use.disableMapPerfil = true;
    };

    const cancelNewCoordinate = () => {
      marker.value.setLngLat(use.myID?.direction[0]);
      use.disableMapPerfil = true;
      console.log(use.myID?.direction[0].lat);
      use.mapPerfil.flyTo({center: [use.myID?.direction[0].lng, use.myID?.direction[0].lat], zoom: 15});
    };

    return {
      use,
      saveNewCoordinate,
      cancelNewCoordinate,
    };
  },
};
</script>

<template>
  <div class="mapMyPerfil">
    <div id="myMap" :class="use.disableMapPerfil ? 'mapa' : 'mapa2'"></div>
    <div class="btns">
      <div class="BtnMap" v-if="!use.disableMapPerfil">
        <q-btn label="cancelar" color="red" @click="cancelNewCoordinate" />
        <q-btn label="Guardar" color="positive" @click="saveNewCoordinate" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mapMyPerfil {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.mapa2 {
  position: relative;
  width: 100%;
  height: 92%;
  overflow: hidden;
  opacity: 1;
  pointer-events: all;
  border: 2px dashed rgba(255, 0, 0, 0.671);
}

.mapa {
  position: relative;
  width: 100%;
  height: 92%;
  overflow: hidden;
  opacity: 0.4;
  pointer-events: none;
}

.btns{
  width: 100%;
  display: flex;
  justify-content: end;
}

.BtnMap {
  width: 27%;
  display: flex;
  justify-content: space-between;
}
</style>

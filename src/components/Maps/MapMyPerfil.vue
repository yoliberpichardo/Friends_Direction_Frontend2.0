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


      if (use.myID.direction){
        coordinate = use.myID.direction
      }else{
        coordinate = await getUsersLocation();
      }
      // const [longitud, latitud] = await getUsersLocation();
      // console.log(coordinate);

      mapboxgl.accessToken =
        "pk.eyJ1Ijoib3NjYXIxMjAwMiIsImEiOiJjbDZ2N3l0NHQyMmZ0M2pvYXBza3Eya20wIn0.q5aFgPhzm3_guUlI5Rv8NQ";

      const map = new Map({
        container: "myMap", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [coordinate[0].lng, coordinate[0].lat], // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });

      use.mapPerfil = map;

      map.on("load", () => {
        marker.value = new Marker({ color: "#009", anchor: "center" })
          .setLngLat([coordinate[0].lng, coordinate[0].lat])
          .addTo(map);
      });

      map.on("click", (e) => {
        marker.value.setLngLat(e.lngLat);
        use.newCoordinate = e.lngLat
        console.log(use.newCoordinate);
      });
    });

    const saveNewCoordinate = async() => {
      const {user} = await use.registerDirection(use.newCoordinate)
      use.myID = user
      use.disableMapPerfil = true
    }

    const cancelNewCoordinate = () => {
      console.log(use.myID?.direction);
      marker.value.setLngLat(use.myID?.direction[0])
      use.disableMapPerfil = true
    }

    return {
      use,
      saveNewCoordinate,
      cancelNewCoordinate
    };
  },
};
</script>

<template>
<div class="mapMyPerfil">
  <div id="myMap" :class="use.disableMapPerfil ? 'mapa' : 'mapa2'"></div>
  <div class="BtnMap" v-if="!use.disableMapPerfil">
    <q-btn label="cancelar" color="red" @click="cancelNewCoordinate"/>
    <q-btn label="Guardar" color="positive" @click="saveNewCoordinate" />
  </div>
</div>
</template>

<style scoped>
.mapMyPerfil{
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

.BtnMap{
  width: 30%;
  display: flex;
  justify-content: space-between;
}
</style>

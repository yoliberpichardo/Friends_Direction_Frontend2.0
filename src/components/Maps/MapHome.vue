
  <script>
import mapboxgl, { Map, Marker } from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { onMounted, ref } from "vue-demi";
import useStore from "src/stores/store";
export default {
  setup() {
    const use = useStore();

    onMounted(async () => {
      await use.myUser();

      const { lng, lat } = await use.myID?.direction[0];

      mapboxgl.accessToken = process.env.MAP_TOKEN;


      use.mapHome = new Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: lng ?  [lng, lat]: [0,0], // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: "globe", // display the map as a 3D globe
      });

      use.mapHome.on("load", () => {
        new Marker({ color: "#6f0", anchor: "center" })
          .setLngLat([lng, lat])
          .addTo(use.mapHome);
      });
    });
  },
};
</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100%;
  height: 94%;
  overflow: hidden;
}
</style>

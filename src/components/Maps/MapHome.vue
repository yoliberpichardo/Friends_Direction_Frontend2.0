
  <script>
    import mapboxgl, {Map,Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
    import { onMounted } from 'vue-demi';
    import useStore from 'src/stores/store';
    import {getUsersLocation} from '../../helpers/getUsersLocation'
    export default {
    setup() {
      const use = useStore()

      onMounted(async () => {
        const coordinate = await getUsersLocation()

        mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXIxMjAwMiIsImEiOiJjbDZ2N3l0NHQyMmZ0M2pvYXBza3Eya20wIn0.q5aFgPhzm3_guUlI5Rv8NQ';

        const map = new Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [coordinate[0].lng, coordinate[0].lat], // starting position [lng, lat]
          zoom: 15, // starting zoom
          projection: 'globe' // display the map as a 3D globe
        });

        map.on('load', () => {
          new Marker({ color: '#0009', anchor: 'center' })
            .setLngLat([coordinate[0].lng, coordinate[0].lat])
            .addTo(map)
        })

        use.mapHome = map

      })

    }
    }
</script>

<template>
  <div id="map">
  </div>
</template>

<style>
#map{
  width: 100%;
  height: 94%;
  overflow: hidden;
}

</style>

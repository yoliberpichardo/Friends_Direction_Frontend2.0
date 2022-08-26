import axios from "axios";

const directionAPI = axios.create({
        // baseURL: `${process.env.VUE_APP_DATA_BASE_URL}`,
        baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
        params: {
          alternatives: false,
          geometries: 'geojson',
          overview: 'simplified',
          steps: false,
          access_token: 'pk.eyJ1Ijoib3NjYXIxMjAwMiIsImEiOiJjbDZ2N3l0NHQyMmZ0M2pvYXBza3Eya20wIn0.q5aFgPhzm3_guUlI5Rv8NQ'
        }
})

export default directionAPI;

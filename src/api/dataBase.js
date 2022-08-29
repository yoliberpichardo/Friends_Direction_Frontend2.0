import axios from "axios";


const getOptions = axios.create({
        baseURL: `${process.env.VUE_APP_RUTA_API}`,
        // baseURL: 'http://localhost:8081'
})

export default getOptions;

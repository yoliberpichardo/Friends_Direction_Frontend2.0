import axios from "axios";

const getOptions = axios.create({
        // baseURL: `${process.env.VUE_APP_DATA_BASE_URL}`,
        baseURL: 'http://localhost:8081'
})

export default getOptions;

import axios from "axios";

export const get1hr = () => axios.get('/1h')
export const get12hr = () => axios.get('/12h')
export const get24hr = () => axios.get('/24h')



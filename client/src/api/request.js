import axios from "axios";

export const get1hr = () => axios.get('/1h')
export const get1day = () => axios.get('/1d')
export const get1week = () => axios.get('/1w')



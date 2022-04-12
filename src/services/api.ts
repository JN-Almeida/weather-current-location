import axios from 'axios'


const apiKey = '2dcfc8914c824bcba0a0134a30d8aca7'

export const params = `weather?lang=pt_br&units=metric&appid=${apiKey}`;

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`
})

export default api
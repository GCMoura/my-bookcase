import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-bookcase.herokuapp.com/'  
})

export default api
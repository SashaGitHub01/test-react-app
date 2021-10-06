import axios from "axios";

const instanse = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
   headers: {
      'API-KEY': '5480930b-8490-48ed-b8a8-8db9d6dc2deb',
   }
})

export default instanse;
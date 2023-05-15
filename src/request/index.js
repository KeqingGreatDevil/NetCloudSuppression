import axios from "axios"
let service = axios.create({ // 本地
    baseURL:"http://localhost:3000/",
    timeout:3000
})
// let service = axios.create({ // vercel
//     baseURL:"https://netease-cloud-music-api-beige-two-58.vercel.app/",
//     timeout:3000,
// })
export default service
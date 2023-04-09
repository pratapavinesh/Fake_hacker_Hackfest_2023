import axios from "axios"

const TOKEN = "cgpbatpr01qo64fgeps0cgpbatpr01qo64fgepsg"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
import axios from 'axios'

const myAxios = axios.create()

myAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const { response } = err

    throw err
  }
)

export default myAxios

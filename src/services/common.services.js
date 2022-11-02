import axios from 'axios'

export default class CommonService {

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://fakestoreapi.com',
      // http://localhost:8010
    })

    this.apiClient.interceptors.request.use((request) => {
      // request.headers = {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${localStorage.getItem(`${process.env.REACT_APP_ACCESS_TOKEN_KEY}`)}`
      // }
      return request
    })

    this.apiClient.interceptors.response.use(
      (results) => {
        // console.log('results', results.data)
        return results.data
      },
      (error) => {
        // if (error.response.status === 401 && error.response.data.displayMessage === 'Unauthorized') {
        //   localStorage.clear()
        //   window.location.href = '/login'
        // }
        return error.response.data ? error.response.data : error
      },
    )
  }


  async get(endpoint, params = '') {
    return await this.apiClient.get(endpoint + params)
  }

  async post(endpoint, params = {}) {
    return await this.apiClient.post(endpoint, params && JSON.stringify(params))
  }

  async put(endpoint, params = {}) {
    return await this.apiClient.put(endpoint, params && JSON.stringify(params))
  }

  async delete(endpoint) {
    return await this.apiClient.delete(endpoint)
  }
}
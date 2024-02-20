import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '952fa42545f570f9d70423ccbce56cef',
    language: 'ko-KR',
  },
})

export default instance

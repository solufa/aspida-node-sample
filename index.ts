import aspida from '@aspida/axios'
import axios from 'axios'
import api from './apis/$api'

const userId = 1

;(async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/user/${userId}`)
    console.log('axios:', data)
  } catch (e) {
    console.log('axios:', e.message)
  }
})()

;(async () => {
  const client = api(aspida())
  const res = await client.users._userId(userId).$get()
  console.log('aspida:', res)
})()

/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './users/index'
import { Methods as Methods1 } from './users/_userId'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://jsonplaceholder.typicode.com' : client.baseURL).replace(/\/$/, '')

  return {
    users: {
      _userId: (val0: number | string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods1['get']['resData']>(prefix, `/users/${val0}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods1['get']['resData']>(prefix, `/users/${val0}`, 'GET', option).json()).data
      }),
      get: (option?: { config?: T }) =>
        client.fetch<Methods0['get']['resData']>(prefix, '/users', 'GET', option).json(),
      $get: async (option?: { config?: T }) =>
        (await client.fetch<Methods0['get']['resData']>(prefix, '/users', 'GET', option).json()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api

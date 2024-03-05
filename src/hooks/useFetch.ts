import { useEffect, useState } from 'react'
import { apiClient } from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from 'axios'



interface IResponse<T> {
  results: T[]
  count: number
}

interface IState<T> {
  data: T[] | null
  error: string | null
  isLoading: boolean
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetch = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[] ) => {
  const [state, setState] = useState<IState<T>>({
    data: [],
    error: null,
    isLoading: false,
  })

  useEffect(() => {
    const controller = new AbortController()
    setState(prev => ({
      ...prev,
      isLoading: true,
    }))
    apiClient
      .get<IResponse<T>>(endpoint, { signal: controller.signal ,...requestConfig})
      .then(res => {
        setState({
          data: res.data.results,
          error: null,
          isLoading: false,
        })
      })
      .catch(error => {
        if (error instanceof CanceledError) return
        setState({
          data: null,
          error: error.message,
          isLoading: false,
        })
      })
    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ? [...deps] : [])
  const { data, error, isLoading } = state

  return { data, error, isLoading }
}

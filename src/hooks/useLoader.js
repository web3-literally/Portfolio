import React, { useContext, useState } from 'react'
import Loader from 'components/loader/Loader'


const LoadingCtx = React.createContext();

export function LoadingProvider(props) {
  const [count, setCount] = useState(false)
  const [label, setLabel] = useState('')

  const value = {
    loading : count,
    setLoading : start => (setCount(start)),
    message : label,
    setMessage : str => setLabel(str)
  }

  return (
    <LoadingCtx.Provider value={value}>
      {props.children}
      <Loader isLoading = {value.loading} label = {value.message} />
    </LoadingCtx.Provider>
  )
}

export const useLoader = () => {
  const { setLoading, setMessage } = useContext(LoadingCtx)
  return [setLoading, setMessage]
}

export const DefaultLoading = Loader
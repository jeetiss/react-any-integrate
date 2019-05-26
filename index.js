import { createContext, createElement, useContext, useReducer } from "react"
import { useScript } from "@jeetiss/react-use-script"

const merge = (prev, next) => ({ ...prev, ...next })

const StateContext = createContext()

const Integration = ({ src, children }) => {
  const [state, setState] = useReducer(merge, { loading: true, error: null })

  useScript(src, {
    onLoad: () => setState({ loading: false }),
    onError: () => setState({ loading: false, error: true }),
  })

  return createElement(StateContext.Provider, { value: state }, children)
}

const Loading = ({ children }) => {
  const state = useContext(StateContext)

  return state.loading ? children : null
}

const Error = ({ children }) => {
  const state = useContext(StateContext)

  return state.error ? children : null
}

const Initial = ({ children }) => {
  const state = useContext(StateContext)

  return !state.error ? children : null
}

export { Initial, Integration, Error, Loading }

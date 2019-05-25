import { useReducer, Children, cloneElement } from "react";
import { useScript } from "@jeetiss/react-use-script";

const merge = (prev, next) => ({ ...prev, ...next });

const Integration = ({ src, children }) => {
  const [state, setState] = useReducer(merge, { loading: true, error: null });

  useScript(src, {
    onLoad: () => setState({ loading: false }),
    onError: () => setState({ error: true })
  });

  return Children.map(children, (child, index) =>
    cloneElement(child, { state, key: index })
  );
};

const Loading = ({ state, children }) => (state.loading ? children : null);
const Error = ({ state, children }) => (state.error ? children : null);

const Initial = ({ state, children }) =>
  !state.error ? children : null

export {
  Initial,
  Integration,
  Error,
  Loading
}

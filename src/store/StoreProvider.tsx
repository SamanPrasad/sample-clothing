import { Provider } from "react-redux";
import { store } from "./store";
import RootComponent from "../components/RootComponent";

function StoreProvider() {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
}

export default StoreProvider;

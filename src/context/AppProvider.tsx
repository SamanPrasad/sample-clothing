import StoreProvider from "./StoreProvider";
import ViewWidthProvider from "./ViewWidthProvider";
import AppComponent from "@components/AppComponent/AppComponent";

function AppProvider() {
  return (
    <StoreProvider>
      <ViewWidthProvider>
        <AppComponent />
      </ViewWidthProvider>
    </StoreProvider>
  );
}

export default AppProvider;

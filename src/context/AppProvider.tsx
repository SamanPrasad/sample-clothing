import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ThemeProvider";
import ViewWidthProvider from "./ViewWidthProvider";
import AppComponent from "@components/AppComponent/AppComponent";

function AppProvider() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ViewWidthProvider>
          <AppComponent />
        </ViewWidthProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default AppProvider;

import StoreProvider from "../store/StoreProvider";
import "../App.css";
import { Outlet } from "react-router";
import HeaderSection from "./HeaderSection/HeaderSection";

function RootComponent() {
  return (
    <div>
      <StoreProvider>
        <HeaderSection />
        <Outlet />
      </StoreProvider>
    </div>
  );
}

export default RootComponent;

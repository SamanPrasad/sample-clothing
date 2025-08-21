import StoreProvider from "../store/StoreProvider";
import "../App.css";
import { Outlet } from "react-router";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";

function RootComponent() {
  return (
    <div>
      <StoreProvider>
        <HeaderSection />
        <Outlet />
        <Footer />
      </StoreProvider>
    </div>
  );
}

export default RootComponent;

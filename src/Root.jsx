import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

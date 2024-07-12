import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import "./scss/main.scss";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

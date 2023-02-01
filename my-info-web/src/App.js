import "./App.css";
import Nav from "./components/header/nav";
import Home from "./components/container/home";
import ItsMe from "./components/container/ItsMe";
import PortFolio from "./components/container/portfolio";
import Linked_In from "./components/container/linked_in";
import BG from "./components/BG";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <body>
        <BG />
        <Home />
        <ItsMe />
        <PortFolio />
        <Linked_In />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

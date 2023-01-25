import "./App.css";
import RestAPI from "./RestAPI.js";
import Nav from "./components/header/nav";
import ItsMe from "./components/container/ItsMe";
import PortFolio from "./components/container/portfolio";
import Profile from "./components/container/profile";
import Linked_In from "./components/container/linked_in";
import BG from "./components/BG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <BG />
        <Profile />
        <ItsMe />
        <PortFolio />
        <Linked_In />
        <RestAPI />
      </header>
    </div>
  );
}

export default App;

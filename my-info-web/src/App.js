import "./App.css";
import RestAPI from "./RestAPI.js";
import Nav from "./components/header/nav";
import PortFolio from "./components/container/portfolio";
import Profile from "./components/container/profile";
import Linked_In from "./components/container/linked_in";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Profile />
        <PortFolio />
        <Linked_In />
        <RestAPI />
      </header>
    </div>
  );
}

export default App;

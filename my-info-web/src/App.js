import "./App.css";
import Nav from "./components/header/nav";
import Home from "./components/container/home";
import ItsMe from "./components/container/ItsMe";
import PortFolio from "./components/container/portfolio";
import Linked_In from "./components/container/linked_in";
import BG from "./components/BG";
import PdfDownload from "./view/PptView";

import { PDFViewer } from "@react-pdf/renderer";

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
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
    </div>
  );
}

export default App;

import { Header } from "./Componentes/Header";
import { MainContent } from "./Componentes/MainContent";
import { Footer } from "./Componentes/Footer";



function App() {
  return (
    <div className="App">
        <div className="pageContainer">
          <Header />
          <MainContent />
        </div>
        <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
//import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Chat />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;

import styles from "./App.modules.css";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import {Experience} from "./components/Experience/Experience";
import {Projects} from "./components/Projects/Project.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App;

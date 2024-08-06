import styles from "./App.modules.css";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import {Experience} from "./components/Experience/Experience";
import {Projects} from "./components/Projects/Project.jsx";

function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    </div>
  )
}

export default App;

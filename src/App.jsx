import styles from "./App.modules.css";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    </div>
  );
}

export default App;

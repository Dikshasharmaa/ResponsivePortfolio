import styles from "./App.modules.css";
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <div className={styles.App}
    ><Navbar />
    <Hero/>
    </div>
  );
}

export default App;

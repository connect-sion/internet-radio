import React from "react";
import Audio from "./Audio";
import styles from "./App.module.css";
import logo from "./logo.png";

const url = process.env.REACT_APP_STREAM || "http://localhost:8000";
const App = () => (
  <div className={styles.container}>
    <header className={styles.center}>
      <a href="https://idmji.org/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="IDMJI logo" style={{ height: "100px" }} />
      </a>
    </header>
    <main className={styles.center}>
      <Audio src={`${url}/stream`} />
    </main>
    <footer className={styles.center}>
      Aplicación multicanal de interpretaciones
    </footer>
  </div>
);

export default App;

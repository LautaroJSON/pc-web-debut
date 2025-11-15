import styles from "./Home.module.css";
import Bar from "../components/Bar";
import Escritorio from "../components/escritorio";

function Home() {
  return (
    <div className={styles.home}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <Escritorio />
      <Bar />
    </div>
  );
}

export default Home;

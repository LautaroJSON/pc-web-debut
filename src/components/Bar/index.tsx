import SvgComponente from "../Icons/Svg";
import styles from "./bar.module.css";

const Bar = () => {
  return (
    <div className={styles.bar}>
      <SvgComponente svgName="windows" className={styles.winIcon} />
    </div>
  );
};

export default Bar;

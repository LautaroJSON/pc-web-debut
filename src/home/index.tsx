import styles from "./Home.module.css";
import Bar from "../components/Bar";
import Icon from "../components/Icons";
import type { TSvgName } from "../components/Icons/Svg";

const _ICON_NAMES_: Array<{ title: string; iconName: TSvgName }> = [
  { title: "Lorem Ipsun", iconName: "carpeta" },
  { title: "Lorem Ipsun", iconName: "corazon" },
  { title: "Ste-trash", iconName: "papelera" },
  { title: "Gubbul", iconName: "gugul" },
  { title: "Abobe Illustrator", iconName: "imagen" },
  { title: "Abobe Photoshop", iconName: "imagen" },
  { title: "The Cheems 4", iconName: "decoracion1" },
  { title: "Abobe Premiere", iconName: "imagen" },
  { title: "Discawrd", iconName: "corazon" },
  { title: "Zteam", iconName: "windows" },
  { title: "WinRawr", iconName: "windows" },
  { title: "OH-BI-ES", iconName: "carpeta" },
  { title: "VIAWR CHAT", iconName: "corazon" },
];

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.iconList}>
        {_ICON_NAMES_.map((icon, index) => (
          <Icon key={index} title={icon.title} icon={icon.iconName} />
        ))}
      </div>
      <Bar />
    </div>
  );
}

export default Home;

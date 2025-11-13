import styles from "./Home.module.css";
import Bar from "../components/Bar";
import Icon from "../components/Icons";
import Escritorio from "../components/escritorio";
import type { JSX } from "react";

const _ICONS_AND_COORDS: Array<{
  component: JSX.Element;
  coords: { x: number; y: number };
}> = [
  // COLUMNA 0
  {
    component: <Icon key={0} title="Lorem Ipsun" icon="carpeta" />,
    coords: { x: 0, y: 0 },
  },
  {
    component: <Icon key={1} title="Lorem Ipsun" icon="imagen" />,
    coords: { x: 1, y: 0 },
  },
  {
    component: <Icon key={2} title="Ste-trash" icon="papelera" />,
    coords: { x: 2, y: 0 },
  },
  {
    component: <Icon key={3} title="Gubbul" icon="gugul" />,
    coords: { x: 3, y: 0 },
  },
  {
    component: <Icon key={4} title="Abobe Illustrator" icon="ai" />,
    coords: { x: 4, y: 0 },
  },
  {
    component: <Icon key={5} title="Abobe Photoshop" icon="ps" />,
    coords: { x: 5, y: 0 },
  },
  {
    component: <Icon key={6} title="Abobe Premiere" icon="pr" />,
    coords: { x: 6, y: 0 },
  },
  {
    component: <Icon key={6} title="lorem ipsum" icon="imagen" />,
    coords: { x: 8, y: 0 },
  },
  {
    component: <Icon key={6} title="Abobe Premiere" icon="imagen" />,
    coords: { x: 9, y: 0 },
  },
  {
    component: <Icon key={6} title="Abobe Premiere" icon="imagen" />,
    coords: { x: 10, y: 0 },
  },
  // COLUMNA 1
  {
    component: <Icon key={8} title="Discawrd" icon="discawrd" />,
    coords: { x: 0, y: 1 },
  },
  {
    component: <Icon key={9} title="Zteam" icon="zteam" />,
    coords: { x: 1, y: 1 },
  },
  {
    component: <Icon key={10} title="WinRawr" icon="winrawr" />,
    coords: { x: 2, y: 1 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 3, y: 1 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 4, y: 1 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 5, y: 1 },
  },
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 9, y: 1 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 10, y: 1 },
  },
  // COLUMNA 2
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 0, y: 2 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 1, y: 2 },
  },
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 2, y: 2 },
  },
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 10, y: 2 },
  },
  // COLUMNA 3
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 0, y: 3 },
  },
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 1, y: 3 },
  },
  // COLUMNA 4
  {
    component: <Icon key={10} icon="carpeta" />,
    coords: { x: 0, y: 4 },
  },
  {
    component: <Icon key={10} icon="imagen" />,
    coords: { x: 1, y: 4 },
  },
];

function Home() {
  return (
    <div className={styles.home}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <Escritorio icons={_ICONS_AND_COORDS} />
      <Bar />
    </div>
  );
}

export default Home;

import { useState, type JSX } from "react";
import { EscritorioStyled } from "./styles";
import Icon from "../Icons";
import ModalPresentacion, {
  type IModalProps,
} from "../modals/modalPresentacion";
import ModalCreditos from "../modals/modalCreditos";
import React from "react";

interface IIconosEscritorio {
  id: number;
  coords: {
    y: number;
    x: number;
  };
  component: JSX.Element;
  modal?: ({ onClose }: IModalProps) => JSX.Element | null;
}

const _ICONS_AND_COORDS_: Array<IIconosEscritorio> = [
  // COLUMNA 0
  {
    id: 0,
    component: <Icon key={0} title="Lorem Ipsun" icon="carpeta" />,
    coords: { x: 0, y: 0 },
  },
  {
    id: 1,
    component: <Icon key={1} title="Lorem Ipsun" icon="imagen" />,
    coords: { x: 1, y: 0 },
  },
  {
    id: 2,
    component: <Icon key={2} title="Ste-trash" icon="papelera" />,
    coords: { x: 2, y: 0 },
  },
  {
    id: 3,
    component: <Icon key={3} title="Gubbul" icon="gugul" />,
    coords: { x: 3, y: 0 },
    modal: (props) => <ModalPresentacion key="m3" {...props} />,
  },
  {
    id: 4,
    component: <Icon key={4} title="Abobe Illustrator" icon="ai" />,
    coords: { x: 4, y: 0 },
  },
  {
    id: 5,
    component: <Icon key={5} title="Abobe Photoshop" icon="ps" />,
    coords: { x: 5, y: 0 },
  },
  {
    id: 6,
    component: <Icon key={6} title="Abobe Premiere" icon="pr" />,
    coords: { x: 6, y: 0 },
  },
  {
    id: 7,
    component: <Icon key={7} title="lorem ipsum" icon="imagen" />,
    coords: { x: 8, y: 0 },
  },
  {
    id: 8,
    component: <Icon key={8} title="Creditos del modelo :3" icon="imagen" />,
    coords: { x: 9, y: 0 },
    modal: (props) => <ModalCreditos key="m8" {...props} />,
  },
  {
    id: 9,
    component: <Icon key={9} title="Hoja de referencia" icon="imagen" />,
    coords: { x: 10, y: 0 },
  },
  // COLUMNA 1
  {
    id: 10,
    component: <Icon key={10} title="Discawrd" icon="discawrd" />,
    coords: { x: 0, y: 1 },
  },
  {
    id: 11,
    component: <Icon key={11} title="Zteam" icon="zteam" />,
    coords: { x: 1, y: 1 },
  },
  {
    id: 12,
    component: <Icon key={12} title="WinRawr" icon="winrawr" />,
    coords: { x: 2, y: 1 },
  },
  {
    id: 13,
    component: <Icon key={13} icon="imagen" />,
    coords: { x: 3, y: 1 },
  },
  {
    id: 14,
    component: <Icon key={14} icon="imagen" />,
    coords: { x: 4, y: 1 },
  },
  {
    id: 15,
    component: <Icon key={15} icon="imagen" />,
    coords: { x: 5, y: 1 },
  },
  {
    id: 16,
    component: <Icon key={16} icon="carpeta" />,
    coords: { x: 9, y: 1 },
  },
  {
    id: 17,
    component: <Icon key={17} icon="imagen" />,
    coords: { x: 10, y: 1 },
  },
  // COLUMNA 2
  {
    id: 18,
    component: <Icon key={18} icon="imagen" />,
    coords: { x: 0, y: 2 },
  },
  {
    id: 19,
    component: <Icon key={19} icon="imagen" />,
    coords: { x: 1, y: 2 },
  },
  {
    id: 20,
    component: <Icon key={20} icon="carpeta" />,
    coords: { x: 2, y: 2 },
  },
  {
    id: 21,
    component: <Icon key={21} icon="carpeta" />,
    coords: { x: 9, y: 2 },
  },
  {
    id: 22,
    component: <Icon key={22} icon="carpeta" />,
    coords: { x: 10, y: 2 },
  },
  // COLUMNA 3
  {
    id: 23,
    component: <Icon key={23} icon="carpeta" />,
    coords: { x: 0, y: 3 },
  },
  {
    id: 24,
    component: <Icon key={24} icon="carpeta" />,
    coords: { x: 1, y: 3 },
  },
  {
    id: 25,
    component: <Icon key={25} icon="carpeta" />,
    coords: { x: 10, y: 3 },
  },
  // COLUMNA 4
  {
    id: 26,
    component: <Icon key={26} icon="carpeta" />,
    coords: { x: 0, y: 4 },
  },
  {
    id: 27,
    component: <Icon key={27} icon="imagen" />,
    coords: { x: 1, y: 4 },
  },
  {
    id: 28,
    component: <Icon key={28} icon="imagen" />,
    coords: { x: 10, y: 4 },
  },
];

const cols: number = 11;
const rows: number = 6;

function Escritorio() {
  const [openModalIndex, setOpenModalIndex] = useState<Array<number>>([]);
  const grid: ({ componente: JSX.Element; id: number } | null)[][] = Array.from(
    { length: rows },
    () => Array.from({ length: cols }, () => null)
  );

  _ICONS_AND_COORDS_.forEach((icon) => {
    if (
      icon.coords.y >= 0 &&
      icon.coords.y < rows &&
      icon.coords.x >= 0 &&
      icon.coords.x < cols
    ) {
      grid[icon.coords.y][icon.coords.x] = {
        componente: icon.component,
        id: icon.id,
      };
    }
  });

  const onDobleClickIcon = (id: number) => {
    setOpenModalIndex((prev) => {
      return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
    });
  };

  const onCloseModal = (id: number) => {
    setOpenModalIndex((prev) => prev.filter((i) => i !== id));
  };

  return (
    <EscritorioStyled>
      {grid.flat().map((c, index) => (
        <React.Fragment key={index}>
          <div onDoubleClick={() => onDobleClickIcon(c!.id)}>
            {c?.componente}
          </div>
          {c && openModalIndex.includes(c.id)
            ? _ICONS_AND_COORDS_[c!.id]?.modal?.({
                onClose: () => {
                  onCloseModal(c!.id);
                },
              })
            : null}
        </React.Fragment>
      ))}
    </EscritorioStyled>
  );
}

export default Escritorio;

import ReactDOM from "react-dom";
import React, { useState, useRef, type JSX } from "react";
import {
  HeaderTabContainer,
  Tab,
  HeaderButton,
  ModalStyled,
  ModalContainer,
  Header,
  ContentPresentacion,
  DecoracionHeader,
} from "./styles";
import SvgComponente from "../Icons/Svg";

const _TABS_: Array<{ name: string }> = [
  { name: "Perfil - Z-03" },
  { name: "Zombiefy" },
  { name: "Deadflix" },
  { name: "Crunchybrain" },
  { name: "Zteam" },
  { name: "Tomblr" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
];

const tabContent: JSX.Element[] = [
  <img key={0} src="/Inforufi.svg" alt="Presentación Rufi Z-03" />,
  <img key={1} src="/zombify.svg" alt="Presentación Rufi Z-03" />,
  <img key={2} src="/pelis.svg" alt="Presentación Rufi Z-03" />,
  <img key={3} src="/anime.svg" alt="Presentación Rufi Z-03" />,
  <img key={4} src="/juegos.svg" alt="Presentación Rufi Z-03" />,
  <img key={5} src="/tomblr1.svg" alt="Presentación Rufi Z-03" />,
];

export interface IModalProps {
  onClose?: () => void;
}

const ModalPresentacion = ({ onClose }: IModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  //------- Drag control -------//

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return ReactDOM.createPortal(
    <ModalStyled
      $positionY={position.y}
      $positionX={position.x}
      onMouseDown={handleMouseDown}
    >
      <ModalContainer>
        <Header>
          <HeaderTabContainer>
            <div className="header-tab-list">
              {_TABS_.map((t, index) => (
                <Tab
                  key={t.name + index}
                  onClick={() => handleTabClick(index)}
                  $active={activeTab === index}
                >
                  {t.name !== "" && <div className="text-tab">{t.name}</div>}
                </Tab>
              ))}
            </div>
            <div className="header-tab-buttons-list">
              <HeaderButton>_</HeaderButton>
              <HeaderButton>▢</HeaderButton>
              <HeaderButton onClick={onClose}>X</HeaderButton>
            </div>
          </HeaderTabContainer>
          <DecoracionHeader>
            <SvgComponente
              svgName="decoracion1"
              width="100%"
              height="100%"
              className="header-decoracion"
            />
          </DecoracionHeader>
        </Header>

        <ContentPresentacion>{tabContent[activeTab]}</ContentPresentacion>
      </ModalContainer>
    </ModalStyled>,
    modalRoot
  );
};

export default ModalPresentacion;

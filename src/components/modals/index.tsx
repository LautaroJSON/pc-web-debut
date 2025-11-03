import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";
import {
  Window,
  Header,
  Content,
  HeaderTabs,
  Tab,
  HeaderButton,
} from "./styles";

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

type ModalProps = {
  title: string;
  onClose: () => void;
};

const Modal = ({ title, onClose }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Drag control

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
    <Window ref={modalRef} positionY={position.y} positionX={position.x}>
      <HeaderTabs onMouseDown={handleMouseDown}>
        <div className="header-tab-list">
          {_TABS_.map((t) => (
            <Tab>
              {t.name != "" && <div className="text-tab">{t.name}</div>}
            </Tab>
          ))}
        </div>
        <div className="header-tab-buttons-list">
          <HeaderButton>_</HeaderButton>
          <HeaderButton>▢</HeaderButton>
          <HeaderButton onClick={onClose}>X</HeaderButton>
        </div>
        {/* <span>{title}</span>
        <CloseBtn onClick={onClose}>✕</CloseBtn> */}
      </HeaderTabs>
      {/* <Header onMouseDown={handleMouseDown}> */}
      {/* <span>{title}</span>
        <CloseBtn onClick={onClose}>✕</CloseBtn> */}
      {/* </Header> */}
      <Content>
        <p>Contenido de {title}</p>
      </Content>
    </Window>,
    modalRoot
  );
};

export default Modal;

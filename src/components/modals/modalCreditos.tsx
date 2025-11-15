import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";
import {
  Content,
  HeaderTabContainer,
  HeaderButton,
  ModalStyled,
  ModalContainer,
  Header,
} from "./styles";
export interface IModalProps {
  onClose?: () => void;
}

const ModalCreditos = ({ onClose }: IModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 });
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
    <ModalStyled
      $positionY={position.y}
      $positionX={position.x}
      onMouseDown={handleMouseDown}
    >
      <ModalContainer>
        <Header>
          <HeaderTabContainer>
            <div className="header-tab-list">
              <span style={{ marginLeft: "12px" }}>Creditos del modelo :3</span>
            </div>
            <div className="header-tab-buttons-list">
              <HeaderButton>_</HeaderButton>
              <HeaderButton>▢</HeaderButton>
              <HeaderButton onClick={onClose}>X</HeaderButton>
            </div>
          </HeaderTabContainer>
        </Header>

        <Content>
          <img src="/creditos.png" alt="Créditos del modelo :3" width="100%" />
        </Content>
      </ModalContainer>
    </ModalStyled>,
    modalRoot
  );
};

export default ModalCreditos;

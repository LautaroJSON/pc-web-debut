import {
  Content,
  HeaderTabContainer,
  HeaderButton,
  ModalStyled,
  ModalContainer,
  Header,
} from "../styles";

import { GetModalroot } from "../../utils";
import { useContext, useEffect, useRef, useState, type JSX } from "react";
import ReactDOM from "react-dom";
import { PopupsContext, PopupsID } from "../../../context";
import { getRandomOperator } from "../../utils/randomOperator";

type PopupDef = {
  imagen: JSX.Element;
  id: PopupsID;
  size: { height: number | null; width: number | null };
  initialPosition: {
    x: number;
    y: number;
  };
};

const _POPUPS_: Record<PopupsID, PopupDef> = {
  [PopupsID.ao3]: {
    imagen: <img src="/AO3.png" alt="Fanfic" width="100%" height="100%" />,
    id: PopupsID.ao3,
    size: {
      height: 800,
      width: null,
    },
    initialPosition: {
      x: 150,
      y: 150,
    },
  },
  [PopupsID.meme]: {
    imagen: <img src="/meme.gif" alt="Fanfic" width="100%" height="100%" />,
    id: PopupsID.meme,
    size: {
      height: 1000,
      width: 1000,
    },
    initialPosition: {
      x: 300,
      y: 30,
    },
  },
  [PopupsID.otrochat]: {
    imagen: <img src="/otrochat.png" alt="Fanfic" width="100%" height="100%" />,
    id: PopupsID.otrochat,
    size: {
      height: 850,
      width: 500,
    },
    initialPosition: {
      x: 500,
      y: 150,
    },
  },
};

const Popups = () => {
  const { deletePopup, popups } = useContext(PopupsContext);
  if (popups === null) return null;

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const [position, setPosition] = useState({
    x: _POPUPS_[popups]?.initialPosition.x,
    y: _POPUPS_[popups]?.initialPosition.y,
  });
  const trys = useRef(4);

  const tryDeletedPopup = () => {
    if (trys.current === 0) {
      deletePopup();
      setPosition({ x: 150, y: 150 });
      trys.current = 4;
    } else {
      trys.current -= 1;
      const operator = getRandomOperator();
      const xOffset = operator === "+" ? 100 : -100;
      const yOffset = operator === "+" ? 100 : -35;

      setPosition((prev) => ({
        x: prev.x + xOffset,
        y: prev.y + yOffset,
      }));
    }
  };

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

  useEffect(() => {
    if (popups === null) return;
    const initial = _POPUPS_[popups].initialPosition;
    setPosition({ x: initial.x, y: initial.y });
    trys.current = 4; // si quieres reiniciar intentos al abrir un popup nuevo
  }, [popups]);

  return popups !== null
    ? ReactDOM.createPortal(
        <ModalStyled
          $positionY={position.y}
          $positionX={position.x}
          onMouseDown={handleMouseDown}
        >
          <ModalContainer
            $height={_POPUPS_[popups]?.size.height ?? undefined}
            $width={_POPUPS_[popups]?.size.width ?? undefined}
          >
            <Header>
              <HeaderTabContainer>
                <div className="header-tab-list">
                  <span style={{ marginLeft: "12px" }}>Fanfics :3</span>
                </div>
                <div className="header-tab-buttons-list">
                  <HeaderButton>_</HeaderButton>
                  <HeaderButton>▢</HeaderButton>
                  <HeaderButton onClick={() => tryDeletedPopup()}>
                    X
                  </HeaderButton>
                </div>
              </HeaderTabContainer>
            </Header>

            <Content>{_POPUPS_[popups]?.imagen}</Content>
          </ModalContainer>
        </ModalStyled>,
        GetModalroot()!
      )
    : null;
};

export default Popups;

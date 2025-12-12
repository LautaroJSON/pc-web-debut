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
  sound: {
    url: string;
    loop: boolean;
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
    sound: {
      url: "/sounds/pop.mp3",
      loop: false,
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
    sound: {
      url: "/sounds/10000-hz.mp3",
      loop: true,
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
    sound: {
      url: "/sounds/pop.mp3",
      loop: false,
    },
  },
  [PopupsID.ad]: {
    imagen: (
      <video
        src="/Secuencia 01_14.mp4"
        controls
        preload="metadata"
        style={{
          // position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    ),
    id: PopupsID.ad,
    size: {
      height: null,
      width: null,
    },
    initialPosition: {
      x: 0,
      y: 0,
    },
    sound: {
      url: "/sounds/pop.mp3",
      loop: false,
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
  const trys = useRef(3);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [shake, setShake] = useState(false);

  const tryDeletedPopup = () => {
    if (trys.current === 0) {
      deletePopup();
      //al cerrar
      setPosition({ x: 150, y: 150 });
      trys.current = 4;
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        } catch (e) {
          /* noop */
        }
        audioRef.current = null;
      }
    } else {
      trys.current -= 1;
      // reproducir sonido de error en cada intento fallido
      try {
        const errAudio = new Audio("/sounds/erro.mp3");
        errAudio.volume = 0.6;
        // reproducir sin bloquear (catch por políticas de autoplay)
        errAudio.play().catch(() => {});
      } catch (e) {
        /* noop */
      }
      // activar animación de temblor
      setShake(true);
      // limpiar después de la animación
      setTimeout(() => setShake(false), 300);

      // calcular offsets, pero asegurarnos de que la nueva Y no sea negativa.
      setPosition((prev) => {
        let operator = getRandomOperator();
        let xOffset = operator === "+" ? 100 : -100;
        let yOffset = operator === "+" ? 100 : -35;

        // si al aplicar yOffset la y fuera negativa, invertimos el operador
        if (prev.y + yOffset < 0) {
          operator = operator === "+" ? "-" : "+";
          xOffset = operator === "+" ? 100 : -100;
          yOffset = operator === "+" ? 100 : -35;
        }

        return {
          x: prev.x + xOffset,
          y: Math.max(0, prev.y + yOffset),
        };
      });
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
    const def = _POPUPS_[popups];
    if (popups !== null && def && def.sound?.url) {
      const audio = new Audio(def.sound.url);
      audio.loop = !!def.sound.loop;
      // volumen por defecto, ajustable
      audio.volume = 0.5;
      // intentar reproducir (podría fallar por autoplay policies)
      audio.play().catch(() => {
        // si falla, no hacemos nada; el usuario probablemente necesite interactuar
      });
      audioRef.current = audio;
    }
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
            $shake={shake}
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

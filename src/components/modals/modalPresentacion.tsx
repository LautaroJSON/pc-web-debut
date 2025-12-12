import ReactDOM from "react-dom";
import React, { useState, useRef, type JSX, useContext } from "react";
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
import { TomblrComponent } from "../../assets/icons/tomblr";
import { TomblrHobbies } from "../../assets/icons/tomblrHobbies";
import { TomblrFunfacts } from "../../assets/icons/tomblrFunfacts";
import { TomblrGustos } from "../../assets/icons/tomblrGustos";
import { TomblrMetas } from "../../assets/icons/tomblrMetas";
import { GetModalroot } from "../utils";
import { PopupsContext, PopupsID } from "../../context";

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

export interface IModalProps {
  onClose?: () => void;
}

export type tabsOptions = "uno" | "metas" | "hobbies" | "funfacts" | "gustos";

const ModalPresentacion = ({ onClose }: IModalProps) => {
  const { addPopup } = useContext(PopupsContext);

  const tabContent: JSX.Element[] = [
    <img key={0} src="/Inforufi.svg" alt="Presentación Rufi Z-03" />,
    <img key={1} src="/zombify.svg" alt="Presentación Rufi Z-03" />,
    <img key={2} src="/pelis.svg" alt="Presentación Rufi Z-03" />,
    <img key={3} src="/anime.svg" alt="Presentación Rufi Z-03" />,
    <img key={4} src="/juegos.svg" alt="Presentación Rufi Z-03" />,
  ];

  const tomblrTabContent: Record<tabsOptions, JSX.Element> = {
    uno: (
      <TomblrComponent
        className="class-tomblr-2"
        onClick={(name: tabsOptions) => setActiveSubTab(name)}
      />
    ),
    hobbies: (
      <TomblrHobbies
        onClick={(name: tabsOptions) => setActiveSubTab(name)}
        className="class-tomblr-2"
      />
    ),
    funfacts: (
      <TomblrFunfacts
        onClick={(name: tabsOptions) => setActiveSubTab(name)}
        className="class-tomblr-2"
      />
    ),
    gustos: (
      <TomblrGustos
        onClick={(name: tabsOptions) => setActiveSubTab(name)}
        className="class-tomblr-2"
      />
    ),
    metas: (
      <TomblrMetas
        onClick={(name: tabsOptions) => setActiveSubTab(name)}
        className="class-tomblr-2"
      />
    ),
  };

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });

  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<tabsOptions>("uno");

  const handleTabClick = (index: number) => {
    if (index === 6) {
      addPopup(PopupsID.ad);
    }

    if (index > 5) return;

    if (index === 1) {
      addPopup(PopupsID.ao3);
    } else if (index === 5) {
      addPopup(PopupsID.otrochat);
    } else if (index === 3) {
      addPopup(PopupsID.meme);
    }

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
        <ContentPresentacion>
          {activeTab === 5
            ? tomblrTabContent[activeSubTab]
            : tabContent[activeTab]}
        </ContentPresentacion>
      </ModalContainer>
    </ModalStyled>,
    GetModalroot()!
  );
};

export default ModalPresentacion;

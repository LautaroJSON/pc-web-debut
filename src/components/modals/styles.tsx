import styled from "styled-components";

interface ModalProps {
  $positionY: number;
  $positionX: number;
}

export const ModalStyled = styled.div<ModalProps>`
  position: absolute;
  top: ${({ $positionY }) => $positionY}px;
  left: ${({ $positionX }) => $positionX}px;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -15px;
    width: 100%;
    height: 100%;
    border: 4px solid var(--color-border);

    background-color: var(--color-medium-light);
    border-radius: 24px;
    z-index: -1;
  }
`;

export const ModalContainer = styled.div<{ $width?: number; $height?: number }>`
  width: ${(props) => (props.$width ? props.$width + "px" : "1480px")};
  height: ${(props) => (props.$height ? props.$height + "px" : "910px")};
  /* background: #ffffff; */
  border: 4px solid var(--color-border);
  overflow: hidden;

  border-radius: 26px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  position: relative;
  z-index: 3;
`;

export const HeaderTabContainer = styled.div`
  height: 55px;
  width: 100%;
  background-color: var(--color-header-light);
  border-bottom: 4px solid var(--color-border);

  display: grid;
  grid-template-columns: auto 170px;
  align-items: center;

  .header-tab-list {
    display: flex;
    width: 100%;
  }

  .header-tab-buttons-list {
    display: flex;
    justify-content: center;
    gap: 2px;
  }
`;

export const HeaderButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--color-background);

  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid var(--color-border);
  border-radius: 10px;
  cursor: pointer;

  font-weight: bold;
`;

export const Tab = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0px 12px 0px 12px;
  border-right: 3px solid var(--color-border);
  height: 34px;
  min-width: fit-content;
  cursor: pointer;

  .text-tab {
    margin-right: 12px;
  }
  &::after {
    content: "X";
    cursor: pointer;
    font-weight: bold;
    color: var(--color-border);
  }
`;

export const Content = styled.div``;

export const DecoracionHeader = styled.div`
  position: absolute;
  width: 100%;

  top: 40px;
  left: 0;
  z-index: -1;
`;

export const ContentPresentacion = styled.div`
  position: absolute;
  width: calc(100% - 8px);
  top: 10px;
  z-index: -1;
`;

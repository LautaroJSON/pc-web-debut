import styled from "styled-components";

interface WindowProps {
  positionY: number;
  positionX: number;
}

export const Window = styled.div<WindowProps>`
  position: absolute;
  top: ${({ positionY }) => positionY}px;
  left: ${({ positionX }) => positionX}px;

  width: 1600px;
  height: 780px;
  background: #ffffff;
  border: 4px solid var(--color-border);
  overflow: hidden;

  border-radius: 26px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: violet;
  /* border-radius: 13px; */

  color: white;
  padding: 8px 12px;
  /* z-index: -1; */
  /* border-bottom: 2px solid #c49edb; */
  font-weight: bold;
`;

export const HeaderTabs = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--color-header-light);
  border-bottom: 4px solid var(--color-border);

  display: grid;
  grid-template-columns: auto 200px;
  align-items: center;

  .header-tab-list {
    display: flex;
    width: 100%;
  }

  .header-tab-buttons-list {
    display: flex;
    justify-content: center;
    gap: 5px;
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

export const Content = styled.div`
  padding: 15px;
`;

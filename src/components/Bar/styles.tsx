import styled from "styled-components";

export const BarContainer = styled.div`
  background-color: #6d5c8e; /* color violeta */
  width: 100%;
  height: 60px;
  position: relative;

  display: grid;
  grid-template-columns: 85px auto;
  gap: 35px;

  .winIcon {
    width: 85px;
    height: 85px;
    position: relative;
    bottom: 28px;
    left: 12px;
  }
`;

export const AppsContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;

  width: auto;
  height: 60px;

  .appsClass {
    width: 40px;
    height: 40px;
  }
`;

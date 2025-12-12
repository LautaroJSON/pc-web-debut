import styled from "styled-components";

export const IconContainer = styled.div<{ $Width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const IconBox = styled.div`
  /* background-color: blue; */
`;

export const Title = styled.div`
  width: 130px;
  text-align: center;
  /* text-shadow: 1px 1px 10px rgba(255, 255, 255, 1); */

  text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff,
    -1px -1px 0 #fff;
`;

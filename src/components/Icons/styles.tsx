import styled from "styled-components";

export const IconContainer = styled.div<{ $Width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  width: ${(props) => `calc(${props.$Width} + 60px)`};
  height: ${(props) => `calc(${props.$Width} + 40px)`};

  /* background-color: red; */
`;

export const IconBox = styled.div`
  /* background-color: blue; */
`;

export const Title = styled.div`
  width: 130px;
  text-align: center;
`;

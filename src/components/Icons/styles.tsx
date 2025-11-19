import styled from "styled-components";

export const IconContainer = styled.div<{ $Width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* padding: 10px;
  margin: 5px; */
  /* margin-left: 10px; */
  /* width: ${(props) => `calc(${props.$Width} + 60px)`}; */
  /* height: ${(props) => `calc(${props.$Width} + 40px)`}; */

  /* background-color: #ffaff467; */
`;

export const IconBox = styled.div`
  /* background-color: blue; */
`;

export const Title = styled.div`
  width: 130px;
  text-align: center;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 1);
`;

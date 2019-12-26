import styled from "styled-components";

export const Container = styled.div`
  height: calc(170px - 10px - 10px);
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border: 1px solid rgba(53, 66, 84, 0.12);
  box-sizing: border-box;
`;

export const TextDay = styled.div`
  font-family: Poppins;
  font-size: 18px;
  font-weight: bold;
  color: #354254;
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
`;

export const Degrees = styled.div`
  height: 17px;
  width: fit-content;
  color: #848588;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 18px;
`;

import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 70px - 30px - 30px);
  width: calc(100% - 30px - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap:wrap;
  padding: 30px;
`;

export const Item = styled.div`
  height: 220px;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border: 1px solid rgba(53, 66, 84, 0.12);
  box-sizing: border-box;
`;

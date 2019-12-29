import styled from "styled-components";

export const Container = styled.div`
  /* height: calc(100% - 70px - 30px - 30px); */
  width: calc(100% - 30px - 30px);
  display: flex;
  flex-wrap:wrap;
  padding: 30px;
  @media (max-width: 760px) {
    height: fit-content;
    width: fit-content;
    justify-content: center;
  }
`;




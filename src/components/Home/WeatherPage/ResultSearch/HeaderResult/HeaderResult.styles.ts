import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  @media (max-width: 760px) {
    height: fit-content;
    flex-direction: column-reverse;
  }
`;

export const RightContainer = styled.div`
  height: 30px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    margin-top: 10px;
  }
`;

export const Icon = styled.img`
   height:24px;
   width:24px;
`;

export const ButtonFavorites = styled.div`
  height:30px;
  width:130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #69e781;
  border: none;
  border-radius: 3px;
  opacity:0.3;
  cursor: pointer;
  &:hover{
    opacity:1; 
  }
`;

export const Text = styled.div`
  color: #0b2239;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

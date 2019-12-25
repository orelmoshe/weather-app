import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const RightContainer = styled.div`
  height: 30px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
   height:24px;
   width:24px;
`;

export const ButtonFavorites = styled.div`
  height:30px;
  width:160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #69e781;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
      opacity:0.3;
  }
`;

export const Text = styled.div`
  color: #0b2239;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

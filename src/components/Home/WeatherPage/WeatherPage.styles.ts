import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 70px - 30px - 30px);
  width: calc(100% - 30px - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const SearchInputContainer = styled.div`
  height: 56px;
  width: 812px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(53, 66, 84, 0.12);
  border-radius: 4px;
  background-color: #ffffff;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: calc(812px - 24px - 15px);
  border: none;
  padding: 0 10px;
  opacity: 0.38;
  color: #354254;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;

  &::-webkit-input-placeholder {
    color: rgba(53, 66, 84, 0.38);
  }
`;

export const IconSearch = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 15px;
`;

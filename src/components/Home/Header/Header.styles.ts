import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: calc(100% - 10px - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 5px 0 rgba(25, 148, 192, 0.05);
`;

export const ContainerMiddle = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Text = styled.div`
  width: fit-content;
  color: #015369;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.07px;
  line-height: 21px;
`;

export const NavigationContainer = styled.div`
  height: fit-content;
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ButtonProps {
	clicked?: boolean;
}

export const Button = styled.div<ButtonProps>`
  height: 56px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(53, 66, 84, 0.12);
  border-radius: 4px;
  background-color: ${props => props.clicked? '#ffcb05' :'#ffffff'};
  cursor: pointer;
  &:hover {
    opacity: 0.3;
    background-color: #ffcb05;
    box-shadow: 0 0 4px 0 rgba(53, 66, 84, 0.12);
  }
`;

export const TextButton = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.07px;
`;

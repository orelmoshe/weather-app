import styled from "styled-components";
interface ContainerProps {
  width: string;
  height: string;
}
export const Container = styled.div<ContainerProps>`
  height: ${props =>props.height};
  min-width: ${props => props.width};
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border: 1px solid rgba(53, 66, 84, 0.12);
  box-sizing: border-box;
`;

export const Title = styled.div`
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

export const TextWeather = styled.div`
  color: #848588;
  font-family: Poppins;
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 18px;
`;

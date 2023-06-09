import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: 0;
  font-size: 60px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Button = styled.button`
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  :active {
    color: white;
    background-color: black;
  }
`;
export const Statistic = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
  text-decoration: underline;
`;
export const CountItem = styled.span`
  display: block;
  font-size: 20px;
`;

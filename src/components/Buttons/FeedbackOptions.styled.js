import styled from 'styled-components';

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

  text-transform: uppercase;
  font-weight: 700;

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

import styled from "@emotion/styled";

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 0;

  li {
    list-style-type: none; 
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: grey;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: blue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`
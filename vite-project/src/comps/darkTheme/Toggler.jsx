import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 40px;
  font-size: 0.8rem;
`;
const Toggler = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch {theme} theme</Button>;
};

export default Toggler;

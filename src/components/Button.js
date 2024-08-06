import styled from 'styled-components';

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: darken(${({ theme }) => theme.colors.primary}, 10%);
  }
`;

export default Button;

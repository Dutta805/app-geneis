import styled from 'styled-components';
import theme from '../lib/theme';

const LoginBoxWrapper = styled.div`
  font-family: 'lato', serif;
  color: ${() => theme.black};
  background-color: ${() => theme.darkenWhite};

  display: flex;
  justify-content: center;
  height: 100vh;
  min-height: 480px;
  align-items: center;
`;

export { LoginBoxWrapper };

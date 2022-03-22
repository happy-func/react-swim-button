import styled, { css } from 'styled-components';

const StyledButtonWave = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  ${(props) =>
    props.theme.active &&
    css`
      background-color: #fff;
    `}
`;

export default StyledButtonWave;

import styled, { css } from 'styled-components';

const StyledButtonWave = styled.div`
  position: absolute;
  top: -1px;
  height: calc(100% + 2px);
  background-color: ${(props) => props.theme.primary};
  ${(props) =>
    props.theme.active &&
    css`
      background-color: #fff;
    `}
`;

export default StyledButtonWave;

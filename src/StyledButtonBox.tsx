import styled, { css } from 'styled-components';

const StyledButtonBox = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 48px;
  padding: 0 24px;
  overflow: hidden;
  color: #858b9b;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(188, 193, 205, 0.3);
  cursor: pointer;
  transition-timing-function: ease;
  transition-duration: 0.25s;
  transition-property: color;
  user-select: none;
  &:hover {
    color: #fff;
  }
  ${(props) =>
    props.theme.active &&
    css`
      color: #fff;
      background-color: ${(props) => props.theme.primary};
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        border-color: ${props.theme.primary};
        border-style: solid;
        border-width: 1px;
        border-radius: 4px;
        content: '';
      }
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    `}
`;

export default StyledButtonBox;

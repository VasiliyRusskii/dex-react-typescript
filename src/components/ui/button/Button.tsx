import styled from "styled-components";

export interface IButtonsProps {
  expanded?: boolean;
}

export const Button = styled.button<IButtonsProps>`
  background: ${(props) => props.theme.colors.red};
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 24px;

  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  line-height: 24px;

  ${(p) =>
    p.expanded
      ? `
      display: flex;
      width: 100%;
    `
      : `
      display: inline-flex;
    `};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.lightRed};
  }

  &:active {
    background: ${(props) => props.theme.colors.darkRed};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.lightestGrey1};
    color: ${(props) => props.theme.colors.lightestGrey};
  }
`;

import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: ReactNode;
  label?: string;
  error?: string;
}

export const Input = ({ error, icon, label, ...props }: IInputProps) => {
  return (
    <Root>
      {label && <Label>{label}</Label>}

      <Wrapper error={!!error}>
        <InputContainer {...props} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Wrapper>

      {error && <Error>{error}</Error>}
    </Root>
  );
};

const Root = styled.div``;
const Label = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.grey};
`;

const Error = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightestRed};
  line-height: 18px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const Wrapper = styled.div<{ error: boolean }>`
  background: ${(props) => props.theme.colors.lightestGrey1};
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: ${({ error }) => (error ? "1px solid #FF768E" : "none")};

  width: 100%;
  height: 32px;
  color: ${(props) => props.theme.colors.darkGrey};
  padding: 0 12px;
  line-height: 24px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.lightestGrey};
    ${IconWrapper} {
      stroke: ${(props) => props.theme.colors.lightestGrey1};
    }
  }

  &:focus {
    background: ${(props) => props.theme.colors.lightestGrey1};
    box-shadow: 0px 0px 5px #d9d9d9;
    outline: none;
  }

  &:disabled {
    color: ${(props) => props.theme.colors.lightestGrey};

    &::placeholder {
      color: ${(props) => props.theme.colors.lightestGrey};
    }
  }
`;

const InputContainer = styled.input`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  display: block;

  padding: 0;
  margin: 0;
  outline: none;
  font: inherit;
  min-width: 2px;
  color: currentColor;
  caret-color: currentColor;

  ::placeholder {
    font: inherit;
  }
`;

// const InputWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: ${styledTheming.colors.darkGrey};
//   background: ${styledTheming.colors.lightestGrey1};
//   width: 100%;
//   height: 40px;
//   padding: 0 12px;
//   border: 0;
//   border-radius: 4px;
// `;

// const IconWrapper = styled.div`

// `;

// const StyledInput = styled.input`
//   width: 100%;
//   height: 100%;
//   background: transparent;
//   border: none;

//   &:focus {
//     outline: none;
//   }
// `;

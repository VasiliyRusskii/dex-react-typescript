import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";


export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: ReactNode;
  label?: string;
}

export const Input = ({ icon, label, ...props }: IInputProps) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
    
    <Wrapper>
      <InputContainer {...props} />
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}
    </Wrapper>

    </div>
  );
};

const Label = styled.div``;

const Wrapper = styled.div`
  background: ${theme.colors.lightestGrey1};
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 0;
  width: 100%;
  height: 40px;
  color: ${theme.colors.darkGrey};
  padding: 8px 0px 8px 12px;
  line-height: 24px;
  font-weight: 500;

  &:hover:not(:disabled) {
    background: ${theme.colors.lightestGrey};
  }

  &:focus {
    background: ${theme.colors.lightestGrey1};
    box-shadow: 0px 0px 5px #d9d9d9;
    outline: none;
  }

  &:disabled {
    color: ${theme.colors.lightestGrey};

    &::placeholder {
      color: ${theme.colors.lightestGrey};
    }
  }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;


const InputContainer = styled.input`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  display: block;
  appearance: none;
  padding: 0;
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

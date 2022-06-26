import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: ReactNode;
  label?: string;
  error?: string;
  className?: string;
}

export const Input = ({ error, icon, label, className, ...props }: IInputProps) => {
  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}

      <InputWrapper error={!!error}>
        <StyledInput {...props} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>

      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Label = styled.div`
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

const InputWrapper = styled.div<{ error: boolean }>`
  background: ${(props) => props.theme.colors.lightestGrey1};
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: ${({ error }) => (error ? "1px solid #FF768E" : "none")};

  height: 40px;
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

const StyledInput = styled.input`
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

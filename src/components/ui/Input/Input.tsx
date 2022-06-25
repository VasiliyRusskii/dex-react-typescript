import React from "react";
import styled from "styled-components";
import { styledTheming } from "../../../assets/styles/styledTheming";


export const Input = () => {

  return (
    <InputContainer placeholder="login" disabled/>
  );
};

const InputContainer = styled.input`
    background: ${styledTheming.colors.lightestGrey1};
    border-radius: 4px;
    border: 0;
    width: 366px;
    height: 40px;
    color: ${styledTheming.colors.darkGrey};
    padding: 8px 0px 8px 12px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;

    &:hover {
        background: ${styledTheming.colors.lightestGrey};
    }

    &:focus {
        background: ${styledTheming.colors.lightestGrey1};
        box-shadow: 0px 0px 5px #D9D9D9;
        outline: none;
    }

    &:disabled {
        color: ${styledTheming.colors.lightestGrey};
        &::placeholder {
            color: ${styledTheming.colors.lightestGrey};
        }
        &:hover {
            color: ${styledTheming.colors.lightestGrey1};

            &::placeholder {
            color: ${styledTheming.colors.lightestGrey1};
        }
        }
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

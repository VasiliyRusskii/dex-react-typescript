import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled, {createGlobalStyle} from "styled-components"

import {InputCss} from "./style"
import {theme} from "../../assets/theme/theme"

const logo =  require("../../assets/icons/EyeIcon.png")

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((params, ref) => {
    const [type, setType] = useState(params.type);

    return (
        <Container>
            <Label>{params.label}</Label>
            <InputContainer>
                <Icon>
                    <EyeIcon src={logo}/>
                </Icon>
            </InputContainer>
        </Container>
    );
});

const Container = styled.div`
    position: relative;
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: auto;
`;

const Label = styled.label`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: ${ theme.colors.grey };
    margin-bottom: 8px;
`;

const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
`;

const Icon = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 12px;
`;

const EyeIcon = styled.img`
    object-fit: cover;
`;

const CustomInput = styled.input<{
    inputDisable: boolean | undefined;
    error?: string;
}>`
    
`;
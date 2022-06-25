import React from "react";
import styled from "styled-components";

import { SearchIcon } from "../../../assets/icons/SearchIcon";
import { theme } from "../../../assets/theme/theme";

export const SearchInput = () => {
    return (
        <InputWrapper>
            <Input placeholder="Search..." />
                <IconWrapper>
                    <SearchIcon />
                </IconWrapper>
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    width: 366px;
    min-height: 40px;
    padding: 0 12px;
    border: 0.5px solid ${theme.colors.lightestGrey};
    border-radius: 4px;
`;

const Input = styled.input`
    width: 100%;
    background: transparent;
    line-height: 24px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

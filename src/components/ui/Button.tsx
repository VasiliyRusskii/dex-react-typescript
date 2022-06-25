import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

export const Button = styled.button`
    font-size: 15px;
    background: ${theme.colors.red};
    width: 365px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    line-height: 24px;

    &:hover {
        background: ${theme.colors.lightRed};
    }

    &:active {
        background: ${theme.colors.darkRed};
    }

    &:disabled {
        background: ${theme.colors.lightestGrey1};
        color: ${theme.colors.lightestGrey};
    }
`;

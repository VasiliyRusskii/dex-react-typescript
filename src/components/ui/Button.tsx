import styled from "styled-components";
import { styledTheming } from "../../assets/styles/styledTheming";

export const Button = styled.button`
    font-size: 15px;
    background: ${styledTheming.colors.red};
    width: 365px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${styledTheming.colors.white};
    line-height: 24px;

    &:hover {
        background: ${styledTheming.colors.lightRed};
    }

    &:active {
        background: ${styledTheming.colors.darkRed};
    }

    &:disabled {
        background: ${styledTheming.colors.lightestGrey1};
        color: ${styledTheming.colors.lightestGrey};
    }
`;

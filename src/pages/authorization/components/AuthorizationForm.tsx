import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/ui/button/Button";
import { Input } from "../../../components/ui/Input/Input";
import { ReactComponent as EyeIcon } from "../../../assets/icons/eyeIcon.svg";
import { ReactComponent as GroupLogin } from "../../../assets/icons/groupLogin.svg";
import { FormState, UseFormHandleSubmit } from "react-hook-form";


export const AuthorizationForm = () => {
    return (
        <Wrapper>
            <Form>
                <Input
                    label={"Login"}
                    placeholder="Enter your username"
                />
                <Input
                    error="Request error"
                    label={"Password"}
                    placeholder="Enter your password"
                    icon={<EyeIcon />}
                />
                <Button >Sign In</Button>
            </Form>
            <Background>
                <WrapperGroup>
                    <GroupLogin/>
                </WrapperGroup>
            </Background>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    
`;

const Background = styled.div`
    background: ${props => props.theme.colors.lightBlue};
`;

const WrapperGroup = styled.div`
    
`;

const Form = styled.div`
    max-width: 366px;
    
`;

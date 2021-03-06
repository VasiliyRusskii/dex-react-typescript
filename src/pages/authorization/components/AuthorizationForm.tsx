import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/ui/button/Button";
import { Input } from "../../../components/ui/Input/Input";
import { ReactComponent as EyeIcon } from "../../../assets/icons/EyeIcon.svg";
import { ReactComponent as GroupLogin } from "../../../assets/icons/groupLogin.svg";

export const AuthorizationPage = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Sign In</Title>
        <StyledInput label={"Login"} placeholder="Enter your username" />
        <Input label={"Password"} placeholder="Enter your password" icon={<EyeIcon />} />
        <ButtonWrapper>
          <Button expanded>Sign In</Button>
        </ButtonWrapper>
        <SignUp>
          Not a member yet? <SignUpSpan>Sign up</SignUpSpan>
        </SignUp>
      </Form>
      <Background>
        <WrapperGroup>
          <GroupLogin />
        </WrapperGroup>
      </Background>
    </Wrapper>
  );
};

const StyledInput = styled(Input)`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue};
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  display: none;
  background: ${(props) => props.theme.colors.lightBlue};
`;

const WrapperGroup = styled.div``;

const Form = styled.div`
  width: 100%;
  margin-left: 24px;
  margin-right: 24px;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

const SignUp = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
`;

const SignUpSpan = styled.span`
  color: ${(props) => props.theme.colors.red};
  text-decoration: underline;
`;

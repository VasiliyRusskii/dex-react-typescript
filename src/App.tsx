import React from "react";
import { Input } from "./components/ui/Input/Input";
import { Button } from "./components/ui/button/Button";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";
import { GlobalStyles } from "./assets/theme/global"
import { ReactComponent as SearchIcon } from "../src/assets/icons/search.svg"
import { AuthorizationForm } from "./pages/authorization/components/AuthorizationForm";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Root>
      <GlobalStyles/>
      <AuthorizationForm/>
    </Root>
    </ThemeProvider>
  );
}

const Root = styled.div``

export default App;

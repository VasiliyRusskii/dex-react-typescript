import React from "react";
import { Input } from "./components/ui/Input/Input";
import { Button } from "./components/ui/button/Button";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";
import { GlobalStyles } from "./assets/theme/global";
import { ReactComponent as SearchIcon } from "../src/assets/icons/search.svg"


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Root>
      <GlobalStyles />
      <Input label={"Login"} placeholder="placeholder" icon={<SearchIcon />} />
      <Button expanded >Sign In</Button>
      <Button >Sign In</Button>
    </Root>
    </ThemeProvider>
  );
}

const Root = styled.div``

export default App;

import React from "react";
import { Input } from "./components/ui/Input/Input";
import { Button } from "./components/ui/Button";
import { SearchInput } from "./components/ui/Input/SearchInput";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Root>
      <Input/>
      <Button >Sign In</Button>
      <SearchInput/>
    </Root>
    </ThemeProvider>
  );
}

const Root = styled.div``

export default App;

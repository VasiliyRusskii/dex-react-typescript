import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/theme/global";
import { theme } from "./assets/theme/theme";
import { AuthorizationPage } from "./pages/authorization/components/AuthorizationForm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthorizationPage/>
    </ThemeProvider>
  );
}

export default App;

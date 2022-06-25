import React from "react";
import { Input } from "./components/ui/Input/Input";
import { Button } from "./components/ui/Button";
import { SearchInput } from "./components/ui/Input/SearchInput";


function App() {
  return (
    <div className="App">
      <h1>AvenirTest</h1>
      <Input/>
      <Button >Sign In</Button>
      <SearchInput/>
    </div>
  );
}

export default App;

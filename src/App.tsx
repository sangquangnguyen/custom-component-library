import React from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App" style={{ margin: 50 }}>
      <h1 className="font-medium leading-tight text-2xl mt-0 mb-2 text-primary-500">
        TextField
      </h1>
      <TextField
        label="Email"
        placeholder="test@example.com"
        description="Personal Email"
      />
      <br />
      <h1 className="font-medium leading-tight text-2xl mt-0 mb-2 text-primary-500">
        Button
      </h1>
      <Button>Button ABC</Button>
    </div>
  );
}

export default App;

import React from "react";
import Button from "./components/Button";
import { ComboBox, Item } from "./components/SelectComponent";
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
      <h1 className="font-medium leading-tight text-2xl mt-4 mb-2 text-primary-500">
        Button
      </h1>
      <Button>Button ABC</Button>
      <h1 className="font-medium leading-tight text-2xl mt-4 mb-2 text-primary-500">
        ComboBox
      </h1>
      <ComboBox label="Animal">
        <Item key="red_panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
    </div>
  );
}

export default App;

import React from "react";
import Button from "./components/Button";
import { ComboBox, Item } from "./components/SelectComponent";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App" style={{ margin: 50 }}>
      <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-primary-500">
        TextField
      </h1>
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">
        Basic usage
      </h2>
      <TextField
        label="Email"
        placeholder="test@example.com"
        description="Personal Email"
      />
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">Disabled</h2>
      <TextField label="Email" placeholder="test@example.com" isDisabled />
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">
        With Error
      </h2>
      <TextField
        label="Email"
        errorMessage="Email is invalid"
        value="sang.nguyen"
        invalid={true}
      />

      <h1 className="font-medium leading-tight text-3xl mt-4 mb-2 text-primary-500">
        Button
      </h1>
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">
        Basic usage
      </h2>
      <Button>Click me</Button>
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">
        With intent
      </h2>
      <div className="flex">
        <Button intent="success" className="mr-3">
          Success
        </Button>
        <Button intent="error" className="mr-3">
          Error
        </Button>
        <Button isDisabled className="mr-3">
          Disabled
        </Button>
        <Button isLoading className="mr-3">
          Loading
        </Button>
        <Button isLoading intent="success" className="mr-3">
          Loading Success
        </Button>
        <Button isLoading intent="error">
          Loading Error
        </Button>
      </div>

      <h1 className="font-medium leading-tight text-3xl mt-4 mb-2 text-primary-500">
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

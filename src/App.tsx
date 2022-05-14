import React, { Key } from "react";
import Button from "./components/Button";
import { ComboBox } from "./components/Dropdown";
import { Select, Item } from "./components/Dropdown";
import TextField from "./components/TextField";

function App() {
  const [theme, setTheme] = React.useState<Key>("default");
  const handleThemeChange = (option: Key) => {
    setTheme(option);
  };
  return (
    <div className={`App ${theme}`} style={{ margin: 50 }}>
      <Select
        label="Theme"
        onSelectionChange={handleThemeChange}
        defaultSelectedKey={theme}
      >
        <Item key="default">Theme Default</Item>
        <Item key="theme-eh">Theme EH</Item>
        <Item key="theme-neon">Theme Neon</Item>
        <Item key="theme-helios">Theme Helios</Item>
      </Select>
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
      <div className="flex">
        <Button>Filled Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
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
      <div className="flex">
        <Button intent="success" className="mr-3" variant="link">
          Success
        </Button>
        <Button intent="error" className="mr-3" variant="link">
          Error
        </Button>
        <Button isDisabled className="mr-3" variant="link">
          Disabled
        </Button>
        <Button isLoading className="mr-3" variant="link">
          Loading
        </Button>
        <Button isLoading intent="success" className="mr-3" variant="link">
          Loading Success
        </Button>
        <Button isLoading intent="error" variant="link">
          Loading Error
        </Button>
      </div>

      <h1 className="font-medium leading-tight text-3xl mt-4 mb-2 text-primary-500">
        Dropdown
      </h1>
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">Combobox</h2>
      <ComboBox label="Animal">
        <Item key="red_panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
      <h2 className="font-medium leading-tight text-xl mt-1 mb-1">Select</h2>
      <Select label="Animal">
        <Item key="red_panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </Select>
    </div>
  );
}

export default App;

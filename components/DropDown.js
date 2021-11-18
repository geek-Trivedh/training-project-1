import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";

export default function DropDown(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      zIndex={1000}
      zIndexInverse={1000}
      value={props.value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(text) => {
        console.log(text);
        props.onChangeValue();
      }}
    />
  );
}

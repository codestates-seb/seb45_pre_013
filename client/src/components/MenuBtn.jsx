import { Menubtn, MenuLine } from "@/styles/MenuBtnStyle";
import { useState } from "react";

const MenuBtn = () => {
  const [val, setValue] = useState(0);
  const change = () => {
    if (!val) {
      setValue(45);
    } else {
      setValue(0);
    }
  };

  return (
    <Menubtn onClick={change}>
      <MenuLine age={-val} y={val} />
      <MenuLine dp={val && "none"} />
      <MenuLine age={val} y={-val} />
    </Menubtn>
  );
};

export default MenuBtn;

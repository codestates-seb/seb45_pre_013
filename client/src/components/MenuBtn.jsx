import { Menubtn, MenuLine } from "@/styles/MenuBtnStyle";
import { useState } from "react";

const MenuBtn = () => {
  const [val, setVal] = useState(0);
  const change = () => {
    !val ? setVal(45) : setVal(0);
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

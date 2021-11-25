import { useState } from "react";

import { CheckboxContainer, StyledCheckbox } from "./Checkbox.styles";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <CheckboxContainer
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <StyledCheckbox checked={checked} />
      </CheckboxContainer>
    </>
  );
};

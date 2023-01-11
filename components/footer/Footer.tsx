import React, { useState } from "react";
import * as S from "./Footer.styles";
import Image from "next/image";

function Footer() {
  const [value, setValue] = useState("1");
  return (
    <S.Footer
      value={value}
      onChange={(event: React.SyntheticEvent, newValue: string) =>
        setValue(newValue)
      }
    >
      <S.Tab
        label="내 방"
        value={"1"}
        icon={<Image src="/image/door.svg" width={20} height={20} alt="door" />}
      />
      <S.Tab
        label="내 방"
        value={"2"}
        icon={<Image src="/image/door.svg" width={20} height={20} alt="door" />}
      />
      <S.Tab
        label="내 방"
        value={"3"}
        icon={<Image src="/image/door.svg" width={20} height={20} alt="door" />}
      />
    </S.Footer>
  );
}

export default Footer;

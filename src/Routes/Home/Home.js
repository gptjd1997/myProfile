import React, { useEffect, useState, memo } from "react";
import { Open, Myname, Menu, Close, Box } from "./Styles";

const Intros = [
  "전",
  "혜",
  "성",
  "&nbsp;의&nbsp;",
  "포",
  "트",
  "폴",
  "리",
  "오"
];
const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let Count = 300;
    const Intro = document.querySelector("#Intro");
    const Cursor = Intro.querySelector("#KeyCursor");
    Cursor.style.opacity = "0";
    setInterval(() => {
      if (Cursor.style.opacity === "0") {
        Cursor.style.opacity = "1";
      } else {
        Cursor.style.opacity = "0";
      }
    }, 1000);

    Intros.map(IntroValue => {
      const H1 = document.createElement("h1");
      H1.style.cssFloat = "left";
      H1.innerHTML = IntroValue;

      setTimeout(() => Intro.appendChild(H1), Count);
      Count += 200;
      return 0;
    });
  }, []);

  return (
    <>
      <Myname id="Intro">
        <h1 id="KeyCursor">Ι</h1>
      </Myname>
      <Menu onClick={() => (open ? setOpen(false) : setOpen(true))}>
        {open ? (
          <Box>
            <Open />
            <Open />
            <Open />
          </Box>
        ) : (
          <Box>
            <Close />
            <Close />
            <Close />
          </Box>
        )}
      </Menu>
    </>
  );
};
export default memo(Home);

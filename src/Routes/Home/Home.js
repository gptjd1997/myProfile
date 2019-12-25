import React, { useEffect, memo } from "react";
import { Myname } from "./Styles";

const Intros = ["전", "혜", "성", "&nbsp;의&nbsp;", "포", "트", "폴", "리", "오"];

const Home = () => {
  useEffect(() => {
    let Count = 300;
    const Intro = document.querySelector("#Intro");

    Intros.map(IntroValue => {
      const H1 = document.createElement("h1");
      H1.style.cssFloat = "left";
      H1.innerHTML = IntroValue;

      setTimeout(() => Intro.appendChild(H1), Count);
      Count += 200;
      if (H1.innerHTML === "오") {
        setInterval(() => {
          if (H1.className === "border") {
            H1.className = "noneBorder";
          } else {
            H1.className = "border";
          }
        }, 1000);
      }
      return 0;
    });
  }, []);

  return (
    <>
      <Myname id="Intro" />
    </>
  );
};
export default memo(Home);

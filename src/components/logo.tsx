import React from "react";

type LogoProps = {
    style? : React.CSSProperties
}

export const Logo = (props : LogoProps) => {
  return (
    <>
        <img style={{width: 128, height: "auto", ...props}} className="logo" src="assets/images/logo.png" alt="Atlas Chicken Games, Ltd."/>
    </>
  );
};
import React from "react";

type LogoProps = {
    style? : React.CSSProperties
}

export const Logo = (props : LogoProps) => {
  return (
    <>
        <img style={{width: "auto", height: 128, aspectRatio: 0.8076, ...props}} className="logo" src="assets/images/logo.png" alt="Atlas Chicken Games, Ltd."/>
    </>
  );
};
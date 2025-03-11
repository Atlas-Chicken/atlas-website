import React from "react";

export const Logo = (props : React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <>
      <img className="logo" src="assets/images/logo.png" alt="Atlas Chicken Games, Ltd." {...props}/>
    </>
  );
};
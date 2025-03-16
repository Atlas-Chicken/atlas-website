import { PropsWithChildren } from "react";

// I have sinned for I got this from a quora post
// https://www.quora.com/Is-there-an-algorithm-in-ReactJS-to-detect-whether-the-device-is-a-phone-or-a-computer

export const MobileView = (props : PropsWithChildren) =>  
  /Mobi|Android/i.test(navigator.userAgent) ?
    props.children : 
    null;

export const DesktopView = (props : PropsWithChildren) => 
  /Mobi|Android/i.test(navigator.userAgent) ?
    null:
    props.children;
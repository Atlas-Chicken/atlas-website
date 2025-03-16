import React from "react";

type AnchorProps = {
  id: string;
  title: string;
  style?: React.CSSProperties
}

// Separate #id element and h2 header to allow applying margin styling to header
export const Anchor = (props : AnchorProps) => {
  return (
    <>
      <div id={props.id} style={style}/>
      <h2 className="section-title" style={props.style}>{props.title}</h2>
    </>
  );
};

const style : React.CSSProperties = {
  paddingTop: "3em",
  marginTop: "-3em"
}
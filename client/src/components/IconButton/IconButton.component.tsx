import React from "react";
import * as CSS from "csstype";
import "./iconButton.component.css";
interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style: CSS.Properties;
}

export default function IconButton({
  onClick,
  children,
  style,
}: IconButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

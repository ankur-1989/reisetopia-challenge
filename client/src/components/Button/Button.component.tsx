import * as CSS from "csstype";

interface ButtonProps {
  title: string;
  onClick: () => void;
  style: CSS.Properties;
}

export default function Button({ title, onClick, style }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} style={style}>
      {title}
    </button>
  );
}

import {CSSProperties, FC, ReactNode} from "react";
import styles from "./button.module.scss";

interface IProps {
  children: ReactNode;
  color?: "green" | "black";
  style?: CSSProperties;
  className?: string;
}

const UserButton: FC<IProps> = (props) => {
  const colors = {"green": styles.green, "black": styles.black};
  return (
    <>
      <button
        className={`${styles.black} ${colors[props.color ?? "black"]} ${props.className}`}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
}

export default UserButton;
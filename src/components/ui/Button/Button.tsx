import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
interface IButtonProps {
  onbuttonclick?: Function;
  children: string | React.ReactElement | Array<React.ReactNode | string>;
  type?: "submit" | "reset" | "button" | undefined;
  bgColor?: "skyblue" | "tomato" | "lightgreen";
  style: object
  //obj?:{a:number;s?:string;o:{aa:string}}
}
const Button: React.FC<IButtonProps> = ({
  children,
  onbuttonclick,
  bgColor = "skyblue",
  type = "button",
  style
}) => {
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    setIsClicked(false);
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsClicked(false);
  //   }, 270);
  // }, [isClicked]);
  
  const clickHander = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsClicked(true);
    console.log(evt);
    // if (undefined !== props.onbuttonclick) {
    onbuttonclick!("coucou");
    //}
  };
  //console.log(props);
  return (
    <button
      onClick={clickHander}
      className={
        isClicked ? `${styles.Button} ${styles.clicked}` : styles.Button
      }
      type={type}
      style={{...style, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onbuttonclick: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button", undefined]),
};
/*
remplacer par les valeurs par def des props destructurees
Button.defaultProps = {
  type: "button",
};*/
export default Button;

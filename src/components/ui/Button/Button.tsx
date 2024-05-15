import React from "react";
import PropTypes from "prop-types";
interface IButtonProps {
  onbuttonclick?: Function;
  children: string | React.ReactElement | Array<React.ReactNode | string>;
  type?: "submit" | "reset" | "button" | undefined;
  //obj?:{a:number;s?:string;o:{aa:string}}
}
const Button: React.FC<IButtonProps> = ({
  children,
  onbuttonclick,
  type = "button",
}) => {
  const clickHander = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(evt);
    // if (undefined !== props.onbuttonclick) {
    onbuttonclick!("coucou");
    //}
  };
  //console.log(props);
  return (
    <button onClick={clickHander} className="Button" type={type}>
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

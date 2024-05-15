import React from "react";
import PropTypes from "prop-types";
interface IButtonProps {
  onbuttonclick?: Function;
  children: string | React.ReactElement | Array<React.ReactNode | string>;
  type?: "submit" | "reset" | "button" | undefined;
  //obj?:{a:number;s?:string;o:{aa:string}}
}
const Button: React.FC<IButtonProps> = (props) => {
  const clickHander = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(evt);
    // if (undefined !== props.onbuttonclick) {
    props.onbuttonclick!("coucou");
    //}
  };
  console.log(props);
  return (
    <button onClick={clickHander} className="Button" type={props.type}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onbuttonclick: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button", undefined]),
};
Button.defaultProps = {
  type: "button",
};
export default Button;

import React from "react";
interface IButtonProps {
  onbuttonclick: Function;
  titre: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  console.log(props);
  return <div className="Button">{props.titre}</div>;
};

export default Button;

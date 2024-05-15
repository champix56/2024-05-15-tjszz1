import React from "react";
interface IButtonProps {
  onbuttonclick: Function;
  titre: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  const clickHander = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(evt);
    props.onbuttonclick("coucou");
  };
  console.log(props);
  return (
    <button onClick={clickHander} className="Button">
      {props.titre}
    </button>
  );
};

export default Button;

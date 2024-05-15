import React from "react";
interface IButtonProps {
  onbuttonclick?: Function;
  children: string | React.ReactElement | Array<React.ReactNode | string>;
  type?: "submit" | "reset" | "button" | undefined;
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

export default Button;

import React from "react";
import styles from "./FlexH3Grow.module.css";
interface IFlexH3GrowProps {
  children: string | React.ReactElement | Array<React.ReactElement | string>;
  style?: {
    margin: string;
    padding: string;
    border: string;
  };
}

const FlexH3Grow: React.FC<IFlexH3GrowProps> = ({ children, style }) => {
  return (
    <div
      style={style}
      className={styles.FlexH3Grow}
      data-testid="FlexH3Grow"
    >
      {children}
    </div>
  );
};

export default FlexH3Grow;

import React from "react";
import styles from "./FlexW1Grow.module.css";
interface IFlexW1GrowProps {
  children: string | React.ReactElement | Array<React.ReactElement | string>;
  style?: {
    margin: string;
    padding: string;
    border: string;
  };
}

const FlexW1Grow: React.FC<IFlexW1GrowProps> = ({ children, style }) => {
  return (
    <div
      style={style}
      className={styles.FlexW1Grow}
      data-testid="FlexW1Grow"
    >
      {children}
    </div>
  );
};

export default FlexW1Grow;

import React from "react";
import styles from "./TemplateName.module.css";
interface ITemplateNameProps {
  children: string | React.ReactElement | Array<React.ReactElement | string>;
  style?: {
    margin: string;
    padding: string;
    border: string;
  };
}

const TemplateName: React.FC<ITemplateNameProps> = ({ children, style }) => {
  return (
    <div
      style={style}
      className={styles.TemplateName}
      data-testid="TemplateName"
    >
      {children}
    </div>
  );
};

export default TemplateName;

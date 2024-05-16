import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";
interface ITemplateNameProps {}
const initialState = {};
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName
      {JSON.stringify(props)}
      {JSON.stringify(state)}
    </div>
  );
};
TemplateName.propTypes = {};
export default TemplateName;

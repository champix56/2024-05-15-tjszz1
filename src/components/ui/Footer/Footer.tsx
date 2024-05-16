import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
interface IFooterProps {}
const initialState = {};
const Footer: React.FC<IFooterProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.Footer} data-testid="Footer">
      Footer
      {JSON.stringify(props)}
      {JSON.stringify(state)}
    </div>
  );
};
Footer.propTypes = {};
export default Footer;

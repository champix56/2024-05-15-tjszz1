import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
interface IHeaderProps {}
const initialState = {};
const Header: React.FC<IHeaderProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.Header} data-testid="Header">
      Header
      {JSON.stringify(props)}
      {JSON.stringify(state)}
    </div>
  );
};
Header.propTypes = {};
export default Header;

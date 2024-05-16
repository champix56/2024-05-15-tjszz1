import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
interface INavBarProps {}
const initialState = {};
const NavBar: React.FC<INavBarProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.NavBar} data-testid="NavBar">
      NavBar
      {JSON.stringify(props)}
      {JSON.stringify(state)}
    </div>
  );
};
NavBar.propTypes = {};
export default NavBar;

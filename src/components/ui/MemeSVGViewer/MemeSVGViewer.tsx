import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";
interface IMemeSvgViewerProps {}
const initialState = {};
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer
      {JSON.stringify(props)}
      {JSON.stringify(state)}
    </div>
  );
};
MemeSvgViewer.propTypes = {};
export default MemeSvgViewer;

import React from "react";

import styles from "./Footer.module.css";
interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      Meme Editor &copy; Orsys 2024
    </div>
  );
};
export default Footer;

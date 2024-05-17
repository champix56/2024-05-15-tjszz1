import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ImageInterface, MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import { Link } from "react-router-dom";
interface IMemeThumbnailProps {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}

const MemeThumbnail: React.FC<IMemeThumbnailProps> = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((m, mi) => (
        <Link to={"/edit/" + m.id} key={"mt" + mi}>
          <div>
            <MemeSVGViewer
              meme={m}
              image={props.images.find((img) => img.id === m.imageId)}
              basePath=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
interface Ip{

}
const ConnectedMemeThumbnail: React.FC<Ip> = () => {
  const ressources = useSelector((s: RootState) => s.ressources);

  return <MemeThumbnail {...ressources} />;
};
export default ConnectedMemeThumbnail;

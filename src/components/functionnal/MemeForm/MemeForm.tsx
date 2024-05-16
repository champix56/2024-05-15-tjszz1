import React, { useState } from "react";
import styles from "./MemeForm.module.css";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import Button from "../../ui/Button/Button";
interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange: Function;
  onMemeSubmit:Function;
  images: Array<ImageInterface>;
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const [old, setOld] = useState(props.meme)
  const handleStringChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...props.meme };
    // @ts-ignore
    newState[evt.target.name] = evt.target.value;
    props.onMemeChange(newState);
  };

  const handleNumberChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newState = { ...props.meme };
    // @ts-ignore
    newState[evt.target.name] = parseInt(evt.target.value);
    props.onMemeChange(newState);
  };
  const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...props.meme };
    // @ts-ignore
    newState[evt.target.name] = evt.target.checked;
    props.onMemeChange(newState);
  };
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onReset={() => {
          props.onMemeChange(old);
        }}
        onSubmit={evt=>{
          evt.preventDefault();
          props.onMemeSubmit(props.meme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={handleStringChange}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="imageId"
          id="imageId"
          value={props.meme.imageId}
          onChange={handleNumberChange}
        >
          <option value="-1">No image</option>
          {props.images.map((img, i) => (
            <option key={"img" + i} value={img.id}>
              {img.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={props.meme.text}
          onChange={handleStringChange}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={handleNumberChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={handleNumberChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={handleStringChange}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={handleNumberChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={handleStringChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={props.meme.underline}
          onChange={handleCheckboxChange}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={props.meme.italic}
          onChange={handleCheckboxChange}
        />
        <hr />
        <br />
        <div className={styles.halfContainer}>
          <Button type="reset" bgColor="tomato">
            Reinit
          </Button>
          <Button type="submit" bgColor="skyblue">
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;

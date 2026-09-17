import style from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return (
    <input
      type="text"
      className={style.display}
      value={displayvalue}
      readOnly
    />
  );
};

export default Display;

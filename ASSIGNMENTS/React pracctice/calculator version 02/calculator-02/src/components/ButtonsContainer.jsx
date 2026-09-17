import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ buttonhandle }) => {
  const ButtonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style["buttons-container"]}>
      {ButtonsName.map((buttons) => {
        return (
          <button
            key={buttons}
            className={style.button}
            onClick={() => buttonhandle(buttons)}
          >
            {buttons}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;

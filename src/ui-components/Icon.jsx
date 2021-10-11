// import MenuIcon from "../../publics/24px.svg";
import css from "./style/icon.module.css";
import icons from "./Icons.jsx";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      className={css.icon}
    >
      <path
        d={icons.menu}
      />
    </svg>
  );
}

export default Icon;

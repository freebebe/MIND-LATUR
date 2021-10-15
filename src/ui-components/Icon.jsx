// import MenuIcon from "../../publics/24px.svg";
import css from "./style/icon.module.css";
// import icons from "./icons.jsx";

function Icon() {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      className={css.icon}
    >
      <path
        // d={icons.menu}
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke="#000"
        stroke-width="15"
      />
    </svg>
  );
}

export default Icon;

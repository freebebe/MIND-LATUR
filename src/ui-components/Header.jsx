import css from "./style/header.module.css";
import IconButton from "./IconButton.jsx";

function Header() {
  return (
    <div className={css.container}>
      <IconButton name="menu" onClick={() => alert("click")} />
      <div className={css.title}>Header</div>
    </div>
  );
}

export default Header;

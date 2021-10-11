import css from "./style/leftmenu.module.css";
import Toolbar from "./Toolbar.jsx";

function LeftMenu() {
  return (
    <div className={css.container}>
      <Toolbar type="primary" />
    </div>
  );
}

export default LeftMenu;

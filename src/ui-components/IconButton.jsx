import Icon from "./Icon.jsx";
import css from "./style/iconbutton.module.css";

function IconButton(props) {
  return (
    <div className={css.container} onClick={props.onClick}>
      <Icon type={props.type} name={props.name} />
    </div>
  );
}

export default IconButton;

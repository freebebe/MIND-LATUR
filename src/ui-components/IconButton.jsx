import Icon from "./Icon.jsx";
import css from "./style/iconbutton.module.css";

function IconButton(props) {
  let className = css.container;
  className += " " + css[props.type];
  return (
    <div className={className} onClick={props.onClick}>
      <Icon type={props.type} name={props.name} />
    </div>
  );
}

export default IconButton;

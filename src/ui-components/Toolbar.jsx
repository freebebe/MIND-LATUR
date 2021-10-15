import IconButton from "./IconButton.jsx";
import css from "./style/toolbar.module.css";

function Toolbar(props) {
  const list = [
    { name: "home", onClick: () => alert("home check") },
    { name: "help", onClick: () => alert("help check") },
  ];
  let className = css.container;
  props.location.forEach((item) => {
    className += " " + css[item];
  });

  return (
    <div className={className}>
      {list.map((item) => (
        <div className="css.button">
          <IconButton
            key={item.name}
            name={item.name}
            onClick={item.onClick}
            type={props.type}
          />
        </div>
      ))}
    </div>
  );
}

export default Toolbar;

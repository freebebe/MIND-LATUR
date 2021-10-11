import IconButton from "./IconButton.jsx";

function Toolbar(props) {
  const list = [
    { name: "home", onClick: () => alert("home check") },
    { name: "help", onClick: () => alert("help check") },
  ];

  return (
    list.map(
      (item) => (
        <IconButton
          name={item.name}
          onClick={item.onClick}
          type={props.type}
        />
      ),
    )
  );
}

export default Toolbar;

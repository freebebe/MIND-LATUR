import css from "./style/content.module.css";
import Toolbar from "./Toolbar.jsx";

function Content() {
  const actionMenu = [
    { name: "add", onClick: () => alert("Add") },
    { name: "delete", onClick: () => alert("Delete") },
  ];

  const zoomMenu = [
    { name: "zoomIn", onClick: () => alert("ZoomIn") },
    { name: "zoomOut", onClick: () => alert("ZoomOut") },
    { name: "panTool", onClick: () => alert("panTool") },
  ];

  const viewMenu = [
    { name: "viewList", onClick: () => alert("View List") },
    { name: "hive", onClick: () => alert("View Chart") },
  ];

  return (
    <div className={css.container}>
      <Toolbar
        list={actionMenu}
        type="alert"
        location={["vertical", "right", "bottom"]}
      />
      <Toolbar
        list={zoomMenu}
        type="default"
        location={["horisontal", "right", "top"]}
      />
      <Toolbar
        list={viewMenu}
        type="default"
        location={["vertical", "left", "bottom"]}
      />
    </div>
  );
}

export default Content;

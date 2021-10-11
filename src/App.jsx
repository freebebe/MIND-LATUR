import Headers from "./ui-components/Header.jsx";
import LeftMenu from "./ui-components/LeftMenu.jsx";
import Breadcrumbs from "./ui-components/Breadcrumbs.jsx";
import Content from "./ui-components/Content.jsx";

function App() {
  return (
    <div>
      <Headers />
      <LeftMenu />
      <Breadcrumbs />
      <Content />
    </div>
  );
}

export default App;

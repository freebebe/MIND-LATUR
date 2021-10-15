import Home from "./Home.jsx";
import Help from "./Help.jsx";
import Map from "./Map.jsx";

const routes = {
  "home": { components: <Home />, breadcrumbs: ["home"] },
  "map": { components: <Map />, breadcrumbs: ["home", "map"] },
  "help": { components: <Help />, breadcrumbs: ["home", "help"] },
};

export default routes;

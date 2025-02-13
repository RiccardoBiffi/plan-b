import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import { Switch, Route } from "react-router-dom";

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={Onboarding} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default AppRoutes;

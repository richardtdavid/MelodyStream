import { Redirect, Route } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { list, home, search } from "ionicons/icons";

import Home from "./Home";
import Search from "./Search";
import ListDetail from "./ListDetail";
import Library from "./Library";
import { PATHS, PAGES } from "~/utils/constants";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={PATHS.HOME} component={Home} exact={true} />
        <Route path={PATHS.SEARCH} component={Search} exact={true} />
        <Route path={PATHS.LIST_DETAIL} component={ListDetail} exact={true} />
        <Route path={PATHS.LIBRARY} component={Library} exact={true} />
        <Route
          path="/tabs"
          render={() => <Redirect to={PATHS.HOME} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href={PATHS.HOME}>
          <IonIcon icon={home} />
          <IonLabel>{PAGES.HOME}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={PATHS.SEARCH}>
          <IonIcon icon={search} />
          <IonLabel>{PAGES.SEARCH}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href={PATHS.LIBRARY}>
          <IonIcon icon={list} />
          <IonLabel>{PAGES.LIBRARY}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

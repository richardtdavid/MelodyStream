import { StatusBar, Style } from "@capacitor/status-bar";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { list, home, search } from "ionicons/icons";
import { PATHS, PAGES } from "~/utils/constants";

const pages = [
  {
    title: PAGES.HOME,
    icon: home,
    url: PATHS.HOME,
  },
  {
    title: PAGES.SEARCH,
    icon: search,
    url: PATHS.SEARCH,
  },
  {
    title: PAGES.LIBRARY,
    icon: list,
    url: PATHS.LIBRARY,
  },
];

const Menu = () => {
  const [isDark, setIsDark] = useState(false);

  const handleOpen = async () => {
    try {
      await StatusBar.setStyle({
        style: isDark ? Style.Dark : Style.Light,
      });
    } catch {}
  };
  const handleClose = async () => {
    try {
      await StatusBar.setStyle({
        style: isDark ? Style.Dark : Style.Light,
      });
    } catch {}
  };

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <IonMenu
      side="start"
      contentId="main"
      onIonDidOpen={handleOpen}
      onIonDidClose={handleClose}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {pages.map((p, k) => (
            <IonMenuToggle autoHide={false} key={k}>
              <IonItem
                routerLink={p.url}
                routerDirection="none"
                detail={false}
                lines="none"
              >
                <IonIcon icon={p.icon} slot="start" />
                <IonLabel>{p.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

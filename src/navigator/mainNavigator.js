import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile195745Navigator from '../features/UserProfile195745/navigator';
import Tutorial195744Navigator from '../features/Tutorial195744/navigator';
import NotificationList195716Navigator from '../features/NotificationList195716/navigator';
import Settings195715Navigator from '../features/Settings195715/navigator';
import Settings195707Navigator from '../features/Settings195707/navigator';
import UserProfile195705Navigator from '../features/UserProfile195705/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile195745: { screen: UserProfile195745Navigator },
Tutorial195744: { screen: Tutorial195744Navigator },
NotificationList195716: { screen: NotificationList195716Navigator },
Settings195715: { screen: Settings195715Navigator },
Settings195707: { screen: Settings195707Navigator },
UserProfile195705: { screen: UserProfile195705Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

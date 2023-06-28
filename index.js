import {Navigation} from 'react-native-navigation';

import App from './App';
import Settings from './AppSettings';
import LoginScreen from './AppLoginScreen';

Navigation.registerComponent('login', () => LoginScreen);
Navigation.registerComponent('app', () => App);
Navigation.registerComponent('settings', () => Settings);

export const mainRoot = {
  
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'app',
          },
        },
      ],
    },
  },

  // root: {
  //   bottomTabs: {
  //     children: [
  //       {
  //         stack: {
  //           children: [
  //             {
  //               component: {
  //                 name: 'app',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         stack: {
  //           children: [
  //             {
  //               component: {
  //                 name: 'settings',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  // },
};

const loginRoot = {
  root: {
    component: {
      name: 'login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#218090',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

// Es esta funciona iria cierta logica para mostrar diferentes
// componentes en pantalla.

const isLoggedIn = password => {
  /* Si la pass es false muestra al componente loginRoot
   * Si no muestra el componente mainRoot
   */
  return '123#marx' === password;
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(isLoggedIn('1423#marx') ? mainRoot : loginRoot);

  //   Navigation.setRoot({

  // Sin 'bottomTabs'
  // root: {
  //   stack: {
  //     children: [
  //       {
  //         component: {
  //           name: 'app',
  //         },
  //       },
  //     ],
  //   },
  // },

  // con 'bottonTabs'
  // root: {
  //   bottomTabs: {
  //     children: [
  //       {
  //         stack: {
  //           children: [
  //             {
  //               component: {
  //                 name: 'app',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         stack: {
  //           children: [
  //             {
  //               component: {
  //                 name: 'settings',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  // },
  //   });
});

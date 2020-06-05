import React from 'react';
import {Scene, Stack, Router} from 'react-native-router-flux';

import {LoginContainer} from './src/scenes/Login';
import {HomeContainer} from './src/scenes/Home';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="LoginContainer"
        component={LoginContainer}
        hideNavBar
        initial={true}
      />
      <Scene
        key="HomeContainer"
        component={HomeContainer}
        hideNavBar
        initial={false}
      />
    </Stack>
  </Router>
);

export default Routes;

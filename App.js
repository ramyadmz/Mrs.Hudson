
import React from 'react';
import Home from './src/components/Home';
import LoginLightBox from './src/components/lightBox/LoginLightBox';

import {Router, Scene, Lightbox,Drawer} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import store from './src/redux/store';



class App extends React.Component {
  render() {
    const RouterWithRedux = connect()(Router);
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Lightbox>
            <Scene key="root" hideNavBar>
              <Scene key="home" component={Home} initial />
            </Scene>

            <Scene key="LoginLightBox" component={LoginLightBox} />
          </Lightbox>
        </RouterWithRedux>
      </Provider>

    );
  }
}

export default App;

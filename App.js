
import React from 'react';
import Home from './src/components/Home';
import LoginLightBox from './src/components/lightBox/LoginLightBox';
import DatePickerLightBox from './src/components/lightBox/DatePickerLightBox';
import SetPriorityLightBox from './src/components/lightBox/SetPriorityLightBox';
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
            <Scene key="DatePickerLightBox" component={DatePickerLightBox} />
            <Scene key="SetPriorityLightBox" component={SetPriorityLightBox} />
          </Lightbox>
        </RouterWithRedux>
      </Provider>

    );
  }
}

export default App;

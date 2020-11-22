import { createStore , applyMiddleware , compose} from 'redux';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import reducers from './../reducers';
import { persistStore} from "redux-persist";

const middleware = [ thunk ];


const store = createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(...middleware),
        
    )
);


persistStore(store);

export default store;
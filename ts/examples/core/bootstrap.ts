import {Store, createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {fork} from 'redux-saga/effects';
import DevTools from 'lib/core/DevTools';
import { reducer as formReducer } from 'redux-form'
import {SecurityReducer} from 'lib/core/security/security-reducers'
import {CoreReducer} from 'lib/core/CoreDucks'
import { routerReducer } from 'react-router-redux'
import {TrackingSaga} from 'lib/core/tracking/TrackingDucks';

const reducer = combineReducers({
  security: SecurityReducer,
  core: CoreReducer,
  form: formReducer,
  routing: routerReducer
})

export function configureStore() : Store<any> {
    const sagaMiddleware = createSagaMiddleware();
    const createStoreWithMiddleware = compose(
        applyMiddleware(
            sagaMiddleware
        ),
        DevTools.instrument()
    )(createStore)(reducer);
    const store = createStoreWithMiddleware;
    
    function* rootSaga(): any {
        yield fork(TrackingSaga);
    }

    sagaMiddleware.run(rootSaga);

    return store;
}

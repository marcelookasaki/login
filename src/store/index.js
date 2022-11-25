import {createStore, applyMiddleware} from 'redux'
import creatSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = creatSagaMiddleware()
const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default Store

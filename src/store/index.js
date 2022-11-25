import {createStore, applyMiddleware} from 'redux'
import creatSagaMiddleware from 'redux-saga'
import {persistStore} from 'redux-persist'

import persistedReducer from './modules/reduxPersist'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = creatSagaMiddleware()
const Store = createStore(
    persistedReducer(rootReducer),
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(rootSaga)

export default Store
export const persistor = persistStore(Store)

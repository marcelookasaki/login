import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import * as Types from '../types'
import * as Actions from './actions'


const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve()
      reject()
    }, 2000)
  })

function* exampleRequest() {
  try {
    yield call(requisicao)
    yield put(Actions.clicaBotaoSuccess())
  } catch {
    toast.error('Erro! :( ');
    yield put(Actions.clicaBotaoFailure())
  }
}

export default all([
  takeLatest(Types.BOTAO_CLICADO_REQUEST, exampleRequest)
])

import * as Types from '../types'

const initialState = {
  botaoClicado: false,
}

export default function (state = initialState, action) {
  switch (action.type) {

    case Types.BOTAO_CLICADO_REQUEST: {
      console.log('Requisição encaminhada!')
      return state;
    }

    case Types.BOTAO_CLICADO_SUCCESS: {
      console.log('OK!')
      const newState = { ...state }
      newState.botaoClicado = !newState.botaoClicado
      return newState;
    }
    case Types.BOTAO_CLICADO_FAILURE: {
      console.log('Erro! :( ')
      return state;
    }

    default: {
      return state
    }
  }
}

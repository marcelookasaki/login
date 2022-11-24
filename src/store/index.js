import {createStore} from 'redux'

const initialState = {
  botaoClicado: false,
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'BOTAO_CLICADO':{
      const newState = {...state}
      newState.botaoClicado = !newState.botaoClicado
      return newState;}
      default:{
        return state}
  }
}

const Store = createStore(reducer)

export default Store